"use server";

import {
  emptyContactFormValues,
  getContactFormValues,
  hasFieldErrors,
  type ContactFormState,
  validateContactForm,
} from "./contact-form-state";

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = getContactFormValues(formData);
  const fieldErrors = validateContactForm(values);

  if (hasFieldErrors(fieldErrors)) {
    return {
      status: "error",
      message: "Проверьте поля формы и исправьте ошибки.",
      fieldErrors,
      values,
      submissionId: "validation-error",
    };
  }

  return {
    status: "success",
    message:
      "Заявка принята в тестовом режиме. Сейчас это placeholder-flow: данные валидируются, но не отправляются во внешние сервисы.",
    fieldErrors: {},
    values: emptyContactFormValues,
    submissionId: `success-${Date.now()}`,
  };
}
