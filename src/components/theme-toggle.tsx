"use client";

import { useEffect, useState } from "react";
import styles from "./theme-toggle.module.css";

type ThemePreference = "light" | "system" | "dark";

const STORAGE_KEY = "mrhide-theme-preference";

const options: Array<{ label: string; value: ThemePreference }> = [
  { label: "Свет", value: "light" },
  { label: "Авто", value: "system" },
  { label: "Тьма", value: "dark" },
];

function readPreference(): ThemePreference {
  if (typeof document === "undefined") {
    return "system";
  }

  return (
    (document.documentElement.dataset.themePreference as ThemePreference | undefined) ??
    (localStorage.getItem(STORAGE_KEY) as ThemePreference | null) ??
    "system"
  );
}

function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;
  const resolved =
    preference === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : preference;

  root.dataset.theme = resolved;
  root.dataset.themePreference = preference;
  root.style.colorScheme = resolved;
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>(readPreference);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = (localStorage.getItem(STORAGE_KEY) as ThemePreference | null) ?? "system";
      if (current === "system") {
        applyTheme("system");
        setPreference("system");
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  const handleSelect = (nextPreference: ThemePreference) => {
    localStorage.setItem(STORAGE_KEY, nextPreference);
    applyTheme(nextPreference);
    setPreference(nextPreference);
  };

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label="Переключение темы"
      suppressHydrationWarning
    >
      {options.map((option) => {
        const isActive = preference === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={isActive ? styles.active : styles.button}
            onClick={() => handleSelect(option.value)}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
