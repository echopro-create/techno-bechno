"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";
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
    <p id={errorId} role="alert" className="mt-3 text-sm text-red-500">
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
      className="w-full py-5 mt-2 bg-[color:var(--foreground)] text-[color:var(--background)] rounded-2xl font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10 dark:shadow-white/5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
    >
      {pending ? "Отправляем..." : "Отправить заявку"}
      <Send className="w-5 h-5" />
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
  const statusTone = isSuccess ? "text-green-600" : isError ? "text-red-500" : "";

  return (
    <form
      key={state.submissionId}
      action={formAction}
      className="space-y-6 glass-panel p-10 rounded-[2.5rem] shadow-xl shadow-black/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="mb-3 block text-sm font-semibold tracking-wide text-[color:var(--foreground)]"
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
            className="w-full px-5 py-5 rounded-2xl bg-[color:var(--background)] border border-[color:var(--border)] outline-none transition-all text-base focus:border-[color:var(--accent)]"
            placeholder="Иван Иванов"
          />
          <FieldError errorId="name-error" message={state.fieldErrors.name} />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="mb-3 block text-sm font-semibold tracking-wide text-[color:var(--foreground)]"
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
            aria-describedby={state.fieldErrors.contact ? "contact-error" : undefined}
            className="w-full px-5 py-5 rounded-2xl bg-[color:var(--background)] border border-[color:var(--border)] outline-none transition-all text-base focus:border-[color:var(--accent)]"
            placeholder="hello@company.ru или +7 999 123-45-67"
          />
          <FieldError errorId="contact-error" message={state.fieldErrors.contact} />
        </div>
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-3 block text-sm font-semibold tracking-wide text-[color:var(--foreground)]"
        >
          Тип задачи
        </label>
        <div className="relative rounded-2xl">
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue={state.values.projectType}
            aria-invalid={Boolean(state.fieldErrors.projectType)}
            aria-describedby={
              state.fieldErrors.projectType ? "project-type-error" : undefined
            }
            className="w-full px-5 py-5 rounded-2xl bg-[color:var(--background)] border border-[color:var(--border)] outline-none transition-all appearance-none text-base font-medium cursor-pointer focus:border-[color:var(--accent)]"
          >
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-[color:var(--muted)]"
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
          className="mb-3 block text-sm font-semibold tracking-wide text-[color:var(--foreground)]"
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
          placeholder="Опишите цель проекта, желаемый объём и сроки."
          className="w-full px-5 py-5 rounded-2xl bg-[color:var(--background)] border border-[color:var(--border)] outline-none transition-all resize-none text-base placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
        />
        <FieldError errorId="message-error" message={state.fieldErrors.message} />
      </div>

      {state.message ? (
        <p
          role={isError ? "alert" : "status"}
          aria-live="polite"
          className={`text-sm font-medium ${statusTone}`}
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />

      <p className="text-xs font-medium text-[color:var(--muted)] text-center mt-6">
        Ваши данные в безопасности. Мы не передаем их третьим лицам.
      </p>
    </form>
  );
}
