import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-24 text-ink-foreground md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-[0.2em] text-gold-gradient">YAS &amp; ROSE</p>
          <p className="mt-3 text-sm leading-relaxed opacity-80">
            Yas&amp;Rose — Alta pastelería y bollería artesanal. Obrador local sirviendo a Benidorm, Altea, Finestrat y
            la comarca de la Marina Baixa. Tartas personalizadas, dulces de autor y croissants en Benidorm.
          </p>
        </div>
        <div>
          <p className="font-display text-sm tracking-widest text-gold">HORARIO DE RECOGIDA</p>
          <ul className="mt-3 space-y-1 text-sm opacity-80">
            <li>Martes a viernes · 8:00 – 14:00</li>
            <li>Sábado · 8:00 – 13:00</li>
            <li>Encargos con 48 h de antelación</li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-widest text-gold">CONTACTO</p>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 hover:text-gold"><Phone size={14} />{CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-gold"><Mail size={14} />{CONTACT.email}</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Instagram size={14} />{CONTACT.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15 px-4 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Yas&amp;Rose · Pastelería artesanal en Benidorm, Alicante ·{" "}
        <Link to="/privacidad" className="underline hover:text-gold">Política de privacidad</Link>
      </div>
    </footer>
  );
}
