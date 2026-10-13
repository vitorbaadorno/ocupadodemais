import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { BookOpen, ChevronDown, Instagram, ShoppingBag, Tablet, Truck } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Particles } from "@/components/Atmosphere";
import { Citacoes } from "@/components/Citacoes";
import { Depoimentos } from "@/components/Depoimentos";
import { LinhaDoTempo } from "@/components/LinhaDoTempo";
import { Grifo } from "@/components/Grifo";
import { ProgressoLeitura } from "@/components/ProgressoLeitura";
import { Quiz } from "@/components/Quiz";
import { AutorShowcase } from "@/components/AutorShowcase";
import { DetalhesLivro } from "@/components/DetalhesLivro";
import { Button } from "@/components/ui/button";
const capa = { url: "/assets/capa-livro.webp" };



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ocupado Demais Para Você… | Livro de Vitor Adôrno" },
      {
        name: "description",
        content:
          "Coletânea de prosa reflexiva em sete capítulos sobre tempo, memória e encontros. Livro de Vitor Adôrno, em versão física e Kindle.",
      },
      { property: "og:title", content: "Ocupado Demais Para Você… | Livro de Vitor Adôrno" },
      {
        property: "og:description",
        content:
          "Coletânea de prosa reflexiva em sete capítulos sobre tempo, memória e encontros. Livro de Vitor Adôrno, em versão física e Kindle.",
      },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINK_FISICO = "https://loja.uiclap.com/titulo/ua168560";
const LINK_KINDLE = "https://www.amazon.com.br/dp/B0GXCD9CLC";

const capitulos = [
  {
    titulo: "Cresci, mas não perdi.",
    frase: "Um feriado em casa, uma caixa de brinquedos e tudo o que continua vivo dentro da gente.",
  },
  {
    titulo: "“meu amigo”",
    frase: "As amizades que nascem sem aviso e mudam de forma conforme o tempo passa.",
  },
  {
    titulo: "Ocupado demais para você…",
    frase: "Uma conversa de praça com quem já deixou muita coisa para depois.",
  },
  {
    titulo: "Eu (não) te amo.",
    frase: "Sobre o amor moderno, feito às vezes de palavras prontas e repetidas.",
  },
  {
    titulo: "Eu te perdoo.",
    frase: "Um laço que se rompe e o caminho lento até voltar a existir.",
  },
  {
    titulo: "Recorte de memória.",
    frase: "Um casal mais velho, um álbum de fotografias e a vida revista página a página.",
  },
  {
    titulo: "Uma vez eu vi…",
    frase: "Pequenas cenas observadas numa praça, cada uma com sua fagulha de humanidade.",
  },
];

const sinopse: ReactNode[] = [
  <>
    “Ocupado Demais Para Você…” é uma coletânea de prosa reflexiva dividida em sete capítulos que
    atravessam <Grifo>tempo</Grifo>, <Grifo>memória</Grifo>, <Grifo>amizade</Grifo>, isolamento
    urbano, <Grifo tone="clay">amor</Grifo>, <Grifo tone="clay">família</Grifo> e{" "}
    <Grifo>perdão</Grifo>. São histórias cotidianas, do tipo que acontece enquanto ninguém está
    prestando muita atenção.
  </>,
  <>
    Um jovem reencontra os pais num feriado e reabre uma caixa de brinquedos de infância. Amizades
    nascem, se transformam e às vezes se perdem pelo caminho. Numa praça, um encontro casual com um
    senhor traz de volta tudo aquilo que ele deixou para depois. Há observações sobre um amor
    moderno que se comunica com mensagens prontas e copiadas, uma amizade que se rompe e volta a
    existir através do <Grifo tone="clay">perdão</Grifo>, um casal mais velho revivendo a própria
    história em álbuns de fotografia, e um capítulo final feito de pequenas cenas vistas numa
    praça, cada uma revelando uma fagulha de humanidade.
  </>,
  <>
    No fundo, o livro faz um convite simples: <Grifo>desacelerar</Grifo>, olhar para quem está por
    perto e perceber que a vida ocupada demais também é feita de encontros pequenos que merecem
    atenção.
  </>,
];

