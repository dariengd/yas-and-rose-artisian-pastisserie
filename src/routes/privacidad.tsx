import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Yas&Rose" },
      { name: "description", content: "Cómo Yas&Rose trata los datos que nos envías a través del formulario de contacto." },
      { property: "og:title", content: "Política de privacidad — Yas&Rose" },
      { property: "og:description", content: "Cómo tratamos tus datos de contacto." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="mx-auto max-w-3xl space-y-4 px-4 py-20 leading-relaxed text-muted-foreground">
      <h1 className="font-serif text-4xl text-foreground">Política de privacidad</h1>
      <p>Los datos que nos facilitas en el formulario (nombre, teléfono, correo y mensaje) se usan únicamente para responder a tu consulta o encargo. No se ceden a terceros.</p>
      <p>Puedes solicitar el acceso, rectificación o eliminación de tus datos escribiendo a {CONTACT.email}.</p>
    </section>
  );
}
