import { useEffect, useRef, useState } from "react";

const FORM_URL = "https://ocupado-demais-para-voce.kit.com/1dd41e68dc";

export function Newsletter() {
  const mount = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  useEffect(() => {
    const container = mount.current;
    if (!container) return;
    let disposed = false;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = "1dd41e68dc";
    script.src = `${FORM_URL}/index.js`;
    script.onerror = () => {
      if (!disposed) setStatus("error");
    };
    // Kit owns submission, validation and confirmation. Do not simulate success locally.
    const observer = new MutationObserver(() => {
      const form = container.querySelector("form");
      const input = container.querySelector<HTMLInputElement>('input[type="email"]');
      if (!form || !input) return;
      input.id = "newsletter-email";
      input.autocomplete = "email";
      input.inputMode = "email";
      input.setAttribute("aria-describedby", "newsletter-use");
      if (!container.querySelector('label[for="newsletter-email"]')) {
        const label = document.createElement("label");
        label.htmlFor = "newsletter-email";
        label.textContent = "Seu e-mail";
        label.className = "newsletter-label";
        input.before(label);
      }
      form.setAttribute("aria-label", "Inscrição na newsletter ODPV");
      const alerts = container.querySelector('[data-element="errors"]');
      alerts?.setAttribute("role", "alert");
      setStatus("ready");
      observer.disconnect();
    });
    observer.observe(container, { childList: true, subtree: true });
    container.appendChild(script);
    const timeout = window.setTimeout(() => {
      if (!container.querySelector("form")) setStatus("error");
    }, 15000);
    return () => {
      disposed = true;
      observer.disconnect();
      window.clearTimeout(timeout);
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-intro">
        <span className="eyebrow">A conversa continua</span>
        <h3 id="newsletter-title">
          Um pouco de leitura,
          <br />
          sem pressa.
        </h3>
        <p>Pensamentos sobre o universo ODPV, notícias e descontos exclusivos para assinantes.</p>
        <p className="schedule">
          <span aria-hidden="true">↳</span> Toda quinta-feira, às 19h.
        </p>
      </div>
      <div className="newsletter-form">
        <div className="kit-mount" ref={mount} />
        {status !== "ready" && (
          <p className="form-status" role="status">
            {status === "loading" ? "Carregando formulário…" : "O formulário não carregou."}{" "}
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Abrir inscrição no Kit
            </a>
          </p>
        )}
        <noscript>
          <p>
            <a href={FORM_URL}>Inscreva-se pelo formulário do Kit</a>.
          </p>
        </noscript>
        <p id="newsletter-use" className="fine-print">
          Ao se inscrever, você solicita os e-mails do ODPV. Seu endereço será enviado ao Kit para o
          cadastro. Você pode cancelar a inscrição pelo link nos e-mails.
        </p>
      </div>
    </div>
  );
}