const faq = [
  {
    p: "O livro é uma edição nova de “Pensamentos de um Jovem Moderno”? Preciso comprar se já li o outro?",
    r: "“Ocupado Demais Para Você…” é a segunda versão de “Pensamentos de um Jovem Moderno”, mas os dois livros são obras diferentes. O ODPV tem outro ISBN e histórias melhoradas. Se você já leu o PDJM, encontrará uma nova versão das narrativas, por isso a leitura pode valer a pena também para quem conhece o livro anterior.",
  },
  {
    p: "Onde posso comprar o livro e qual a diferença entre as versões?",
    r: "O livro físico está na Uiclap por R$ 37,77 e na Amazon por R$ 48,15, mais frete. A versão digital para Kindle custa R$ 9,90 na Amazon e pode ser lida na hora. O conteúdo é o mesmo nas duas versões.",
  },
  {
    p: "Quanto tempo leva para chegar o livro físico?",
    r: "Os livros são impressos sob demanda, ou seja, cada exemplar só é produzido depois de vendido. Por isso, o prazo costuma ser mais longo que o habitual. O prazo exato aparece no momento da compra, de acordo com o seu CEP.",
  },
  {
    p: "Posso ler o Kindle sem ter o aparelho?",
    r: "Sim, a Amazon disponibiliza aplicativos gratuitos de leitura para celular, tablet e computador, então não é necessário ter o leitor físico Kindle.",
  },
  {
    p: "Para qual público o livro é indicado?",
    r: "Para leitores que se identificam com temas como amizade, amadurecimento, memória afetiva, relações familiares e a sensação de estar sempre ocupado demais para as pessoas que importam. É uma leitura mais reflexiva do que leve, mais contemplativa do que de ritmo acelerado.",
  },
  {
    p: "O livro tem conteúdo sensível?",
    r: "As histórias tocam em temas como perda, afastamento entre amigos, término de amizades e envelhecimento, sempre de forma reflexiva e sem cenas gráficas.",
  },
  {
    p: "Como entro em contato com o autor?",
    r: "Por e-mail, em ocupadoparavoce@gmail.com, para dúvidas, permissões ou solicitações.",
  },
];

