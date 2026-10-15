import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Particles } from "@/components/Atmosphere";
import { Button } from "@/components/ui/button";

const CITACOES = [
  "Crescer é isso. Continuar sentado à mesa, mas carregando dentro de si o menino que mal conseguia ficar parado.",
  "Amizade, no fundo, não é sobre encaixe perfeito. É sobre afeto apesar das arestas. É sobre continuar quando é mais fácil desistir.",
  "O mundo em que você vive é apenas seu, e ninguém mais tem acesso a esse turbilhão de pensamentos que você chama de vida.",
  "As pessoas dizem coisas enormes umas para as outras o tempo inteiro. Mesmo quando não sentem absolutamente nada.",
  "No fundo, ele ainda era meu amigo. Meu melhor amigo. Nada do que aconteceu foi suficiente para apagar isso completamente.",
  "Amor, às vezes, é isso: caminhar junto até que o outro saiba pedalar sozinho. Mesmo que isso custe vê-lo partir.",
  "A ciência diz que não existe máquina do tempo. Mas qualquer álbum de fotografias discorda.",
];

export function Citacoes() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [tick, setTick] = useState(0);
  const fadeTimer = useRef<number | undefined>(undefined);

  const trocar = useCallback((next: (n: number) => number) => {
    setFading(true);
    window.clearTimeout(fadeTimer.current);
    fadeTimer.current = window.setTimeout(() => {
      setIndex((n) => (next(n) + CITACOES.length) % CITACOES.length);
      setFading(false);
    }, 280);
  }, []);

  const manual = (next: (n: number) => number) => {
    trocar(next);
    setTick((t) => t + 1); // reinicia o intervalo
  };

  useEffect(() => {
    const timer = window.setInterval(() => trocar((n) => n + 1), 3000);
    return () => window.clearInterval(timer);
  }, [trocar, tick]);

  useEffect(() => () => window.clearTimeout(fadeTimer.current), []);

  return (
    <section id="citacoes" className="relative overflow-hidden py-16 md:py-24">
      <Particles />

      <div className="relative mx-auto max-w-4xl px-5">
        <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
          Trecho da Obra
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-foreground/75">
          O que passa pela cabeça de quem senta num banco de praça e deixa o tempo correr.
        </p>

        <div className="relative mx-auto mt-10 flex min-h-[14rem] max-w-2xl flex-col items-center justify-center text-center">
          <div className={`transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
            <Quote className="mx-auto size-8 text-accent" aria-hidden="true" />
            <blockquote
              aria-live="polite"
              className="mt-3 font-serif text-xl italic leading-relaxed text-bark sm:text-2xl md:text-3xl"
            >
              “{CITACOES[index]}”
            </blockquote>
          </div>
        </div>

        <div className="relative mt-6 flex flex-col items-center gap-3">
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => manual((n) => n - 1)}
              aria-label="Trecho anterior"
              className="tap-press size-8 rounded-full border-primary/40 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => manual((n) => n + 1)}
              aria-label="Próximo trecho"
              className="tap-press size-8 rounded-full border-primary/40 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            {CITACOES.map((c, i) => (
              <button
                key={c}
                type="button"
                onClick={() => manual(() => i)}
                aria-label={`Ver trecho ${i + 1}`}
                aria-current={i === index}
                className={`size-2.5 rounded-full transition-transform duration-200 hover:scale-125 ${
                  i === index ? "scale-125 bg-primary" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Newsletter (espaço reservado) */}
        <div className="mx-auto mt-14 max-w-xl border-y border-border/70 px-5 py-8 text-center">
          <h3 className="font-serif text-2xl font-semibold">Newsletter</h3>
          <p className="mt-2 text-foreground/75">
            Em breve, um espaço para receber novos textos e novidades do livro.
          </p>
        </div>
      </div>
    </section>
  );
}
