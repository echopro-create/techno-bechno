"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight } from "lucide-react";
import { submitContactForm } from "./actions";
import {
  initialContactFormState,
  projectTypeOptions,
} from "./contact-form-state";

function FieldError({
  errorId,
  message,
}: {
  errorId: string;
  message?: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <p
      id={errorId}
      role="alert"
      className="mt-3 text-sm text-[color:var(--danger)]"
    >
      {message}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="action-primary mt-2 min-h-12 w-full disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Отправляем..." : "Отправить заявку"}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  const isSuccess = state.status === "success";
  const isError = state.status === "error";
  const statusTone = isSuccess
    ? "text-[color:var(--success)]"
    : isError
      ? "text-[color:var(--danger)]"
      : "";

  return (
    <form key={state.submissionId} action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-3 block text-sm font-semibold text-[color:var(--foreground)]"
          >
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={state.values.name}
            aria-invalid={Boolean(state.fieldErrors.name)}
            aria-describedby={state.fieldErrors.name ? "name-error" : undefined}
            className="input-surface"
            placeholder="Иван Иванов"
          />
          <FieldError errorId="name-error" message={state.fieldErrors.name} />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="mb-3 block text-sm font-semibold text-[color:var(--foreground)]"
          >
            Email или телефон
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            autoComplete="email"
            required
            defaultValue={state.values.contact}
            aria-invalid={Boolean(state.fieldErrors.contact)}
            aria-describedby={
              state.fieldErrors.contact ? "contact-error" : undefined
            }
            className="input-surface"
            placeholder="hello@company.ru или +7 999 123-45-67"
          />
          <FieldError
            errorId="contact-error"
            message={state.fieldErrors.contact}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-3 block text-sm font-semibold text-[color:var(--foreground)]"
        >
          Тип задачи
        </label>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue={state.values.projectType}
            aria-invalid={Boolean(state.fieldErrors.projectType)}
            aria-describedby={
              state.fieldErrors.projectType ? "project-type-error" : undefined
            }
            className="input-surface appearance-none pr-12"
          >
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[color:var(--muted)]">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <FieldError
          errorId="project-type-error"
          message={state.fieldErrors.projectType}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-3 block text-sm font-semibold text-[color:var(--foreground)]"
        >
          Краткое описание проекта
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          autoComplete="off"
          required
          defaultValue={state.values.message}
          aria-invalid={Boolean(state.fieldErrors.message)}
          aria-describedby={state.fieldErrors.message ? "message-error" : undefined}
          placeholder="Что нужно запустить, для кого и в какие сроки."
          className="input-surface resize-none"
        />
        <FieldError
          errorId="message-error"
          message={state.fieldErrors.message}
        />
      </div>

      {state.message ? (
        <p
          role={isError ? "alert" : "status"}
          aria-live="polite"
          className={`text-sm font-semibold ${statusTone}`}
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />

      <p className="text-sm text-[color:var(--muted)]">
        Данные используются только для связи по вашему запросу. Никаких
        сторонних рассылок и перепродажи контактов.
      </p>
    </form>
  );
}
