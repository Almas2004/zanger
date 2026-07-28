(function () {
  function maskPhone(input) {
    let digits = input.value.replace(/\D/g, "");
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    if (!digits.startsWith("7")) digits = "7" + digits;
    digits = digits.slice(0, 11);
    const parts = ["+7"];
    if (digits.length > 1) parts.push(" " + digits.slice(1, 4));
    if (digits.length > 4) parts.push(" " + digits.slice(4, 7));
    if (digits.length > 7) parts.push(" " + digits.slice(7, 9));
    if (digits.length > 9) parts.push(" " + digits.slice(9, 11));
    input.value = parts.join("");
  }

  function fillSelects() {
    document.querySelectorAll("[data-service-select]").forEach((select) => {
      const current = select.value;
      const services = window.ZANGER_I18N?.services ? window.ZANGER_I18N.services() : window.ZANGER_SERVICES;
      const placeholder = window.ZANGER_I18N?.t("forms.servicePlaceholder") || "Интересующая услуга";
      select.innerHTML = `<option value="">${placeholder}</option>` + services.map((service) => `<option value="${service.title}">${service.title}</option>`).join("");
      if (current) select.value = current;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const error = form.querySelector("[data-form-error]");
    const data = new FormData(form);
    const phoneDigits = String(data.get("phone") || "").replace(/\D/g, "");
    if (!data.get("name") || phoneDigits.length < 11 || !data.get("message") || !data.get("agree")) {
      if (error) error.textContent = window.ZANGER_I18N?.t("forms.error") || "Заполните имя, корректный телефон, описание вопроса и согласие.";
      return;
    }
    if (error) error.textContent = "";
    const t = (key) => window.ZANGER_I18N?.t(key) || key;
    const message = [
      t("forms.whatsappGreeting"),
      "",
      t("forms.fieldName") + ": " + data.get("name"),
      t("forms.fieldPhone") + ": " + data.get("phone"),
      t("forms.fieldCity") + ": " + (data.get("city") || t("forms.notSpecified")),
      t("forms.fieldService") + ": " + (data.get("service") || t("forms.notSelected")),
      t("forms.fieldMessage") + ": " + data.get("message")
    ].join("\n");
    window.open(`https://wa.me/${window.ZANGER_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    form.querySelector("button[type='submit']").disabled = true;
    setTimeout(() => { form.querySelector("button[type='submit']").disabled = false; }, 1600);
  }

  window.ZANGER_FORM = { fillSelects };
  document.addEventListener("DOMContentLoaded", () => {
    fillSelects();
    document.querySelectorAll("[data-phone-mask]").forEach((input) => input.addEventListener("input", () => maskPhone(input)));
    document.querySelectorAll("[data-consult-form]").forEach((form) => form.addEventListener("submit", handleSubmit));
  });
})();
