import { createFileRoute } from "@tanstack/react-router";
import { ContactHub } from "@/components/site/ContactHub";

const TITLE = "Contacto y encargos — Yas&Rose Pastelería en Benidorm";
const DESC = "Encarga tu tarta personalizada o bollería artesanal en Benidorm. Contacta con Yas&Rose por WhatsApp, teléfono, SMS, email o formulario.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-ink py-20 text-center text-ink-foreground">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Encargos · Eventos · Cafeterías</p>
        <h1 className="mx-auto mt-4 max-w-3xl px-4 font-serif text-4xl md:text-6xl">Hablemos de dulzura</h1>
        <p className="mx-auto mt-4 max-w-xl px-4 opacity-80">Servimos Benidorm, Altea, Finestrat y toda la Marina Baixa. Elige el canal que prefieras.</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <ContactHub />
      </section>
    </>
  );
}
