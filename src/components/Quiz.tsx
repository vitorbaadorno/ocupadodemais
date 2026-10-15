import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

// Cada opção soma pontos para um capítulo (índice 0 a 6).
const PERGUNTAS: { pergunta: string; opcoes: { texto: string; cap: number }[] }[] = [
  {
    pergunta: "Num domingo livre, o que você faria?",
    opcoes: [
      { texto: "Visitaria meus pais", cap: 0 },
      { texto: "Chamaria um amigo antigo para conversar", cap: 1 },
      { texto: "Sentaria numa praça só observando", cap: 6 },
      { texto: "Folhearia fotos antigas", cap: 5 },
    ],
  },
  {
    pergunta: "Qual frase mais combina com você agora?",
    opcoes: [
      { texto: "Ando ocupado demais para quem importa", cap: 2 },
      { texto: "Já disse “eu te amo” sem sentir", cap: 3 },
      { texto: "Preciso perdoar alguém, ou a mim mesmo", cap: 4 },
      { texto: "Sinto saudade de quem eu fui", cap: 0 },
    ],
  },
  {
    pergunta: "Qual objeto te leva de volta no tempo?",
    opcoes: [
      { texto: "Um brinquedo de infância", cap: 0 },
      { texto: "Um álbum de fotografias", cap: 5 },
      { texto: "Uma conversa antiga no celular", cap: 3 },
      { texto: "Um banco de praça", cap: 2 },
    ],
  },
  {
    pergunta: "Em uma amizade, o que mais pesa para você?",
    opcoes: [
      { texto: "Estar presente, mesmo de longe", cap: 1 },
      { texto: "Saber recomeçar depois de uma briga", cap: 4 },
      { texto: "Ter tempo de verdade um para o outro", cap: 2 },
      { texto: "Envelhecer junto", cap: 5 },
    ],
  },
  {
    pergunta: "Como você costuma lidar com o que sente?",
    opcoes: [
      { texto: "Guardo e escrevo depois", cap: 6 },
      { texto: "Falo, às vezes até demais", cap: 3 },
      { texto: "Deixo para depois", cap: 2 },
      { texto: "Procuro quem me magoou para conversar", cap: 4 },
    ],
  },
  {
    pergunta: "O que você gostaria de levar deste livro?",
    opcoes: [
      { texto: "Um olhar mais atento ao cotidiano", cap: 6 },
      { texto: "Vontade de ligar para um amigo", cap: 1 },
      { texto: "Saudade boa da infância", cap: 0 },
      { texto: "Coragem para desacelerar", cap: 2 },
    ],
  },
];

export function Quiz({
  capitulos,
  onResultado,
}: {
  capitulos: { titulo: string; frase: string }[];
  onResultado: (indice: number) => void;
}) {
  const [passo, setPasso] = useState(0);
  const [pontos, setPontos] = useState<number[]>(() => Array(7).fill(0));
  const [resultado, setResultado] = useState<number | null>(null);

  const responder = (cap: number) => {
    const novos = pontos.map((p, i) => (i === cap ? p + 1 : p));
    setPontos(novos);
    if (passo + 1 < PERGUNTAS.length) {
      setPasso(passo + 1);
    } else {
      const max = Math.max(...novos);
      const vencedor = novos.lastIndexOf(max);
      setResultado(vencedor);
      onResultado(vencedor);
    }
  };

  const reiniciar = () => {
    setPasso(0);
    setPontos(Array(7).fill(0));
    setResultado(null);
  };

  return (
    <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-border/70 bg-card p-6 shadow-soft md:p-8">
      {resultado === null ? (
        <>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Pergunta {passo + 1} de {PERGUNTAS.length}
          </p>
          <h3 className="mt-2 font-sans text-xl font-semibold">{PERGUNTAS[passo].pergunta}</h3>
          <div className="mt-5 grid gap-3">
            {PERGUNTAS[passo].opcoes.map((o) => (
              <Button
                key={o.texto}
                type="button"
                onClick={() => responder(o.cap)}
                variant="outline"
                className="h-auto justify-start whitespace-normal rounded-lg border-border/70 bg-background/60 px-5 py-3 text-left text-base shadow-none hover:border-primary/60 hover:bg-secondary/40"
              >
                {o.texto}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Capítulo {resultado + 1}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold">{capitulos[resultado].titulo}</h3>
          <p className="mt-3 text-foreground/75">{capitulos[resultado].frase}</p>
          <Button
            type="button"
            onClick={reiniciar}
            variant="outline"
            className="mt-6 h-auto rounded-full border-foreground/25 px-5 py-2 shadow-none hover:bg-secondary"
          >
            <RotateCcw className="size-4" aria-hidden="true" /> Refazer o quiz
          </Button>
        </div>
      )}
    </div>
  );
}
