import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Mail, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT, waLink } from "@/lib/site";

const schema = z.object({
  full_name: z.string().trim().min(1, "Indica tu nombre").max(100),
  phone: z.string().trim().max(30).optional(),
  email: z.string().trim().email("Correo no válido").max(255),
  inquiry_type: z.enum(["particular", "evento", "cafeteria"]),
  message: z.string().trim().min(1, "Escribe tu mensaje").max(1000),
});

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp", hint: "Respuesta rápida", href: waLink() },
  { icon: Phone, label: "Llamar por teléfono", hint: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
  { icon: MessageSquare, label: "Mensaje de texto (SMS)", hint: CONTACT.phoneDisplay, href: `sms:${CONTACT.phone}` },
  { icon: Mail, label: "Correo electrónico", hint: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

const field = "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold";

export function ContactHub() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(fd);
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? "Revisa los datos");
    setStatus("sending");
    const { error } = await supabase.from("contact_submissions").insert({ ...parsed.data, phone: parsed.data.phone || null });
    if (error) {
      setStatus("idle");
      return setError("No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp.");
    }
    setStatus("done");
  }

  return (
    <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
      <div className="grid gap-3">
        {CHANNELS.map(({ icon: Icon, label, hint, href }) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-elegant">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-gold"><Icon size={20} /></span>
            <span className="min-w-0">
              <span className="block font-medium">{label}</span>
              <span className="block truncate text-sm text-muted-foreground">{hint}</span>
            </span>
          </a>
        ))}
      </div>
      <div className="border border-border bg-card p-6 md:p-8">
        {status === "done" ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
            <CheckCircle2 size={48} className="text-gold-deep" />
            <p className="font-serif text-2xl">¡Gracias! Nos pondremos en contacto contigo en menos de 24 horas.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="full_name" placeholder="Nombre completo" className={field} maxLength={100} required />
              <input name="phone" type="tel" placeholder="Teléfono" className={field} maxLength={30} />
            </div>
            <input name="email" type="email" placeholder="Correo electrónico" className={field} maxLength={255} required />
            <select name="inquiry_type" className={field} defaultValue="particular">
              <option value="particular">Encargo particular</option>
              <option value="evento">Evento / Celebración</option>
              <option value="cafeteria">Cafetería / B2B</option>
            </select>
            <textarea name="message" rows={5} placeholder="Cuéntanos qué te gustaría: fecha, número de personas, sabores…" className={field} maxLength={1000} required />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button disabled={status === "sending"} className="bg-gold-gradient px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">
              {status === "sending" ? "Enviando…" : "Enviar consulta"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
