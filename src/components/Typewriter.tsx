import { useEffect, useState } from "react";

/** Digita o texto letra por letra; o texto completo fica disponível para leitores de tela. */
export function Typewriter({ text, delay = 0, speed = 55 }: { text: string; delay?: number; speed?: number }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer: number;
    const start = window.setTimeout(function tick() {
      i += 1;
      setN(i);
      if (i < text.length) timer = window.setTimeout(tick, speed);
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(timer);
    };
  }, [text, delay, speed]);

  return (
    <span className="relative inline-block">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="invisible">{text}</span>
      <span aria-hidden="true" className="absolute inset-0 whitespace-nowrap text-left">
        {text.slice(0, n)}
        {n > 0 && n < text.length && <span className="typewriter-caret" />}
      </span>
    </span>
  );
}
