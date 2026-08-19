import { useState } from "react";
import { RotateCcw, ShoppingBag, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Chave = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const PERGUNTAS: { pergunta: string; opcoes: { texto: string; capitulo: Chave }[] }[] = [
  {
    pergunta: "O que você sente falta ultimamente?",
    opcoes: [
      { texto: "De tempo livre, sem pressa", capitulo: 3 },
      { texto: "De amigos de outras épocas", capitulo: 2 },
      { texto: "De alguém para amar", capitulo: 4 },
      { texto: "De paz com o passado", capitulo: 5 },
    ],
  },
  {
    pergunta: "Como estão os seus dias agora?",
    opcoes: [
      { texto: "Corridos e automáticos", capitulo: 3 },
      { texto: "Tranquilos, mas solitários", capitulo: 7 },
      { texto: "Em transição", capitulo: 1 },
      { texto: "Cheios de gente e vazios por dentro", capitulo: 4 },
    ],
  },
  {
    pergunta: "O que mais te toca numa história?",
    opcoes: [
      { texto: "Reencontros", capitulo: 2 },
      { texto: "Perdão", capitulo: 5 },
      { texto: "Observar desconhecidos", capitulo: 7 },
      { texto: "Memórias de família", capitulo: 6 },
    ],
  },
  {
    pergunta: "Se você tivesse uma tarde inteira livre, faria o quê?",
    opcoes: [
      { texto: "Abriria uma caixa antiga em casa", capitulo: 1 },
      { texto: "Ligaria para alguém de quem sinto falta", capitulo: 2 },
      { texto: "Sentaria num banco de praça olhando as pessoas", capitulo: 7 },
      { texto: "Folhearia álbuns de fotografia", capitulo: 6 },
    ],
  },
];

export function Quiz({
  capitulos,
}: {
  capitulos: { titulo: string; frase: string }[];
}) {
  const [passo, setPasso] = useState(0);
  const [pontos, setPontos] = useState<Record<number, number>>({});

  const responder = (capitulo: Chave) => {
    setPontos((p) => ({ ...p, [capitulo]: (p[capitulo] ?? 0) + 1 }));
    setPasso((s) => s + 1);
  };

  const reiniciar = () => {
    setPontos({});
    setPasso(0);
  };

  const terminou = passo >= PERGUNTAS.length;
  const vencedor = terminou
    ? (Object.entries(pontos).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "3")
    : null;
  const capitulo = vencedor ? capitulos[Number(vencedor) - 1] : null;

  return (
    <section id="quiz" className="mx-auto max-w-3xl px-5 py-20 md:py-24">
      <Reveal>
        <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
          Qual capítulo combina com você agora?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-foreground/70">
          Quatro perguntas rápidas para descobrir por onde começar a leitura.
        </p>
      </Reveal>

      <div className="paper-grain mt-10 rounded-3xl border border-border/70 bg-card p-7 shadow-soft md:p-10">
        {!terminou ? (
          <div key={passo} className="reveal reveal-visible">
            <p className="font-serif text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Pergunta {passo + 1} de {PERGUNTAS.length}
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary/50">
              <div
                className="h-full rounded-full bg-gradient-ember transition-[width] duration-500"
                style={{ width: `${(passo / PERGUNTAS.length) * 100}%` }}
              />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-semibold">
              {PERGUNTAS[passo].pergunta}
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {PERGUNTAS[passo].opcoes.map((o) => (
                <button
                  key={o.texto}
                  type="button"
                  onClick={() => responder(o.capitulo)}
                  className="tap-press rounded-2xl border border-border/70 bg-background/70 px-5 py-4 text-left text-base hover:border-primary hover:bg-secondary/40"
                >
                  {o.texto}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="reveal reveal-visible text-center">
            <h3 className="mt-5 font-serif text-3xl font-semibold">{capitulo?.titulo}</h3>
            <p className="mx-auto mt-3 max-w-md text-foreground/75">{capitulo?.frase}</p>
            <p className="mx-auto mt-5 max-w-lg font-serif text-lg italic text-foreground/85">
              Baseado no que você respondeu, o capítulo “{capitulo?.titulo}” é o seu ponto de
              partida.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#comprar"
                className="tap-press inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lift hover:bg-accent hover:text-accent-foreground"
              >
                <ShoppingBag className="size-4" aria-hidden="true" /> Comece a ler este capítulo
              </a>
              <button
                type="button"
                onClick={reiniciar}
                className="tap-press inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3.5 font-medium hover:bg-secondary"
              >
                <RotateCcw className="size-4" aria-hidden="true" /> Refazer o quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
