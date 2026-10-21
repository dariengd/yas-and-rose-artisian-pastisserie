import { useState } from "react";
import { Heart, Instagram, MessageCircle, X } from "lucide-react";
import { CONTACT, POSTS, waLink, type Post } from "@/lib/site";

export function InstagramGallery({ limit }: { limit?: number }) {
  const [active, setActive] = useState<Post | null>(null);
  const posts = limit ? POSTS.slice(0, limit) : POSTS;
  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {posts.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="group relative aspect-square overflow-hidden bg-muted text-left"
            aria-label={`Ver ${p.title}`}
          >
            <img src={p.image} alt={`${p.title} — pastelería artesanal Yas&Rose Benidorm`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end bg-ink/0 p-4 text-ink-foreground opacity-0 transition-all duration-300 group-hover:bg-ink/60 group-hover:opacity-100">
              <Instagram className="mb-auto self-end text-gold" size={20} />
              <div className="mb-2 flex gap-4 text-sm">
                <span className="inline-flex items-center gap-1"><Heart size={14} />{120 + i * 37}</span>
                <span className="inline-flex items-center gap-1"><MessageCircle size={14} />{8 + i * 3}</span>
              </div>
              <p className="line-clamp-2 text-sm">{p.caption}</p>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4" onClick={() => setActive(null)}>
          <article className="relative grid max-h-[90vh] w-full max-w-4xl overflow-auto bg-card md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} aria-label="Cerrar" className="absolute right-3 top-3 z-10 rounded-full bg-card/90 p-1"><X /></button>
            <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-gold-deep">{CONTACT.instagramHandle}</p>
              <h3 className="font-serif text-3xl">{active.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{active.caption}</p>
              <div className="mt-auto flex flex-col gap-2">
                <a href={waLink(`¡Hola Yas&Rose! Me interesa "${active.title}". ¿Podéis darme más información?`)} target="_blank" rel="noreferrer" className="bg-gold-gradient px-5 py-3 text-center text-sm font-medium uppercase tracking-widest text-primary-foreground">
                  Preguntar por este dulce
                </a>
                <a href={active.permalink} target="_blank" rel="noreferrer" className="border border-border px-5 py-3 text-center text-sm uppercase tracking-widest hover:border-gold">
                  Ver en Instagram
                </a>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
