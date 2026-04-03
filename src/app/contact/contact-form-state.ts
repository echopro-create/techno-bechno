export const projectTypeOptions = [
  "Сайт-визитка / Лендинг",
  "Корпоративный сайт",
  "Мобильное приложение",
  "Нужна консультация",
] as const;

export type ContactProjectType = (typeof projectTypeOptions)[number];

export type ContactFormValues = {
  name: string;
  contact: string;
  projectType: ContactProjectType;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: ContactFieldErrors;
  values: ContactFormValues;
  submissionId: string;
};

export const emptyContactFormValues: ContactFormValues = {
  name: "",
  contact: "",
  projectType: projectTypeOptions[0],
  message: "",
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: emptyContactFormValues,
  submissionId: "initial",
};

function normalizeTextEntry(entry: FormDataEntryValue | null) {
  return typeof entry === "string" ? entry.trim() : "";
}

function normalizeProjectType(entry: FormDataEntryValue | null): ContactProjectType {
  if (typeof entry !== "string") {
    return projectTypeOptions[0];
  }

  return projectTypeOptions.includes(entry as ContactProjectType)
    ? (entry as ContactProjectType)
    : projectTypeOptions[0];
}

export function getContactFormValues(formData: FormData): ContactFormValues {
  return {
    name: normalizeTextEntry(formData.get("name")),
    contact: normalizeTextEntry(formData.get("contact")),
    projectType: normalizeProjectType(formData.get("projectType")),
    message: normalizeTextEntry(formData.get("message")),
  };
}

export function validateContactForm(values: ContactFormValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (values.name.length < 2) {
    errors.name = "Укажите имя не короче 2 символов.";
  }

  const digitsOnly = values.contact.replace(/\D/g, "");
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contact);
  const looksLikePhone = digitsOnly.length >= 10;

  if (!values.contact) {
    errors.contact = "Укажите email или телефон.";
  } else if (!looksLikeEmail && !looksLikePhone) {
    errors.contact = "Введите корректный email или телефон.";
  }

  if (!projectTypeOptions.includes(values.projectType)) {
    errors.projectType = "Выберите тип проекта из списка.";
  }

  if (values.message.length < 10) {
    errors.message = "Опишите задачу хотя бы в 10 символах.";
  }

  return errors;
}

export function hasFieldErrors(errors: ContactFieldErrors) {
  return Object.keys(errors).length > 0;
}
