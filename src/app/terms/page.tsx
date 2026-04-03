import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия использования",
  description:
    "Временная placeholder-страница условий использования для сайта веб-студии.",
};

export default function TermsPage() {
  return (
    <div className="mesh-bg min-h-screen px-6 pt-36 pb-24">
      <div className="max-w-3xl mx-auto glass-panel rounded-[2.5rem] p-10 md:p-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Условия использования
        </h1>
        <p className="text-lg text-[color:var(--muted)] leading-relaxed">
          Это временная placeholder-страница. Финальная версия условий
          использования будет подготовлена отдельно.
        </p>
      </div>
    </div>
  );
}
