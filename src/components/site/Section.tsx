import type { ReactNode } from "react";

export function SectionTitle({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-deep">{eyebrow}</p>}
      <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
