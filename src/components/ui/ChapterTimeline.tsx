import { useEffect, useRef, useState } from "react";
import { chapters } from "../../data/book";
import { quizQuestions, recommendChapter } from "../../data/quiz";

export function ChapterTimeline() {
  const track = useRef<HTMLOListElement>(null);
  const quizHeading = useRef<HTMLHeadingElement>(null);
  const drag = useRef<{ x: number; scroll: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [focusQuiz, setFocusQuiz] = useState(false);
  useEffect(() => {
    if (focusQuiz && result === null) quizHeading.current?.focus();
  }, [step, open, result, focusQuiz]);
  useEffect(() => {
    if (result === null || !track.current) return;
    const item = track.current.children[result] as HTMLElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    item.focus({ preventScroll: true });
    track.current.scrollIntoView({ block: "center", behavior: reduced ? "instant" : "smooth" });
    track.current.scrollTo({
      left:
        item.offsetLeft -
        track.current.offsetLeft -
        (track.current.clientWidth - item.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, [result]);
  return (
    <section id="capitulos" className="section chapters" aria-labelledby="chapters-title">
      <div className="container">
        <span className="eyebrow">O caminho da leitura</span>
        <h2 id="chapters-title">Sete capítulos. Muitas formas de se encontrar.</h2>
        <p className="timeline-intro">
          Conheça as histórias que atravessam estas páginas, uma de cada vez.
        </p>
        <div className="timeline-controls">
          <span>Arraste para explorar os sete capítulos</span>
        </div>
        <ol
          className={`chapter-timeline${dragging ? " is-dragging" : ""}`}
          id="chapter-timeline"
          ref={track}
          tabIndex={0}
          aria-label="Linha do tempo dos capítulos"
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft };
            event.currentTarget.setPointerCapture(event.pointerId);
            setDragging(true);
          }}
          onPointerMove={(event) => {
            if (!drag.current) return;
            event.currentTarget.scrollLeft = drag.current.scroll - (event.clientX - drag.current.x);
          }}
          onPointerUp={(event) => {
            drag.current = null;
            setDragging(false);
            if (event.currentTarget.hasPointerCapture(event.pointerId))
              event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onLostPointerCapture={() => {
            drag.current = null;
            setDragging(false);
          }}
          onPointerCancel={() => {
            drag.current = null;
            setDragging(false);
          }}
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const element = event.currentTarget;
            const left =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? element.scrollWidth
                  : element.scrollLeft + (event.key === "ArrowRight" ? 320 : -320);
            element.scrollTo({
              left,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            });
          }}
        >
          {chapters.map((chapter, index) => (
            <li
              className={`timeline-item${result === index ? " recommended" : ""}`}
              key={chapter.title}
              aria-current={result === index ? "true" : undefined}
              tabIndex={-1}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <span className="timeline-number">Capítulo 0{index + 1}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              {result === index && (
                <strong className="recommendation-label">Sua sugestão de leitura</strong>
              )}
            </li>
          ))}
        </ol>
        <div className="chapter-quiz">
          <h3>Descubra seu capítulo preferido</h3>
          <p>
            Seis perguntas sobre os temas do livro para encontrar uma sugestão de leitura. Não é
            preciso já ter lido a obra.
          </p>
          {!open ? (
            <button
              className="button primary"
              aria-expanded={false}
              aria-controls="quiz-content"
              onClick={() => {
                setOpen(true);
                setFocusQuiz(true);
              }}
            >
              Começar o quiz
            </button>
          ) : null}
          <div id="quiz-content" hidden={!open}>
            {open && result === null && (
              <>
                <p className="quiz-step">Pergunta {step + 1} de 6</p>
                <h4 ref={quizHeading} tabIndex={-1} className="quiz-question">
                  {quizQuestions[step].question}
                </h4>
                <fieldset className="quiz-answers">
                  <legend className="sr-only">{quizQuestions[step].question}</legend>
                  {quizQuestions[step].answers.map((answer, index) => (
                    <label
                      key={`${step}-${index}`}
                      className={answers[step] === index ? "chosen" : ""}
                    >
                      <input
                        type="radio"
                        name={`question-${step}`}
                        checked={answers[step] === index}
                        onChange={() =>
                          setAnswers((previous) => {
                            const next = [...previous];
                            next[step] = index;
                            return next;
                          })
                        }
                      />
                      <span>{answer}</span>
                    </label>
                  ))}
                </fieldset>
                <div className="quiz-actions">
                  {step > 0 && (
                    <button className="button outline" onClick={() => setStep(step - 1)}>
                      Voltar
                    </button>
                  )}
                  <button
                    className="button primary"
                    disabled={answers[step] === undefined}
                    onClick={() =>
                      step < 5 ? setStep(step + 1) : setResult(recommendChapter(answers))
                    }
                  >
                    {step === 5 ? "Ver meu capítulo" : "Próxima pergunta"}
                  </button>
                </div>
              </>
            )}
            {result !== null && (
              <div className="quiz-result">
                <p>Seu encontro com estas páginas pode começar por:</p>
                <h4 ref={quizHeading} tabIndex={-1} className="quiz-question">
                  {chapters[result].title}
                </h4>
                <p>{chapters[result].description}</p>
                <p className="quiz-explanation">
                  A sugestão considera os temas que você mais escolheu. Em caso de empate, vale sua
                  preferência mais recente. O capítulo está destacado na linha do tempo acima.
                </p>
                <div className="quiz-actions">
                  <a className="button primary" href="#chapter-timeline">
                    Ver capítulo na linha do tempo
                  </a>
                  <button
                    className="button outline"
                    onClick={() => {
                      setResult(null);
                      setStep(0);
                      setAnswers([]);
                    }}
                  >
                    Refazer quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
