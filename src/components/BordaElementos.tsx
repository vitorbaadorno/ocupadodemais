import { useEffect, useRef } from "react";

/** Elementos ilustrados espalhados nas bordas da página, surgindo por dissolução. */
const ITENS = Array.from({ length: 32 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const esquerda = i % 2 === 0;
  return {
    src: `/assets/elemento-${n}.webp`,
    top: `${1.5 + i * 3}%`,
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
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
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
