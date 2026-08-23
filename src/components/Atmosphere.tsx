import { useEffect, useRef, useState, type ReactNode } from "react";
import arvore1 from "@/assets/arvore1.png.asset.json";
import arvore4 from "@/assets/arvore4.png.asset.json";
import galho from "@/assets/galho.png.asset.json";
import ramo from "@/assets/ramo.png.asset.json";

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 6.4 + (i % 3) * 9) % 96}%`,
  size: 3 + ((i * 7) % 5),
  duration: 16 + ((i * 5) % 14),
  delay: -(i * 2.3),
  opacity: 0.25 + ((i % 4) * 0.12),
}));

/** Partículas douradas flutuando ao fundo de uma seção. */
export function Particles({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: "-6vh",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Camada com deslocamento em velocidade diferente do conteúdo. */
export function Parallax({
  speed = 0.2,
  className = "",
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(-center * speed);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {children}
    </div>
  );
}

/** Ilustrações de fundo espalhadas pela página, com parallax discreto. */
export function FloatingScenery() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Parallax speed={0.12} className="left-[-3rem] top-[8%] w-40 opacity-25 md:w-64">
        <img src={arvore4.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>
      <Parallax speed={0.22} className="right-[-2rem] top-[34%] w-28 opacity-20 md:w-44">
        <img src={galho.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>
      <Parallax speed={0.16} className="left-[4%] top-[62%] w-24 opacity-20 md:w-36">
        <img src={ramo.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>
      <Parallax speed={0.28} className="right-[6%] top-[84%] w-32 opacity-20 md:w-48">
        <img src={arvore1.url} alt="" loading="lazy" className="float-layer w-full" />
      </Parallax>
    </div>
  );
}
