import { useCallback, useEffect, useState } from "react";
import { ChevronRight, Quote } from "lucide-react";
import cena from "@/assets/cena-parque.png.asset.json";
import arvores from "@/assets/arvores.png.asset.json";
import galho from "@/assets/galho.png.asset.json";
import { Parallax, Particles } from "@/components/Atmosphere";

const CITACOES = [
  "Crescer é isso. Continuar sentado à mesa, mas carregando dentro de si o menino que mal conseguia ficar parado.",
  "Amizade, no fundo, não é sobre encaixe perfeito. É sobre afeto apesar das arestas. É sobre continuar quando é mais fácil desistir.",
  "O mundo em que você vive é apenas seu, e ninguém mais tem acesso a esse turbilhão de pensamentos que você chama de vida.",
  "As pessoas dizem coisas enormes umas para as outras o tempo inteiro. Mesmo quando não sentem absolutamente nada.",
  "No fundo, ele ainda era meu amigo. Meu melhor amigo. Nada do que aconteceu foi suficiente para apagar isso completamente.",
  "Amor, às vezes, é isso: caminhar junto até que o outro saiba pedalar sozinho. Mesmo que isso custe vê-lo partir.",
  "A ciência diz que não existe máquina do tempo. Mas qualquer álbum de fotografias discorda.",
];

/** Posições aproximadas das cabeças dos dois personagens na ilustração. */
const PERSONAGENS = [
  { nome: "do senhor", left: "69.2%", top: "71%" },
  { nome: "do jovem", left: "73.8%", top: "70%" },
];

export function Citacoes() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const trocar = useCallback((next: number) => {
    setFading(true);
    window.setTimeout(() => {
      setIndex((n) => (Number.isFinite(next) ? (next + CITACOES.length) % CITACOES.length : n));
      setFading(false);
    }, 280);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFading(true);
      window.setTimeout(() => {
        setIndex((n) => (n + 1) % CITACOES.length);
        setFading(false);
      }, 280);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const personagem = PERSONAGENS[index % PERSONAGENS.length];

  return (
    <section id="citacoes" className="relative overflow-hidden py-16 md:py-24">
      {/* Cenário de fundo */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={cena.url}
          alt=""
          loading="lazy"
          className="size-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
      </div>

      {/* Camadas soltas com parallax */}
      <Parallax speed={0.18} className="left-[-2rem] top-[6%] w-32 opacity-40 md:w-52">
        <img src={arvores.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>
      <Parallax speed={0.3} className="right-[2%] top-[2%] w-24 opacity-45 md:w-40">
        <img src={galho.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>
      <Particles />

      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-3xl font-semibold drop-shadow-sm sm:text-4xl">
          Trechos do livro
        </h2>
        <p className="mt-3 max-w-md text-foreground/75">
          O que passa pela cabeça de quem senta num banco de praça e deixa o tempo correr.
        </p>

        {/* Cena com balão de pensamento */}
        <div className="relative mt-8 aspect-[16/9] w-full">
          {/* Balão */}
          <button
            type="button"
            onClick={() => trocar(index + 1)}
            aria-label="Ver próxima citação do livro"
            className={`tap-press absolute right-[4%] top-2 w-[min(22rem,78%)] rounded-[2rem] border border-accent/70 bg-[color-mix(in_oklab,var(--sand)_92%,white)] p-5 text-left shadow-soft transition-opacity duration-300 md:right-[6%] md:top-6 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Quote className="size-6 text-accent" aria-hidden="true" />
            <blockquote
              aria-live="polite"
              className="mt-2 font-serif text-base italic leading-relaxed text-bark sm:text-lg"
            >
              “{CITACOES[index]}”
            </blockquote>
            <figcaption className="mt-3 text-xs text-bark/70">
              Pensamento {personagem.nome}, em Ocupado Demais Para Você…
            </figcaption>
          </button>

          {/* Caudinha do balão, apontando para a cabeça do personagem */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute transition-all duration-500 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
            style={{ left: personagem.left, top: personagem.top }}
          >
            <span className="absolute -left-6 -top-16 block size-6 rounded-full border border-accent/70 bg-[color-mix(in_oklab,var(--sand)_92%,white)]" />
            <span className="absolute -left-2 -top-9 block size-4 rounded-full border border-accent/70 bg-[color-mix(in_oklab,var(--sand)_92%,white)]" />
            <span className="absolute -left-0 -top-4 block size-2.5 rounded-full border border-accent/70 bg-[color-mix(in_oklab,var(--sand)_92%,white)]" />
          </div>
        </div>

        <div className="relative mt-4 flex flex-wrap items-center gap-4">
          <div className="flex gap-2">
            {CITACOES.map((c, i) => (
              <button
                key={c}
                type="button"
                onClick={() => trocar(i)}
                aria-label={`Ver citação ${i + 1}`}
                aria-current={i === index}
                className={`size-2.5 rounded-full transition-transform duration-200 hover:scale-125 ${
                  i === index ? "scale-125 bg-primary" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => trocar(index + 1)}
            className="tap-press inline-flex items-center gap-1.5 rounded-full border border-foreground/25 bg-background/80 px-4 py-2 text-sm font-medium hover:bg-secondary"
          >
            Próxima frase <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
