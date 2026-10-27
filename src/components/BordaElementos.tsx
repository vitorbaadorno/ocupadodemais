import { useEffect, useRef, useState } from "react";

/** Elementos ilustrados espalhados nas bordas da página, surgindo por dissolução. */
const NOMES = [
  ...Array.from({ length: 8 }, (_, i) => `escrita-0${i + 1}`),
  ...Array.from({ length: 9 }, (_, i) => `mente-0${i + 1}`),
  ...Array.from({ length: 6 }, (_, i) => `papeis-0${i + 1}`),
  ...Array.from({ length: 5 }, (_, i) => `pessoas-0${i + 1}`),
];
// Intercala as categorias para variar o que aparece ao longo da página.
const ORDEM = NOMES.map((_, i) => NOMES[(i * 11) % NOMES.length]);

const ITENS = ORDEM.map((nome, i) => {
  const esquerda = i % 2 === 0;
  return {
    src: `/assets/borda-${nome}.webp`,
    top: `${1.5 + i * 3.4}%`,
    lado: esquerda ? "left" : "right",
    offset: `${-1 + ((i * 7) % 4)}%`,
    width: 4.5 + ((i * 5) % 4),
    rotate: ((i * 13) % 20) - 10,
    duration: 22 + ((i * 7) % 13),
    delay: -((i * 11) % 29),
  } as const;
});

export function BordaElementos() {
  const ref = useRef<HTMLDivElement>(null);
  const [altura, setAltura] = useState<number>();

  useEffect(() => {
    let cancelado = false;
    // Capture once: FAQ, quiz and remote embeds must not redistribute decorations.
    void document.fonts.ready.then(() => {
      if (cancelado) return;
      const pagina = ref.current?.parentElement;
      if (pagina) setAltura(pagina.scrollHeight);
    });
    return () => { cancelado = true; };
  }, []);

  useEffect(() => {
    const imgs = ref.current?.querySelectorAll("img");
    if (!imgs) return;
    if (typeof IntersectionObserver === "undefined") {
      imgs.forEach((el) => el.classList.add("dissolve-on"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("dissolve-on");
          }
          e.target.parentElement?.classList.toggle("border-illustration-active", e.isIntersecting);
        }),
      { threshold: 0.2 },
    );
    imgs.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden" style={{ height: altura ?? "100%" }}>
      {ITENS.map((it) => (
        <div
          key={it.src}
          className="border-illustration absolute max-w-[9rem]"
          style={{
            top: it.top,
            [it.lado]: it.offset,
            width: `${it.width}rem`,
            animationDuration: `${it.duration}s`,
            animationDelay: `${it.delay}s`,
          }}
        >
          <img
            src={it.src}
            alt=""
            loading="lazy"
            decoding="async"
            className="dissolve block h-auto w-full"
            style={{ transform: `rotate(${it.rotate}deg)` }}
          />
        </div>
      ))}
    </div>
  );
}
