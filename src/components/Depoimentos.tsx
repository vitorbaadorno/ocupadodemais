import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Depoimento = { texto: string; autor: string; fonte?: string; exemplo?: boolean };

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
    fonte: "Avaliação no Instagram @enjoeidesselivro",
  },


  {
    texto:
      "Li em duas noites e fechei o livro pensando nas pessoas que faz tempo eu não procuro. Deu vontade de ligar para todas elas.",
    autor: "Depoimento de exemplo, espaço reservado para leitores",
    exemplo: true,
  },
  {
    texto:
      "Cada capítulo parece uma conversa de fim de tarde. Simples, sem pressa, e ao mesmo tempo difícil de esquecer.",
    autor: "Depoimento de exemplo, espaço reservado para leitores",
    exemplo: true,
  },
];


export function Depoimentos() {
  const [i, setI] = useState(0);
  const total = DEPOIMENTOS.length;

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % total), 9000);
    return () => window.clearInterval(t);
  }, [total]);

  const atual = DEPOIMENTOS[i];

  return (
    <section id="leitores" className="mx-auto max-w-4xl px-5 py-20 md:py-24">
      <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
        O que dizem os leitores
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-foreground/70">
        Espaço reservado para as impressões de quem já leu o livro.
      </p>

      <div className="mt-10 rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
        <div className="flex gap-1 text-primary" aria-label="Cinco estrelas">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="size-4 fill-primary" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-4 font-serif text-lg italic leading-relaxed sm:text-xl">
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


        <div className="mt-7 flex items-center justify-between">
          <div className="flex gap-2">
            {DEPOIMENTOS.map((d, n) => (
              <button
                key={d.texto}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Ver depoimento ${n + 1}`}
                className={`size-2.5 rounded-full transition-transform duration-200 hover:scale-125 ${
                  n === i ? "scale-125 bg-primary" : "bg-foreground/25"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setI((n) => (n - 1 + total) % total)}
              aria-label="Depoimento anterior"
              className="tap-press rounded-full border border-foreground/25 p-2 hover:bg-secondary"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setI((n) => (n + 1) % total)}
              aria-label="Próximo depoimento"
              className="tap-press rounded-full border border-foreground/25 p-2 hover:bg-secondary"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
