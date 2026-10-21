import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/creaciones", label: "Creaciones" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-ink/95 text-ink-foreground backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src="/images/logo.jpg" alt="Logo Yas&Rose" className="h-11 w-11 shrink-0 rounded-full" />
          <span className="truncate font-display text-lg tracking-[0.2em] text-gold-gradient">YAS &amp; ROSE</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }} className="text-sm uppercase tracking-widest transition-colors hover:text-gold">
              {n.label}
            </Link>
          ))}
          <Link to="/contacto" className="bg-gold-gradient rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90">
            Contactar ahora
          </Link>
        </nav>
        <button className="md:hidden" aria-label="Menú" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold/20 px-4 py-3 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 uppercase tracking-widest">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
