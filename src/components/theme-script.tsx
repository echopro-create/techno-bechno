export function ThemeScript() {
  const script = `
    (() => {
      const storageKey = "mrhide-theme-preference";
      const root = document.documentElement;
      const media = window.matchMedia("(prefers-color-scheme: dark)");

      const resolveTheme = (preference) => {
        if (preference === "system") {
          return media.matches ? "dark" : "light";
        }

        return preference;
      };

      const applyTheme = (preference) => {
        const resolved = resolveTheme(preference);
        root.dataset.theme = resolved;
        root.dataset.themePreference = preference;
        root.style.colorScheme = resolved;
      };

      const preference = localStorage.getItem(storageKey) || "system";
      applyTheme(preference);

      const handleChange = () => {
        const current = localStorage.getItem(storageKey) || "system";
        if (current === "system") {
          applyTheme("system");
        }
      };

      if (media.addEventListener) {
        media.addEventListener("change", handleChange);
      } else if (media.addListener) {
        media.addListener(handleChange);
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
