import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export type Capitulo = { titulo: string; frase: string };

export function LinhaDoTempo({
  capitulos,
  brilho,
}: {
  capitulos: Capitulo[];
  brilho?: { indice: number; chave: number } | null;
}) {
  const trilho = useRef<HTMLDivElement>(null);
  const [arrastando, setArrastando] = useState(false);
  const inicio = useRef({ x: 0, scroll: 0 });

  useEffect(() => {
    if (!brilho) return;
    const el = trilho.current;
    const card = el?.querySelector<HTMLElement>(`[data-cap="${brilho.indice}"]`);
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 8, behavior: "smooth" });
  }, [brilho]);

  const onDown = (e: React.PointerEvent) => {
    const el = trilho.current;
    if (!el) return;
    setArrastando(true);
    inicio.current = { x: e.clientX, scroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onMove = (e: React.PointerEvent) => {
    const el = trilho.current;
    if (!el || !arrastando) return;
    el.scrollLeft = inicio.current.scroll - (e.clientX - inicio.current.x);
  };

  const onUp = () => setArrastando(false);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-0 right-0 top-[4.25rem] h-px bg-gradient-ember opacity-50"
        aria-hidden="true"
      />
      <div
        ref={trilho}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className={`no-scrollbar relative flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 py-4 ${
          arrastando ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {capitulos.map((cap, i) => {
          const destaque = i === 2;
          const brilhando = brilho?.indice === i;
          return (
            <Reveal
              key={cap.titulo}
              variant="page"
              delay={i * 90}
              className="w-[17rem] shrink-0 snap-start sm:w-[19rem]"
            >
              <article
                data-cap={i}
                key={brilhando ? `b${brilho?.chave}` : "n"}
                className={`chapter-card flex h-full flex-col rounded-lg border p-6 ${
                  destaque
                    ? "border-primary/60 bg-secondary/35 shadow-soft"
                    : "border-border/70 bg-card shadow-soft"
                } ${brilhando ? "brilho-capitulo" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-11 place-items-center rounded-full font-serif text-lg ${
                      destaque
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/60 text-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {destaque && (
                    <Star className="size-5 fill-primary text-primary" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 text-center font-sans text-xl font-semibold">{cap.titulo}</h3>
                {destaque && (
                  <span className="mt-2 inline-flex w-fit items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    O capítulo que dá nome ao livro
                  </span>
                )}
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{cap.frase}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Arraste para o lado para percorrer os capítulos.
      </p>
    </div>
  );
}
