import { useCallback, useEffect, useState } from "react";
import { ChevronRight, Quote } from "lucide-react";
import balanco from "@/assets/balanco.png.asset.json";
import { Particles } from "@/components/Atmosphere";

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

  const goTo = useCallback((next: number) => {
    setFading(true);
    window.setTimeout(() => {
      setIndex((n) => (typeof next === "number" ? (next + CITACOES.length) % CITACOES.length : n));
      setFading(false);
    }, 260);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFading(true);
      window.setTimeout(() => {
        setIndex((n) => (n + 1) % CITACOES.length);
        setFading(false);
      }, 260);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="citacoes" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-warm opacity-40" aria-hidden="true" />
      <Particles />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Ver próxima citação do livro"
          className="tap-press group relative mx-auto w-full max-w-sm rounded-3xl"
        >
          <img
            src={balanco.url}
            loading="lazy"
            alt="Ilustração de um senhor e um jovem sentados juntos em um balanço"
            className="w-full object-contain"
          />
        </button>

        <div>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Trechos do livro</h2>
          <figure
            className={`mt-6 rounded-3xl border border-accent/50 bg-background/80 p-7 shadow-soft transition-opacity duration-300 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Quote className="size-7 text-accent" aria-hidden="true" />
            <blockquote
              aria-live="polite"
              className="mt-3 font-serif text-xl italic leading-relaxed sm:text-2xl"
            >
              “{CITACOES[index]}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              Ocupado Demais Para Você…, Vitor Adôrno
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex gap-2">
              {CITACOES.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ver citação ${i + 1}`}
                  aria-current={i === index}
                  className={`size-2.5 rounded-full transition-transform duration-200 hover:scale-125 ${
                    i === index ? "scale-125 bg-primary" : "bg-foreground/25"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="tap-press inline-flex items-center gap-1.5 rounded-full border border-foreground/25 px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              Próxima frase <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
