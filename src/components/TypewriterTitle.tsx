import { useEffect, useRef } from "react";
import { book } from "../data/book";

export function TypewriterTitle() {
  const title = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = title.current;
    if (!el) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const letters = Array.from(el.querySelectorAll<HTMLElement>("[data-letter]"));
    letters.forEach((letter) => {
      letter.style.visibility = "hidden";
    });
    el.classList.add("is-typing");
    let index = 0;
    const finish = () => {
      letters.forEach((letter) => {
        letter.style.visibility = "";
      });
      el.classList.remove("is-typing");
      window.clearInterval(timer);
    };
    const timer = window.setInterval(() => {
      if (index >= letters.length) {
        finish();
        return;
      }
      letters[index].style.visibility = "";
      index += 1;
    }, 65);
    const onMotion = () => {
      if (motion.matches) finish();
    };
    motion.addEventListener("change", onMotion);
    return () => {
      finish();
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <h1 className="hero-title" aria-label={book.title}>
      <span ref={title} aria-hidden="true">
        {["Ocupado Demais", "Para Você…"].map((line, i) => (
          <span className={`title-line line-${i}`} key={line}>
            {Array.from(line).map((letter, j) => (
              <span data-letter key={j}>
                {letter}
              </span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  );
}
