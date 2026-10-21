import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Coffee, Home } from "lucide-react";
import { InstagramGallery } from "@/components/site/InstagramGallery";
import { ContactHub } from "@/components/site/ContactHub";
import { FAQAccordion } from "@/components/site/FAQ";
import { SectionTitle } from "@/components/site/Section";
import { CONTACT, FAQ, POSTS, waLink } from "@/lib/site";

const TITLE = "Yas&Rose — Pastelería artesanal en Benidorm | Tartas y croissants";
const DESC = "Pastelería artesanal en Benidorm: croissants, brioches, tartas personalizadas y dulces de autor para hogares, celebraciones y cafeterías de la Marina Baixa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Yas&Rose — Pastelería artesanal",
          description: DESC,
          telephone: CONTACT.phone,
          email: CONTACT.email,
          address: { "@type": "PostalAddress", addressLocality: "Benidorm", addressRegion: "Alicante", addressCountry: "ES" },
          areaServed: ["Benidorm", "Altea", "Finestrat", "L'Alfàs del Pi", "Villajoyosa", "Marina Baixa"],
          sameAs: [CONTACT.instagram],
          servesCuisine: "Pastelería",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const SEGMENTS = [
  { icon: Home, title: "Para tu hogar", text: "Desayunos, meriendas y caprichos diarios hechos con mantequilla y paciencia." },
  { icon: Cake, title: "Celebraciones y eventos", text: "Tartas personalizadas hechas a medida para cumpleaños, bodas y momentos inolvidables." },
  { icon: Coffee, title: "Cafeterías y B2B", text: "Suministro regular de bollería artesanal y dulces de autor para negocios locales de Benidorm." },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <img src="/images/logo.jpg" alt="" className="mb-6 h-20 w-20 rounded-full md:hidden" />
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Obrador artesanal · Benidorm</p>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              <span className="text-gold-gradient">Yas&amp;Rose</span>
              <span className="mt-3 block font-serif text-2xl italic normal-case tracking-normal md:text-3xl">Pastelería artesanal en Benidorm</span>
            </h1>
            <p className="mt-6 max-w-lg leading-relaxed opacity-85">
              Yas&amp;Rose nace de la pasión por la pastelería artesanal, el amor por los pequeños detalles y el deseo de convertir cada creación en una experiencia especial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="bg-gold-gradient px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5">Pedir por WhatsApp</a>
              <Link to="/creaciones" className="border border-gold/50 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-gold/10">Ver catálogo visual</Link>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-3">
            <img src="/images/01_post_DeuRUctNzi2.jpg" alt="Espirales de cacao artesanales recién formadas en el obrador de Yas&Rose Benidorm" className="aspect-[3/4] w-full object-cover" />
            <div className="relative mt-10">
              <img src={POSTS[1]!.image} alt="Tarta personalizada con frutas y macarons" className="aspect-[3/4] w-full object-cover" />
              <div aria-hidden className="hero-fade pointer-events-none absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <SectionTitle eyebrow="Nuestra esencia" title="Hecho a mano, pensado al detalle" />
        <div className="grid gap-6 text-lg leading-relaxed text-muted-foreground md:grid-cols-2 md:text-left">
          <p>Elaboramos productos artesanales con dedicación, creatividad e ingredientes de calidad, desde croissants y brioches hasta tartas personalizadas y dulces de autor. Cada elaboración refleja nuestro compromiso con el sabor, la calidad y una presentación cuidada.</p>
          <p>Nuestro objetivo es llevar la esencia de la pastelería artesanal a cafeterías, celebraciones y hogares, creando productos únicos que sorprendan y dejen huella.</p>
        </div>
        <p className="mt-12 font-serif text-2xl italic md:text-3xl">“Yas&amp;Rose: pasión artesanal, creatividad y dulzura en cada creación.”</p>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Para quién horneamos" title="De nuestro obrador a tu mesa" />
          <div className="grid gap-6 md:grid-cols-3">
            {SEGMENTS.map(({ icon: Icon, title, text }) => (
              <article key={title} className="border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <Icon className="text-gold-deep" size={28} />
                <h3 className="mt-5 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle eyebrow={`Síguenos en ${CONTACT.instagramHandle}`} title="Inspiración diaria" sub="Explora nuestras últimas creaciones artesanales directamente desde nuestro obrador." />
        <InstagramGallery limit={6} />
        <div className="mt-8 text-center">
          <Link to="/creaciones" className="text-sm uppercase tracking-widest text-gold-deep underline-offset-4 hover:underline">Ver todas las creaciones →</Link>
        </div>
      </section>

      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle
            eyebrow="Resolvemos tus dudas"
            title="Preguntas frecuentes"
            sub="Lo que más nos preguntan sobre encargos, plazos, personalización, alergias y pedidos para negocios en Benidorm y la Marina Baixa."
          />
          <FAQAccordion />
          <p className="mt-10 text-center text-sm text-muted-foreground">
            ¿Te queda alguna duda?{" "}
            <a href={waLink("¡Hola Yas&Rose! Tengo una consulta.")} target="_blank" rel="noreferrer" className="text-gold-deep underline underline-offset-4 hover:no-underline">
              Pregúntanos por WhatsApp
            </a>
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Hablemos" title="Haz tu encargo como prefieras" sub="WhatsApp, llamada, SMS, correo o déjanos tus datos y te contactamos." />
          <ContactHub />
        </div>
      </section>
    </>
  );
}
