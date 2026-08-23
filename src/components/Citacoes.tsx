import { useCallback, useEffect, useState } from "react";
import { Quote } from "lucide-react";
import cena from "@/assets/imagem-aumentada1.webp.asset.json";
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

  return (
    <section id="citacoes" className="section-fade relative overflow-hidden py-16 md:py-24">
      {/* Cenário de fundo */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={cena.url}
          alt=""
          loading="lazy"
          className="size-full object-cover object-center"
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

        {/* Citação */}
        <div className="relative mt-8 aspect-[16/9] w-full">
          <div
            className={`absolute left-[3%] top-1/2 w-[min(34rem,90%)] -translate-y-1/2 text-left transition-opacity duration-300 md:left-[5%] ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Quote className="size-8 text-accent" aria-hidden="true" />
            <blockquote
              aria-live="polite"
              className="mt-3 font-serif text-xl italic leading-relaxed text-bark sm:text-2xl md:text-3xl"
            >
              “{CITACOES[index]}”
            </blockquote>
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
        </div>
      </div>
    </section>
  );
}
