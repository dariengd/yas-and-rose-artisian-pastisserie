import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { InstagramGallery } from "@/components/site/InstagramGallery";
import { CONTACT } from "@/lib/site";

const TITLE = "Creaciones — Croissants, tartas y dulces de autor en Benidorm | Yas&Rose";
const DESC = "Catálogo visual de Yas&Rose desde Instagram: croissants, brioches, tartas personalizadas y dulces de autor artesanales en Benidorm.";

export const Route = createFileRoute("/creaciones")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/creaciones" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/creaciones" }],
  }),
  component: Creations,
});

function Creations() {
  return (
    <>
      <section className="bg-ink py-20 text-center text-ink-foreground">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Catálogo visual</p>
        <h1 className="mx-auto mt-4 max-w-3xl px-4 font-serif text-4xl md:text-6xl">Nuestras creaciones</h1>
        <p className="mx-auto mt-4 max-w-xl px-4 opacity-80">Toca cualquier dulce para verlo de cerca y preguntarnos por él directamente por WhatsApp.</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <InstagramGallery />
        <div className="mt-12 text-center">
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-ink hover:text-ink-foreground">
            <Instagram size={16} /> Seguir {CONTACT.instagramHandle}
          </a>
        </div>
      </section>
    </>
  );
}
