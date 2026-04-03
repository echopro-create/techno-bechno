import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Временная placeholder-страница политики конфиденциальности для сайта веб-студии.",
};

export default function PrivacyPage() {
  return (
    <div className="mesh-bg min-h-screen px-6 pt-36 pb-24">
      <div className="max-w-3xl mx-auto glass-panel rounded-[2.5rem] p-10 md:p-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Политика конфиденциальности
        </h1>
        <p className="text-lg text-[color:var(--muted)] leading-relaxed">
          Это временная placeholder-страница. Полный юридический текст политики
          конфиденциальности будет добавлен на следующем этапе.
        </p>
      </div>
    </div>
  );
}
