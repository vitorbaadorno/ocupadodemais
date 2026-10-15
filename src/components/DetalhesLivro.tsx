import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

const DETALHES = [
  ["Edição", "3ª edição (2026)"],
  ["ISBN", "978-65-02-10927-4"],
  ["Número de páginas", "128"],
  ["Número de capítulos", "7"],
  ["Formato disponível", "Físico (brochura) e digital (Kindle)"],
  ["Gênero", "Ficção literária / contos interligados"],
  ["Idioma", "Português"],
  ["Local de publicação", "Uruaçu, GO, Brasil"],
];

export function DetalhesLivro() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-12 shrink-0 rounded-full border-foreground/25 bg-transparent px-5 text-base shadow-none">
          Detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg bg-card shadow-soft">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl tracking-normal">Detalhes do livro</DialogTitle>
          <DialogDescription>Ocupado Demais Para Você…, de Vitor Adôrno</DialogDescription>
        </DialogHeader>
        <dl className="divide-y divide-border">
          {DETALHES.map(([nome, valor]) => (
            <div key={nome} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-sm text-muted-foreground">{nome}</dt>
              <dd className="min-w-0 break-words font-medium">{valor}</dd>
            </div>
          ))}
        </dl>
      </DialogContent>
    </Dialog>
  );
}