function Index() {
  const [quizAberto, setQuizAberto] = useState(false);
  const [brilho, setBrilho] = useState<{ indice: number; chave: number } | null>(null);
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dusk pt-[3.75rem] text-foreground">
      <ProgressoLeitura />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#inicio" className="font-serif text-base font-semibold tracking-tight">
            Ocupado Demais Para Você…
          </a>
          <div className="hidden items-center gap-7 text-sm md:flex">
            <a href="#livro" className="transition-colors hover:text-primary">
              Sobre o livro
            </a>
            <a href="#autor" className="transition-colors hover:text-primary">
              Autor
            </a>
            <a href="#capitulos" className="transition-colors hover:text-primary">
              Capítulos
            </a>
            <a
              href="#comprar"
              className="tap-press rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground shadow-soft hover:bg-accent hover:text-accent-foreground"
            >
              Comprar
            </a>
          </div>
        </nav>
      </header>

      <main className="relative">
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <Particles />
          <div className="relative mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
            <Reveal>
              <h1 className="mx-auto max-w-3xl text-center font-serif text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                Ocupado Demais
                <br />
                Para Você…
              </h1>
              <p className="mt-4 text-lg font-medium">Vitor Adôrno</p>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
                Sete capítulos sobre o tempo que corre, as pessoas que passam e os encontros que a
                pressa quase fez a gente perder.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button asChild className="tap-press h-auto whitespace-normal rounded-full px-7 py-3.5 text-base font-semibold shadow-lift hover:bg-accent hover:text-accent-foreground">
                <a
                  href="#comprar"
                >
                  <ShoppingBag className="size-4" aria-hidden="true" /> Garanta o seu exemplar
                </a>
                </Button>
                <Button asChild variant="outline" className="tap-press h-auto rounded-full border-foreground/25 bg-transparent px-7 py-3.5 text-base hover:bg-secondary">
                <a
                  href="#livro"
                >
                  <BookOpen className="size-4" aria-hidden="true" /> Sobre o livro
                </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sobre o livro e capa */}
        <section id="livro" className="section-fade relative overflow-hidden">
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
            <div className="text-left">
              <Reveal>
                <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
                  Sobre o livro
                </h2>
              </Reveal>

              <div className="relative mt-7 space-y-5 text-justify text-lg leading-relaxed text-foreground/85">
                {sinopse.map((p, i) => (
                  <Reveal key={i} delay={i * 140}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={120}>
              <img
                src={capa.url}
                width={1280}
                height={1920}
                alt="Capa do livro Ocupado Demais Para Você, de Vitor Adôrno"
                className="mx-auto w-full max-w-sm rounded-lg object-contain shadow-lift"
              />
            </Reveal>
          </div>
        </section>



        {/* Autor */}
        <section id="autor" className="section-fade relative overflow-hidden py-16 md:py-24">
          <div className="relative mx-auto max-w-5xl px-6 md:px-8">
            <Reveal>
              <div className="relative flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12">
                <div className="flex shrink-0 flex-col items-center gap-6 self-center max-md:-translate-x-[min(200px,calc(50vw_-_170px))] md:ml-[calc(-1*min(112px,16px_+_max(0px,(100vw_-_1024px)/2)))] md:mt-16 md:self-center">
                  <AutorShowcase />
                  <a
                    href="https://instagram.com/vitorba.adorno"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram do autor: @vitorba.adorno"
                    className="tap-press inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-background/70 px-4 py-2 text-sm font-medium hover:bg-secondary"
                  >
                    <Instagram className="size-4 text-primary" aria-hidden="true" />
                    @vitorba.adorno
                  </a>
                </div>
                <div aria-hidden="true" className="hidden w-px shrink-0 self-stretch origin-center scale-y-[0.6] bg-bark md:block" />
                <div className="min-w-0 space-y-5 text-justify text-lg leading-relaxed text-foreground/85">
                  <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Sobre o autor</h2>
                  <p>
                    Eu sou Vitor Adôrno, autor brasileiro independente, natural de Niquelândia,
                    Goiás, e atualmente moro em Uruaçu, onde continuo vivendo e escrevendo.
                  </p>
                  <p>
                    Minha escrita nasce principalmente da observação do cotidiano. Da casa dos meus
                    pais, de uma padaria de bairro, de um banco de praça ou de uma conversa
                    aparentemente comum. Gosto de transformar esses pequenos momentos em reflexões
                    sobre o tempo, a presença e as relações que construímos uns com os outros.
                  </p>
                  <p>
                    Sou autor de “Ocupado Demais Para Você…”, uma nova edição da obra que publiquei
                    anteriormente sob o título <em>Pensamentos de um Jovem Moderno</em>. O livro
                    reúne sete narrativas independentes que passam por temas como amizade, amor,
                    família e envelhecimento.
                  </p>
                  <p>
                    Boa parte dessas páginas começou em um diário. Eram anotações que eu fazia sem
                    muita pretensão, geralmente no fim do dia, sobre alguma coisa que tinha visto,
                    pensado ou sentido. Aos poucos, percebi que escrever sobre o cotidiano também
                    era uma forma de entendê-lo.
                  </p>
                  <p>
                    De tanto escrever sobre a vida como ela é, o cotidiano acabou virando livro.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Citações interativas */}
        <Citacoes />

        {/* Capítulos, linha do tempo */}
        <section
          id="capitulos"
          className="section-fade paper-grain relative overflow-hidden bg-[#f2e6d8] py-16 md:py-24"
        >
          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
                Os sete capítulos
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-foreground/70">
                Uma linha do tempo da leitura, do primeiro ao sétimo capítulo.
              </p>
            </Reveal>
            <div className="relative mt-12">
              <LinhaDoTempo capitulos={capitulos} brilho={brilho} />
            </div>
            <div className="mt-8 text-center">
              <Button
                type="button"
                onClick={() => setQuizAberto((v) => !v)}
                className="tap-press h-auto whitespace-normal rounded-full px-7 py-3.5 text-base font-semibold shadow-lift hover:bg-accent hover:text-accent-foreground"
              >
                Descubra seu capítulo preferido
              </Button>
            </div>
            {quizAberto && (
              <Quiz
                capitulos={capitulos}
                onResultado={(i) => {
                  setBrilho({ indice: i, chave: Date.now() });
                  document
                    .getElementById("capitulos")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              />
            )}
          </div>
        </section>

        {/* Depoimentos */}
        <Depoimentos />


        {/* Comprar */}
        <section id="comprar" className="mx-auto max-w-5xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
              Onde encontrar o livro
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-foreground/70">
              Escolha o formato que combina com o seu jeito de ler.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="glow-melhor-preco relative flex h-full flex-col rounded-3xl border border-primary/50 bg-card p-8 shadow-soft">
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft">
                  Melhor preço
                </span>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-md border border-accent/70 px-2 py-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Uiclap
                    </span>
                    <h3 className="mt-3 font-sans text-2xl font-semibold">Livro físico</h3>
                  </div>
                  <img
                    src={capa.url}
                    loading="lazy"
                    alt="Capa do livro Ocupado Demais Para Você, de Vitor Adôrno"
                    className="h-24 w-16 rounded-md border border-border/70 object-cover shadow-soft"
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="font-sans text-lg text-muted-foreground line-through">
                    R$ 48,15
                  </span>
                  <span className="font-sans text-4xl font-bold text-primary">R$ 37,77</span>
                </div>
                <p className="text-sm text-foreground/70">mais frete</p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm">
                  <Truck className="size-4" aria-hidden="true" /> Entrega para todo o Brasil
                </p>
                <a
                  href={LINK_FISICO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-press mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift hover:bg-accent hover:text-accent-foreground"
                >
                  Comprar na Uiclap
                </a>
                <DetalhesLivro />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-md border border-accent/70 px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      <svg viewBox="0 0 40 14" className="h-3 w-9" fill="none" aria-hidden="true">
                        <path
                          d="M2 9c7 5 24 5 33-1"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                        <path
                          d="M31 6.5c2.5-1 5-1 6 .2.9 1.1.2 3.4-1 5"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Amazon
                    </span>
                    <h3 className="mt-3 font-sans text-2xl font-semibold">
                      Livro digital (Kindle) e livro físico
                    </h3>
                  </div>
                  <img
                    src={capa.url}
                    loading="lazy"
                    alt="Capa do livro Ocupado Demais Para Você, de Vitor Adôrno"
                    className="h-24 w-16 rounded-md border border-border/70 object-cover shadow-soft"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="font-sans text-3xl font-bold text-primary">R$ 48,15</span>
                    <p className="text-sm text-foreground/70">Físico</p>
                  </div>
                  <div>
                    <span className="font-sans text-3xl font-bold text-primary">R$ 9,90</span>
                    <p className="text-sm text-foreground/70">Digital</p>
                  </div>
                </div>

                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm">
                  <Tablet className="size-4" aria-hidden="true" /> Leia na hora, em qualquer
                  dispositivo
                </p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm">
                  <Truck className="size-4" aria-hidden="true" /> Entrega para todo o Brasil
                </p>

                <a
                  href={LINK_KINDLE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-press mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift hover:bg-accent hover:text-accent-foreground"
                >
                  Comprar na Amazon
                </a>
              </div>
            </Reveal>
          </div>

          <p className="mt-3 text-center text-sm italic text-muted-foreground">
            Preços sujeitos a alteração pelas plataformas de venda.
          </p>



        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
          <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-10 space-y-4">
            {faq.map((f) => (
              <details
                key={f.p}
                className="group rounded-3xl border border-border/70 bg-card px-6 py-4 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.p}
                  <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-justify leading-relaxed text-foreground/80">{f.r}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-bark/40 bg-bark py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm text-sand/85">
          <p className="font-serif text-base text-sand">Vitor Adôrno, 2026</p>
          <p className="max-w-md text-sand/85">
            Conheça as outras redes sociais da obra e acompanhe os próximos textos.
          </p>
          <div className="flex items-center gap-6 text-clay">
            <a href="https://www.instagram.com/ocupadoparavoce" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="tap-press hover:text-gold">
              <Instagram className="size-7" />
            </a>
            <a href="https://www.skoob.com.br/pt/book/122696536" target="_blank" rel="noopener noreferrer" aria-label="Skoob" className="tap-press hover:text-gold">
              <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 5.5c3-1.3 6-1.3 9 .7 3-2 6-2 9-.7V19c-3-1.3-6-1.3-9 .7-3-2-6-2-9-.7Z" />
                <path d="M12 6.2v13.5" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@ocupadoparavoce" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="tap-press hover:text-gold">
              <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6Z" />
              </svg>
            </a>
            <a href="https://www.goodreads.com/book/show/251203279-ocupado-demais-para-voc" target="_blank" rel="noopener noreferrer" aria-label="Goodreads" className="tap-press hover:text-gold">
              <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <circle cx="11.5" cy="9.5" r="5" />
                <path d="M16.5 4v11.5a5 5 0 0 1-9.6 2" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-sand/65">
            Ocupado Demais Para Você… Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <div className="h-20 md:h-0" aria-hidden="true" />
    </div>
  );
}
