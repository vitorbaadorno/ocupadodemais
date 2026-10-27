import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberto, setAberto] = useState(false);
  const id = useId();

  return (
    <div className="faq-item rounded-lg border border-border/70 bg-card px-5 py-4" data-open={aberto}>
      <Button
        id={`${id}-pergunta`}
        variant="ghost"
        className="h-auto w-full justify-between gap-4 whitespace-normal p-0 text-left text-base font-semibold hover:bg-transparent"
        aria-expanded={aberto}
        aria-controls={`${id}-resposta`}
        onClick={() => setAberto((valor) => !valor)}
      >
        <span>{pergunta}</span>
        <ChevronDown className="faq-chevron size-5 shrink-0 text-primary" aria-hidden="true" />
      </Button>
      <div
        id={`${id}-resposta`}
        role="region"
        aria-labelledby={`${id}-pergunta`}
        aria-hidden={!aberto}
        inert={!aberto}
        className="faq-answer"
      >
        <div className="min-h-0 overflow-hidden">
          <p className="pt-3 text-justify leading-relaxed text-foreground/80">{resposta}</p>
        </div>
      </div>
    </div>
  );
}