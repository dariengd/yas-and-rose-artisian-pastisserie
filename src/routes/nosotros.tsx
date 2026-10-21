import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/site";
import { SectionTitle } from "@/components/site/Section";

const TITLE = "Nosotros — Yas&Rose, pastelería artesanal en Benidorm";
const DESC = "Conoce Yas&Rose: pasión por la pastelería artesanal, ingredientes de calidad y dulces de autor elaborados a mano en Benidorm, Marina Baixa.";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/nosotros" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: About,
});

const VALUES = [
  { t: "Sabor", d: "Mantequilla de calidad, fermentaciones lentas y recetas que respetan el producto." },
  { t: "Creatividad", d: "Dulces de autor y tartas personalizadas que cuentan tu historia." },
  { t: "Presentación", d: "Cada pieza se termina a mano con el mismo cuidado que el primer día." },
];

function About() {
  return (
    <>
      <section className="bg-ink py-20 text-center text-ink-foreground">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Nuestra historia</p>
        <h1 className="mx-auto mt-4 max-w-3xl px-4 font-serif text-4xl md:text-6xl">Pequeños placeres, grandes momentos</h1>
      </section>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <img src={POSTS[2]!.image} alt="Interior alveolado de un croissant artesanal Yas&Rose" className="aspect-square w-full object-cover shadow-elegant" />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Yas&amp;Rose nace de la pasión por la pastelería artesanal, el amor por los pequeños detalles y el deseo de convertir cada creación en una experiencia especial.</p>
          <p>Elaboramos productos artesanales con dedicación, creatividad e ingredientes de calidad, desde croissants y brioches hasta tartas personalizadas y dulces de autor.</p>
          <p>Nuestro objetivo es llevar la esencia de la pastelería artesanal a cafeterías, celebraciones y hogares de Benidorm y toda la Marina Baixa.</p>
          <Link to="/contacto" className="inline-block bg-gold-gradient px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground">Hablemos de tu encargo</Link>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Lo que nos mueve" title="Nuestro compromiso" />
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <article key={v.t} className="border-t-2 border-gold bg-card p-8">
                <h2 className="font-serif text-2xl">{v.t}</h2>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
