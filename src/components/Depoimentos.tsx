import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Parallax } from "@/components/Atmosphere";
const arvore1 = { url: "/assets/arvore1.png" };
const arvore4 = { url: "/assets/arvore4.png" };
const balanco = { url: "/assets/balanco.png" };

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
      "Li em duas noites e fechei o livro pensando nas pessoas que faz tempo eu não procuro. Deu vontade de ligar para todas elas.",
    autor: "Depoimento de exemplo, espaço reservado para leitores",
  },
  {
    texto:
      "Cada capítulo parece uma conversa de fim de tarde. Simples, sem pressa, e ao mesmo tempo difícil de esquecer.",
    autor: "Depoimento de exemplo, espaço reservado para leitores",
  },
];

export function Depoimentos() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFading(true);
      window.setTimeout(() => {
        setIndex((n) => (n + 1) % DEPOIMENTOS.length);
        setFading(false);
      }, 280);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  const atual = DEPOIMENTOS[index];

  return (
    <section id="leitores" className="paper-grain relative overflow-hidden py-20 md:py-24">
      {/* Cenário */}
      <Parallax speed={0.16} className="left-[-3rem] top-[10%] w-36 opacity-30 md:w-56">
        <img src={arvore4.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>
      <Parallax speed={0.26} className="left-[8%] bottom-[6%] w-24 opacity-25 md:w-40">
        <img src={arvore1.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>

      <img
        src={balanco.url}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute right-0 top-0 hidden w-56 opacity-90 lg:block xl:w-72"
      />

      <div className="relative mx-auto max-w-4xl px-5">
        <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
          O que dizem os leitores
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-foreground/70">
          Espaço reservado para as impressões de quem já leu o livro.
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
      </div>
    </section>
  );
}
