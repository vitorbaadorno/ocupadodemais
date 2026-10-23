import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { book, testimonials } from "../data/book";
import { ReadingArtwork } from "../components/ReadingArtwork";
import { HeroArtwork } from "../components/HeroArtwork";
import { TypewriterTitle } from "../components/TypewriterTitle";
import { Excerpts } from "../components/Excerpts";

import { ChapterTimeline } from "../components/ui/ChapterTimeline";
import { TestimonialCard } from "../components/ui/TestimonialCard";
import { ScrollReveal } from "../components/ScrollReveal";
import { FAQ } from "../components/FAQ";
import { SocialLinks } from "../components/SocialLinks";

export const Route = createFileRoute("/")({ component: Home });

function BookCover() {
  return (
    <div className="purchase-cover">
      <img
        className="cover-art"
        src="/artwork/arte-capa-preview.webp"
        alt="Arte da capa de Ocupado Demais Para Você"
        width="480"
        height="720"
        loading="lazy"
      />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#inicio" aria-label="ODPV — início">
          odpv<span aria-hidden="true">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#livro">O livro</a>
          <a href="#citacoes">Trechos</a>
          <a href="#capitulos">Capítulos</a>
          <a href="#autor">O autor</a>
        </nav>
        <div className="header-actions">
          <a className="button primary small" href="#comprar">
            Quero ler
          </a>
          <button
            className="menu-toggle icon-button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          hidden={!open}
          aria-label="Navegação móvel"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
            }
          }}
        >
          {[
            ["#livro", "O livro"],
            ["#citacoes", "Trechos"],
            ["#capitulos", "Capítulos"],
            ["#autor", "O autor"],
            ["#depoimentos", "Leitores"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home() {
  const [entrance, setEntrance] = useState(0);
  useEffect(() => {
    const replay = (event: PageTransitionEvent) => {
      if (event.persisted) setEntrance((value) => value + 1);
    };
    window.addEventListener("pageshow", replay);
    return () => window.removeEventListener("pageshow", replay);
  }, []);
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <ScrollReveal key={`reveal-${entrance}`} />
      <main id="conteudo">
        <section id="inicio" className="hero" aria-label="Apresentação do livro">
          <HeroArtwork key={`artwork-${entrance}`} />
          <div className="container">
            <p className="eyebrow hero-eyebrow">Um livro de Vitor Adôrno</p>
            <TypewriterTitle key={`title-${entrance}`} />
            <p className="hero-subtitle">Prosa reflexiva sobre tempo, memória e encontros.</p>
            <p className="hero-description">
              Sete capítulos. Um convite a olhar com mais calma
              <br className="desktop-break" /> para o que a pressa quase fez passar.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#comprar">
                Encontre seu exemplar
              </a>
              <a className="text-link" href="#citacoes">
                <BookOpen size={18} aria-hidden="true" /> Ler um trecho
              </a>
            </div>
          </div>
        </section>

        <section id="livro" className="section introduction" aria-labelledby="book-title">
          <div className="container">
            <div className="intro-grid">
              <div>
                <span className="eyebrow">Sobre o livro</span>
                <h2 id="book-title">
                  A vida acontece <br />
                  nos pequenos <br />
                  <span className="warm-word">encontros.</span>
                </h2>
              </div>
              <div className="intro-copy">
                <p>
                  <em>Ocupado Demais Para Você…</em> reúne sete capítulos de prosa reflexiva sobre
                  tempo, memória, amizade, amor, família e perdão.
                </p>
                <p>
                  Uma caixa de brinquedos, uma conversa na praça, um álbum de fotografias. Histórias
                  do cotidiano que convidam a desacelerar e perceber quem está por perto.
                </p>
                <a className="button outline" href="#citacoes">
                  Conheça a escrita
                </a>
              </div>
            </div>
          </div>
        </section>

        <Excerpts />

        <ChapterTimeline />

        <section id="autor" className="section author" aria-labelledby="author-title">
          <div className="container author-grid">
            <div className="author-artwork">
              <img
                className="author-photo"
                src="/artwork/autor-2x.webp"
                alt="Vitor Adôrno ao ar livre"
                width="1800"
                height="1800"
                loading="lazy"
              />
              <img
                className="author-photo-inset"
                src="/artwork/autor-retrato-2x.webp"
                alt="Retrato de Vitor Adôrno usando óculos"
                width="2160"
                height="3670"
                loading="lazy"
              />
            </div>
            <div className="author-copy">
              <span className="eyebrow">Quem escreve</span>
              <h2 id="author-title">Vitor Adôrno</h2>
              <p className="author-lead">
                Um olhar atento para a vida
                <br />
                que acontece todos os dias.
              </p>
              <p>
                Autor brasileiro independente, nascido em Niquelândia, Goiás, e morador de Uruaçu.
                Sua escrita parte da observação do cotidiano e das relações que construímos.
              </p>
              <p>
                <em>Ocupado Demais Para Você…</em> é uma nova edição da obra publicada anteriormente
                como <em>Pensamentos de um Jovem Moderno</em>.
              </p>
              <a
                className="button outline"
                href="https://www.instagram.com/vitorba.adorno/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acompanhe o autor
              </a>
            </div>
          </div>
        </section>

        <div className="reading-sections">
          <ReadingArtwork key={`reading-${entrance}`} />
          <section
            id="depoimentos"
            className="section testimonials"
            aria-labelledby="testimonials-title"
          >
            <div className="container">
              <div className="section-heading centered">
                <span className="eyebrow">Depois da última página</span>
                <h2 id="testimonials-title">O que fica com quem lê.</h2>
              </div>
              <div className="testimonial-grid">
                {testimonials.map((item) => (
                  <TestimonialCard item={item} key={item.name} />
                ))}
              </div>
            </div>
          </section>

          <section id="comprar" className="section purchase" aria-labelledby="purchase-title">
            <div className="container">
              <div className="section-heading centered">
                <span className="eyebrow">A próxima página é sua</span>
                <h2 id="purchase-title">Abra espaço para uma leitura.</h2>
                <p>Escolha o formato que combina com o seu jeito de ler.</p>
              </div>
              <div className="purchase-grid">
                <article className="purchase-card physical">
                  <div className="purchase-top">
                    <span className="edition-badge">Edição física</span>
                    <span className="store-name">UICLAP</span>
                  </div>
                  <div className="physical-body">
                    <BookCover />
                    <div>
                      <h3>Livro físico</h3>
                      <p className="price">{book.physicalPrice}</p>
                      <p className="fine-print">+ frete calculado na loja</p>
                    </div>
                  </div>
                  <a
                    className="button primary"
                    href={book.physicalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar na UICLAP
                  </a>
                  <p className="fine-print">Consulte o prazo de produção e entrega na loja.</p>
                </article>
                <article className="purchase-card digital">
                  <div className="purchase-top">
                    <span className="eyebrow">Na sua tela</span>
                    <span className="store-name">AMAZON</span>
                  </div>
                  <div className="physical-body">
                    <BookCover />
                    <div>
                      <h3>Livro digital</h3>
                      <p className="price">R$ 9,90</p>
                      <p className="kindle-unlimited">Incluído na assinatura Kindle Unlimited.</p>
                      <p className="fine-print">
                        Para ler no Kindle ou no aplicativo Kindle, no seu ritmo.
                      </p>
                    </div>
                  </div>
                  <a
                    className="button outline"
                    href={book.kindleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver edição Kindle
                  </a>
                </article>
              </div>
              <p className="purchase-note">
                A compra é concluída na loja escolhida. Preços e condições podem ser alterados pelas
                plataformas.
              </p>
            </div>
          </section>
        </div>
        <FAQ />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <a className="wordmark" href="#inicio" aria-label="ODPV — voltar ao início">
                odpv<span aria-hidden="true">.</span>
              </a>
              <p>
                Ocupado Demais Para Você…
                <br />
                Um livro de Vitor Adôrno.
              </p>
            </div>
            <nav aria-label="Navegação do rodapé">
              <a href="#livro">O livro</a>
              <a href="#citacoes">Trechos e newsletter</a>
              <a href="#comprar">Onde comprar</a>
            </nav>
            <div className="footer-contact">
              <span className="eyebrow">Vamos conversar</span>
              <a href={`mailto:${book.email}`}>{book.email}</a>
              <SocialLinks />
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Vitor Adôrno. Todos os direitos reservados.</p>
            <a href="#inicio">Voltar ao início</a>
          </div>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: { "@type": "Person", name: book.author },
            inLanguage: "pt-BR",
            url: book.url,
          }),
        }}
      />
    </>
  );
}
