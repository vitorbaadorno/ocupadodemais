const FICHA = [
  { rotulo: "Páginas", valor: "128 páginas" },
  { rotulo: "Edição", valor: "2ª edição" },
  { rotulo: "ISBN", valor: "978-65-02-10927-4" },
  { rotulo: "Editora / Distribuidora", valor: "UICLAP" },
];

export function FichaTecnica() {
  return (
    <div className="paper-grain rounded-2xl border border-bark/40 bg-clay/25 p-5 shadow-soft">
      <div className="rounded-xl border border-dashed border-bark/35 p-5">
        <p className="font-serif text-xs uppercase tracking-[0.28em] text-bark/70">Ficha técnica</p>
        <h4 className="mt-2 font-serif text-xl font-semibold text-bark">
          Ocupado Demais Para Você…
        </h4>
        <dl className="mt-4 space-y-2.5 text-sm">
          {FICHA.map((f) => (
            <div
              key={f.rotulo}
              className="flex items-baseline justify-between gap-4 border-b border-bark/20 pb-2 last:border-0 last:pb-0"
            >
              <dt className="font-serif uppercase tracking-[0.14em] text-bark/70">{f.rotulo}</dt>
              <dd className="text-right font-medium text-bark">{f.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
