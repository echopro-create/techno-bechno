"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );

    if (!mounted) {
        return <div className="w-9 h-9" aria-hidden="true" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2.5 rounded-full hover:bg-[color:var(--foreground)]/5 transition-colors duration-300 relative group"
            aria-label={isDark ? "Включить светлую тему" : "Включить темную тему"}
        >
            <div className="absolute inset-0 rounded-full bg-[color:var(--foreground)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            {isDark ? (
                <Sun className="w-4 h-4 text-[color:var(--foreground)] relative z-10" />
            ) : (
                <Moon className="w-4 h-4 text-[color:var(--foreground)] relative z-10" />
            )}
        </button>
    );
}
