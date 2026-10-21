import { Link } from "@tanstack/react-router";
import { CalendarHeart, MessageCircle, Phone } from "lucide-react";
import { CONTACT, waLink } from "@/lib/site";

export function MobileBar() {
  const cls = "flex flex-1 flex-col items-center gap-1 py-2 text-[11px] uppercase tracking-widest";
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex rounded-full border border-gold/30 bg-ink/90 text-ink-foreground shadow-elegant backdrop-blur md:hidden">
      <a href={`tel:${CONTACT.phone}`} className={cls}><Phone size={18} className="text-gold" />Llamar</a>
      <a href={waLink()} target="_blank" rel="noreferrer" className={cls}><MessageCircle size={18} className="text-gold" />WhatsApp</a>
      <Link to="/contacto" className={cls}><CalendarHeart size={18} className="text-gold" />Encargos</Link>
    </div>
  );
}
