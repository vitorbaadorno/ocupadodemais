import { useEffect, useRef } from "react";

const SRC = "https://ocupado-demais-para-voce.kit.com/1dd41e68dc/index.js";

/** Formulário da newsletter (Kit), carregado no navegador dentro desta caixa. */
export function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = ref.current;
    if (!box || box.querySelector("script")) return;
    const s = document.createElement("script");
    s.async = true;
    s.src = SRC;
    s.dataset.uid = "1dd41e68dc";
    box.appendChild(s);
    return () => {
      box.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className="newsletter-kit mx-auto mt-6 w-full max-w-3xl" />;
}
