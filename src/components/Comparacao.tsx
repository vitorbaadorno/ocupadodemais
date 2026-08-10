import { useState } from "react";
import { ChevronDown, Scale } from "lucide-react";

const LINHAS = [
  { rotulo: "Preço", fisico: "R$ 38,12 mais frete", digital: "R$ 9,90" },
  { rotulo: "Formato", fisico: "Impresso, 128 páginas", digital: "Arquivo digital" },
  { rotulo: "Entrega", fisico: "Enviado para todo o Brasil", digital: "Disponível imediatamente" },
  { rotulo: "Edição", fisico: "2ª edição", digital: "2ª edição" },
  { rotulo: "ISBN", fisico: "978-65-02-10927-4", digital: "978-65-02-10927-4" },
  { rotulo: "Editora", fisico: "UICLAP", digital: "UICLAP" },
  {
    rotulo: "Onde ler",
    fisico: "Em casa, no papel, para guardar na estante",
    digital: "Celular, tablet ou Kindle, onde você estiver",
  },
];

export function Comparacao() {
  const [aberta, setAberta] = useState(false);

  return (
    <div className="mt-10 text-center">
      <button
        type="button"
        onClick={() => setAberta((v) => !v)}
        aria-expanded={aberta}
        aria-controls="tabela-comparacao"
        className="tap-press inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 bg-background/70 px-6 py-3 text-sm font-medium hover:bg-secondary"
      >
        <Scale className="size-4 text-primary" aria-hidden="true" />
        Comparação
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${aberta ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        id="tabela-comparacao"
        className={`grid text-left transition-all duration-500 ease-out ${
          aberta ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="paper-grain overflow-hidden rounded-3xl border border-bark/30 bg-card shadow-soft">
            {/* Tabela em telas médias e maiores */}
            <table className="hidden w-full border-collapse text-sm sm:table">
              <caption className="sr-only">
                Comparação entre a versão física e a versão digital do livro
              </caption>
              <thead>
                <tr className="bg-secondary/50">
                  <th scope="col" className="px-5 py-4 text-left font-serif text-xs uppercase tracking-[0.18em] text-bark/70">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-5 py-4 text-left font-serif text-base font-semibold">
                    Físico
                  </th>
                  <th scope="col" className="px-5 py-4 text-left font-serif text-base font-semibold">
                    Digital (Kindle)
                  </th>
                </tr>
              </thead>
              <tbody>
                {LINHAS.map((l) => (
                  <tr key={l.rotulo} className="border-t border-border/70">
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-serif text-xs uppercase tracking-[0.14em] text-bark/70"
                    >
                      {l.rotulo}
                    </th>
                    <td className="px-5 py-4 text-foreground/85">{l.fisico}</td>
                    <td className="px-5 py-4 text-foreground/85">{l.digital}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cards empilhados no mobile */}
            <div className="space-y-4 p-5 sm:hidden">
              {[
                { titulo: "Físico", chave: "fisico" as const },
                { titulo: "Digital (Kindle)", chave: "digital" as const },
              ].map((col) => (
                <div key={col.titulo} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <h4 className="font-serif text-base font-semibold">{col.titulo}</h4>
                  <dl className="mt-3 space-y-2 text-sm">
                    {LINHAS.map((l) => (
                      <div key={l.rotulo} className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
                        <dt className="font-serif text-xs uppercase tracking-[0.14em] text-bark/70">
                          {l.rotulo}
                        </dt>
                        <dd className="text-right text-foreground/85">{l[col.chave]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
