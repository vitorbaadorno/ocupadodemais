import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { excerpts } from "../data/book";
import { Newsletter } from "./Newsletter";

export function Excerpts() {
  const [index, setIndex] = useState(0);
  const go = (direction: number) =>
    setIndex((current) => (current + direction + excerpts.length) % excerpts.length);
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
          <div className="excerpt-content" aria-live="polite" aria-atomic="true">
            <blockquote>“{excerpts[index]}”</blockquote>
            <p className="excerpt-credit">
              Ocupado Demais Para Você… <span aria-hidden="true">/</span> Vitor Adôrno
            </p>
            <span className="sr-only">
              Trecho {index + 1} de {excerpts.length}
            </span>
          </div>
          <div className="excerpt-controls">
            <button className="icon-button" onClick={() => go(-1)} aria-label="Trecho anterior">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <div className="excerpt-dots" aria-label="Escolher trecho">
              {excerpts.map((_, i) => (
                <button
                  key={i}
                  className="dot-button"
                  aria-label={`Ler trecho ${i + 1}`}
                  aria-current={index === i ? "true" : undefined}
                  onClick={() => setIndex(i)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button className="icon-button" onClick={() => go(1)} aria-label="Próximo trecho">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
            <span className="excerpt-count" aria-hidden="true">
              0{index + 1} / 07
            </span>
          </div>
        </div>
        <Newsletter />
      </div>
    </section>
  );
}
