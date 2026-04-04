import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия использования",
  description:
    "Служебная страница WebStudio с placeholder-версией условий использования.",
};

export default function TermsPage() {
  return (
    <div className="page-shell mesh-bg">
      <section className="page-section content-layer pt-8 md:pt-14">
        <div className="surface-card max-w-3xl p-8 md:p-10">
          <p className="section-kicker">Legal</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.4rem)] font-semibold">
            Условия использования
          </h1>
          <p className="mt-5 text-lg text-[color:var(--muted)]">
            Это временная placeholder-страница. Финальная версия условий
            использования будет подготовлена после отдельной юридической
            вычитки.
          </p>
        </div>
      </section>
    </div>
  );
}
