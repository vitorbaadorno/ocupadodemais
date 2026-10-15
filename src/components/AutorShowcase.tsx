import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FOTO = "/assets/vitor-adorno.png";
// Espaço reservado: troque por "/assets/sua-segunda-foto.png" quando tiver a imagem.
const FOTO_2: string | null = null;

export function AutorShowcase() {
  const [frente, setFrente] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setFrente((f) => 1 - f), 5000);
    return () => window.clearInterval(t);
  }, [tick]);

  const trocar = () => {
    setFrente((f) => 1 - f);
    setTick((t) => t + 1);
  };

  const cartao = (i: number) => {
    const naFrente = frente === i;
    const pos = naFrente
      ? "z-20 translate-x-0 rotate-0"
      : "z-10 translate-x-6 -translate-y-4 rotate-6 opacity-80 md:translate-x-8";
    const base = `absolute inset-0 rounded-lg border border-accent shadow-soft transition-all duration-700 ease-out ${pos}`;
    if (i === 0) {
      return <img key={i} src={FOTO} alt="Foto do autor Vitor Adôrno" className={`${base} size-full object-cover`} />;
    }
    return FOTO_2 ? (
      <img key={i} src={FOTO_2} alt="Segunda foto do autor Vitor Adôrno" className={`${base} size-full object-cover`} />
    ) : (
      <div key={i} className={`${base} grid place-items-center bg-muted text-muted-foreground`}>
        <div className="flex flex-col items-center gap-2 text-sm">
          <ImageIcon className="size-8" aria-hidden="true" />
          Segunda foto em breve
        </div>
      </div>
    );
  };

  return (
    <Button
      type="button"
      onClick={trocar}
      aria-label="Trocar foto do autor"
      variant="ghost"
      className="relative aspect-[9/13] h-auto w-full max-w-[21.6rem] shrink-0 cursor-pointer rounded-lg p-0 hover:bg-transparent"
    >
      {cartao(0)}
      {cartao(1)}
    </Button>
  );
}
