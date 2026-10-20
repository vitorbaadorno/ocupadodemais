import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Heart,
  Clock3,
  MessageCircle,
  Plus,
  X,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { book, chapters, testimonials } from "../data/book";
import { TypewriterTitle } from "../components/TypewriterTitle";
import { Excerpts } from "../components/Excerpts";

export const Route = createFileRoute("/")({ component: Home });

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`image-placeholder ${className}`}
      role="img"
      aria-label={`Espaço reservado: ${label}`}
    >
      <span className="placeholder-cross cross-tl" aria-hidden="true">
        +
      </span>
      <span className="placeholder-cross cross-br" aria-hidden="true">
        +
      </span>
      <div className="placeholder-label">
        <span className="placeholder-line" aria-hidden="true" />
        <span>{label}</span>
        <span className="placeholder-note">Espaço reservado para imagem</span>
      </div>
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
            Quero ler <ArrowUpRight size={15} aria-hidden="true" />
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
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="hero" aria-label="Apresentação do livro">
          <div className="container">
            <p className="eyebrow hero-eyebrow">
              <span className="small-dash" />
              Um livro de Vitor Adôrno
            </p>
            <TypewriterTitle />
            <p className="hero-subtitle">Prosa reflexiva sobre tempo, memória e encontros.</p>
            <p className="hero-description">
              Sete capítulos. Um convite a olhar com mais calma
              <br className="desktop-break" /> para o que a pressa quase fez passar.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#comprar">
                Encontre seu exemplar <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#citacoes">
                <BookOpen size={18} aria-hidden="true" /> Ler um trecho
              </a>
            </div>
            <div className="hero-art">
              <div className="art-caption">
                <span>Ocupado Demais Para Você…</span>
                <span>
                  Nova edição <span aria-hidden="true">↗</span>
                </span>
              </div>
              <ImagePlaceholder label="O universo ODPV" className="landscape-placeholder" />
              <div className="art-footer">
                <span>Tempo. Memória. Presença.</span>
                <a href="#livro" aria-label="Conhecer o livro">
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
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
                <a className="text-link underlined" href="#citacoes">
                  Conheça a escrita <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="audience-heading">
              <span className="eyebrow">Talvez estas páginas sejam para você</span>
              <span className="rule" />
            </div>
            <div className="audience-grid">
              {[
                {
                  Icon: Clock3,
                  title: "Se a rotina corre demais",
                  text: "E faz falta um momento para conversar sem olhar o relógio.",
                },
                {
                  Icon: Heart,
                  title: "Se a memória faz companhia",
                  text: "E algumas amizades continuam perto, mesmo de longe.",
                },
                {
                  Icon: MessageCircle,
                  title: "Se o cotidiano diz muito",
                  text: "E um gesto pequeno pode contar uma história inteira.",
                },
              ].map(({ Icon, title, text }) => (
                <div className="audience-item" key={title}>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Excerpts />

        <section id="capitulos" className="section chapters" aria-labelledby="chapters-title">
          <div className="container chapter-grid">
            <div className="chapter-intro">
              <span className="eyebrow">O caminho da leitura</span>
              <h2 id="chapters-title">
                Sete capítulos. <br />
                Muitas formas <br />
                de se encontrar.
              </h2>
              <p>Conheça as histórias que atravessam estas páginas, uma de cada vez.</p>
              <span className="chapter-note">
                01 — 07 <span aria-hidden="true">↘</span>
              </span>
            </div>
            <div className="chapter-list">
              {chapters.map((chapter, index) => (
                <details className="chapter" key={chapter.title}>
                  <summary>
                    <span className="chapter-number">0{index + 1}</span>
                    <h3>{chapter.title}</h3>
                    <Plus size={18} className="chapter-plus" aria-hidden="true" />
                  </summary>
                  <p>{chapter.description}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="autor" className="section author" aria-labelledby="author-title">
          <div className="container author-grid">
            <ImagePlaceholder label="Vitor Adôrno" className="portrait-placeholder" />
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
                className="text-link underlined"
                href="https://www.instagram.com/vitorba.adorno/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acompanhe o autor <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

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
                <figure className="testimonial" key={item.name}>
                  <span className="testimonial-quote" aria-hidden="true">
                    “
                  </span>
                  <blockquote>“{item.text}”</blockquote>
                  <figcaption>
                    <strong>{item.name}</strong>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.source} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span>{item.source}</span>
                    )}
                  </figcaption>
                </figure>
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
                  <span className="eyebrow">No papel</span>
                  <span className="store-name">UICLAP ↗</span>
                </div>
                <div className="physical-body">
                  <ImagePlaceholder label="Capa do livro" className="cover-placeholder" />
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
                  Comprar na UICLAP <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <p className="fine-print">Consulte o prazo de produção e entrega na loja.</p>
              </article>
              <article className="purchase-card digital">
                <div className="purchase-top">
                  <span className="eyebrow">Na sua tela</span>
                  <span className="store-name">AMAZON ↗</span>
                </div>
                <BookOpen size={33} strokeWidth={1.3} aria-hidden="true" />
                <h3>Livro digital</h3>
                <p>Para ler no Kindle ou no aplicativo Kindle, no seu ritmo.</p>
                <p className="digital-price">Consulte o preço na Amazon.</p>
                <a
                  className="button outline"
                  href={book.kindleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver edição Kindle <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </article>
            </div>
            <p className="purchase-note">
              A compra é concluída na loja escolhida. Preços e condições podem ser alterados pelas
              plataformas.
            </p>
          </div>
        </section>
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
              <a href="https://linktr.ee/ocupadoparavoce" target="_blank" rel="noopener noreferrer">
                Encontre o ODPV nas redes ↗
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Vitor Adôrno. Todos os direitos reservados.</p>
            <a href="#inicio">Voltar ao início ↑</a>
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
