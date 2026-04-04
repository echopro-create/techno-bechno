import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Служебная страница WebStudio с placeholder-версией политики конфиденциальности.",
};

export default function PrivacyPage() {
  return (
    <div className="page-shell mesh-bg">
      <section className="page-section content-layer pt-8 md:pt-14">
        <div className="surface-card max-w-3xl p-8 md:p-10">
          <p className="section-kicker">Legal</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.4rem)] font-semibold">
            Политика конфиденциальности
          </h1>
          <p className="mt-5 text-lg text-[color:var(--muted)]">
            Это временная placeholder-страница. Финальный юридический текст будет
            добавлен отдельным этапом после согласования реквизитов и регламента
            обработки данных.
          </p>
        </div>
      </section>
    </div>
  );
}
