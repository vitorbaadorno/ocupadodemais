import { Plus } from "lucide-react";
import { faq } from "../data/faq";

export function FAQ() {
  return (
    <section id="duvidas" className="section faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title">Dúvidas sobre o livro</h2>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={18} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
