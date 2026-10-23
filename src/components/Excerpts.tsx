import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { excerpts } from "../data/book";
import { Newsletter } from "./Newsletter";

export function Excerpts() {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [cycle, setCycle] = useState(0);
  const direction = useRef(1);
  useEffect(() => {
    const update = () => setHidden(document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (hidden) return;
    const timer = window.setInterval(() => {
      direction.current = 1;
      setExiting(true);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [hidden, cycle]);
  useEffect(() => {
    if (!exiting) return;
    const timer = window.setTimeout(
      () => {
        setIndex((current) => (current + direction.current + excerpts.length) % excerpts.length);
        setExiting(false);
      },
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350,
    );
    return () => window.clearTimeout(timer);
  }, [exiting]);
  const go = (nextDirection: number) => {
    if (exiting) return;
    direction.current = nextDirection;
    setCycle((current) => current + 1);
    setExiting(true);
  };
  return (
    <section id="citacoes" className="excerpts section" aria-labelledby="excerpts-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Entre uma página e outra</span>
          <h2 id="excerpts-title">Leia um pouco. Fique um pouco.</h2>
          <p>Antes de conhecer o livro inteiro, encontre suas palavras.</p>
        </div>
        <div className="excerpt-reader" role="region" aria-label="Trechos do livro">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <div
            className={`excerpt-content${exiting ? " excerpt-exiting" : ""}`}
            aria-live="off"
            aria-atomic="true"
          >
            <blockquote>“{excerpts[index]}”</blockquote>
            <span className="sr-only">
              Trecho {index + 1} de {excerpts.length}
            </span>
          </div>
          <div className="excerpt-controls">
            <button className="icon-button" onClick={() => go(-1)} aria-label="Trecho anterior">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button className="icon-button" onClick={() => go(1)} aria-label="Próximo trecho">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
        <Newsletter />
      </div>
    </section>
  );
}
