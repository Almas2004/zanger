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
      select.innerHTML = '<option value="">Интересующая услуга</option>' + window.ZANGER_SERVICES.map((service) => `<option value="${service.title}">${service.title}</option>`).join("");
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
      if (error) error.textContent = "Заполните имя, корректный телефон, описание вопроса и согласие.";
      return;
    }
    if (error) error.textContent = "";
    const message = [
      "Здравствуйте! Хочу получить юридическую консультацию.",
      "",
      "Имя: " + data.get("name"),
      "Телефон: " + data.get("phone"),
      "Город: " + (data.get("city") || "не указан"),
      "Услуга: " + (data.get("service") || "не выбрана"),
      "Описание ситуации: " + data.get("message")
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
