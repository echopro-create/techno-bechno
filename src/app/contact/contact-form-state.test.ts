import { describe, expect, it } from "vitest";
import {
  getContactFormValues,
  projectTypeOptions,
  validateContactForm,
} from "./contact-form-state";

describe("contact form validation", () => {
  it("returns field errors for incomplete submission", () => {
    const errors = validateContactForm({
      name: "A",
      contact: "123",
      projectType: projectTypeOptions[0],
      message: "short",
    });

    expect(errors.name).toBe("Укажите имя не короче 2 символов.");
    expect(errors.contact).toBe("Введите корректный email или телефон.");
    expect(errors.message).toBe("Опишите задачу хотя бы в 10 символах.");
  });

  it("accepts valid data for an email-based submission", () => {
    const errors = validateContactForm({
      name: "Иван",
      contact: "hello@example.com",
      projectType: projectTypeOptions[2],
      message: "Нужно приложение для внутреннего сервиса компании.",
    });

    expect(errors).toEqual({});
  });

  it("normalizes form data and falls back to a safe project type", () => {
    const formData = new FormData();
    formData.set("name", "  Анна  ");
    formData.set("contact", "  +7 (999) 123-45-67 ");
    formData.set("projectType", "Неизвестный проект");
    formData.set("message", "  Нужно быстро собрать лендинг для запуска.  ");

    const values = getContactFormValues(formData);

    expect(values).toEqual({
      name: "Анна",
      contact: "+7 (999) 123-45-67",
      projectType: projectTypeOptions[0],
      message: "Нужно быстро собрать лендинг для запуска.",
    });
  });
});
