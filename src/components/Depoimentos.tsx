import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Depoimento = { texto: string; autor: string; fonte?: string };

const DEPOIMENTOS: Depoimento[] = [
  {
    texto: "Apaixonada pelo seu livro parabéns continua assim.",
    autor: "Ferr Batista",
    fonte: "Avaliação verificada na UICLAP",
  },
  {
    texto:
      "No geral, é uma leitura gostosa e descomplicada, mas que ainda consegue deixar algumas reflexões depois que terminamos.",
    autor: "Pietra Yassmin",
    fonte: "Resenha no Instagram @enjoeidesselivro",
  },
  {
    texto:
      "As histórias são leves, mas carregam reflexões que ficam na mente após a leitura.",
    autor: "ge",
    fonte: "Avaliação verificada na Amazon",
  },
];

export function Depoimentos() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [tick, setTick] = useState(0);
  const fadeTimer = useRef<number | undefined>(undefined);

  const trocar = useCallback((next: (n: number) => number) => {
    setFading(true);
    window.clearTimeout(fadeTimer.current);
    fadeTimer.current = window.setTimeout(() => {
      setIndex((n) => (next(n) + DEPOIMENTOS.length) % DEPOIMENTOS.length);
      setFading(false);
    }, 280);
  }, []);

  const manual = (next: (n: number) => number) => {
    trocar(next);
    setTick((t) => t + 1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => trocar((n) => n + 1), 2000);
    return () => window.clearInterval(timer);
  }, [trocar, tick]);

  useEffect(() => () => window.clearTimeout(fadeTimer.current), []);

  const atual = DEPOIMENTOS[index % DEPOIMENTOS.length] ?? DEPOIMENTOS[0];

  if (!atual) {
    return null;
  }

  return (
    <section id="leitores" className="paper-grain relative overflow-hidden py-20 md:py-24">

      <div className="relative mx-auto max-w-4xl px-5">
        <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
          O que dizem os leitores
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-foreground/70">
          Dê uma olhada no que dizem os leitores.
        </p>

        <div className="mt-10 flex min-h-[16rem] items-center justify-center">
          <figure
            className={`mx-auto max-w-2xl text-center transition-opacity duration-300 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex justify-center gap-1 text-primary" aria-label="Cinco estrelas">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-primary" aria-hidden="true" />
              ))}
            </div>
            <blockquote
              aria-live="polite"
              className="mt-4 font-serif text-xl not-italic leading-relaxed sm:text-2xl"
            >
              “{atual.texto}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              <span className="block">{atual.autor}</span>
              {atual.fonte ? (
                <span className="mt-2 inline-flex items-center rounded-full border border-accent/70 px-3 py-1 text-xs font-medium text-accent">
                  {atual.fonte}
                </span>
              ) : null}
            </figcaption>
          </figure>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => manual((n) => n - 1)}
            aria-label="Avaliação anterior"
            title="Avaliação anterior"
            className="tap-press size-8 rounded-full border-primary/40 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => manual((n) => n + 1)}
            aria-label="Próxima avaliação"
            title="Próxima avaliação"
            className="tap-press size-8 rounded-full border-primary/40 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
