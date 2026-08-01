import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  BookOpen,
  ChevronDown,
  Coffee,
  Eye,
  HandHeart,
  Instagram,
  Mail,
  PenLine,
  ShoppingBag,
  Sparkles,
  Tablet,
  Truck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FloatingScenery, Particles } from "@/components/Atmosphere";
import { Citacoes } from "@/components/Citacoes";
import { Depoimentos } from "@/components/Depoimentos";
import { LinhaDoTempo } from "@/components/LinhaDoTempo";
import { Quiz } from "@/components/Quiz";
import { Grifo } from "@/components/Grifo";
import { FichaTecnica } from "@/components/FichaTecnica";
import capa from "@/assets/capa-livro.webp.asset.json";
import autor from "@/assets/vitor-adorno.png.asset.json";

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

const paraQuem = [
  {
    icone: Users,
    titulo: "Para quem sente falta de amigos de outras épocas",
    frase: "Aquelas pessoas que você jurou que veria sempre e hoje só aparecem na memória.",
  },
  {
    icone: Coffee,
    titulo: "Para quem vive numa rotina corrida",
    frase: "Dias que passam rápido demais e deixam pouco espaço para conversar sem pressa.",
  },
  {
    icone: Eye,
    titulo: "Para quem gosta de observar",
    frase: "Cenas de praça, gestos pequenos, conversas alheias que contam histórias inteiras.",
  },
  {
    icone: HandHeart,
    titulo: "Para quem já precisou perdoar",
    frase: "Alguém importante, um laço rompido e o caminho lento até voltar a existir.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dusk text-foreground">
      <FloatingScenery />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
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
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="size-3.5" aria-hidden="true" /> Novo livro
              </p>
              <h1 className="font-serif text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                Ocupado Demais Para Você…
              </h1>
              <p className="mt-4 text-lg font-medium">Vitor Adôrno</p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
                Sete capítulos sobre o tempo que corre, as pessoas que passam e os encontros que a
                pressa quase fez a gente perder.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#comprar"
                  className="tap-press inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lift hover:bg-accent hover:text-accent-foreground"
                >
                  <ShoppingBag className="size-4" aria-hidden="true" /> Garanta o seu exemplar
                </a>
                <a
                  href="#livro"
                  className="tap-press inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3.5 text-base font-medium hover:bg-secondary"
                >
                  <BookOpen className="size-4" aria-hidden="true" /> Sobre o livro
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative mx-auto max-w-sm">
                <div
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-ember opacity-25 blur-xl"
                  aria-hidden="true"
                />
                <img
                  src={capa.url}
                  width={1280}
                  height={1920}
                  alt="Capa do livro Ocupado Demais Para Você, de Vitor Adôrno"
                  className="relative w-full rounded-2xl border border-border/70 object-cover shadow-lift"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sobre o livro */}
        <section id="livro" className="relative">
          <div className="paper-grain mx-auto max-w-3xl rounded-3xl bg-background/70 px-6 py-16 md:px-10 md:py-24">
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Sobre o livro</h2>
            </Reveal>
            <div className="relative mt-7 space-y-5 text-lg leading-relaxed text-foreground/85">
              {sinopse.map((p, i) => (
                <Reveal key={i} delay={i * 140}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Autor */}
        <section id="autor" className="relative py-16 md:py-24">
          <div className="paper-grain mx-auto max-w-3xl rounded-3xl bg-secondary/35 px-6 py-14 md:px-10 md:py-20">
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Sobre o autor</h2>
              <div className="relative mt-7 flex flex-col gap-8 sm:flex-row sm:items-start">
                <img
                  src={autor.url}
                  loading="lazy"
                  alt="Foto do autor Vitor Adôrno"
                  className="size-36 shrink-0 rounded-full border-4 border-accent object-cover shadow-soft"
                />
                <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                  <p>
                    Vitor Adôrno é um autor brasileiro independente, natural de Uruaçu, Goiás, onde
                    segue sediado.
                  </p>
                  <p>
                    Sua escrita nasce da observação do cotidiano. A casa dos pais, a padaria de
                    bairro, o banco de praça e se transforma em reflexões sobre tempo, presença e
                    relações humanas. É autor de Ocupado Demais Para Você…, nova edição de sua obra
                    publicada anteriormente sob o título “Pensamentos de um Jovem Moderno”, que
                    reúne sete narrativas independentes sobre amizade, amor, família e
                    envelhecimento.
                  </p>
                  <p>
                    Boa parte dessas páginas começou em um diário. Anotações feitas sem pretensão,
                    ao fim do dia, sobre o que ele havia visto e sentido. De tanto escrever o
                    cotidiano, o cotidiano virou livro.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href="https://instagram.com/vitorba.adorno"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram do autor: @vitorba.adorno"
                      className="tap-press inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-background/70 px-4 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      <Instagram className="size-4 text-primary" aria-hidden="true" />
                      Autor, @vitorba.adorno
                    </a>
                    <a
                      href="mailto:vitorba.adorno@gmail.com"
                      title="Escreva para o autor"
                      className="tap-press inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-background/70 px-4 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      <Mail className="size-4 text-primary" aria-hidden="true" />
                      vitorba.adorno@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Capítulos, linha do tempo */}
        <section id="capitulos" className="relative">
          <div className="paper-grain mx-auto max-w-6xl rounded-3xl bg-background/60 px-5 py-16 md:px-8 md:py-24">
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Os sete capítulos</h2>
              <p className="mt-3 max-w-xl text-foreground/70">
                Uma linha do tempo da leitura, do primeiro ao sétimo capítulo.
              </p>
            </Reveal>
            <div className="relative mt-12">
              <LinhaDoTempo capitulos={capitulos} />
            </div>
          </div>
        </section>

        {/* Citações interativas */}
        <Citacoes />

        {/* Quiz */}
        <Quiz capitulos={capitulos} />

        {/* Para quem é este livro */}
        <section id="para-quem" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Para quem é este livro
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paraQuem.map((item, i) => {
              const Icone = item.icone;
              return (
                <Reveal key={item.titulo} delay={i * 90}>
                  <article className="tap-press h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
                    <span className="grid size-11 place-items-center rounded-full bg-secondary/60 text-primary">
                      <Icone className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.frase}</p>
                  </article>
                </Reveal>
              );
            })}
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
            <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-accent/70 bg-background/80 px-5 py-2.5 text-sm font-medium shadow-soft">
              <Truck className="size-4 text-primary" aria-hidden="true" />
              Disponível em formato físico e digital
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-accent">
                Uiclap
              </span>
              <svg viewBox="0 0 40 14" className="h-3 w-9 text-accent" fill="none" aria-hidden="true">
                <path d="M2 9c7 5 24 5 33-1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path
                  d="M31 6.5c2.5-1 5-1 6 .2.9 1.1.2 3.4-1 5"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-md border border-accent/70 px-2 py-1 font-serif text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Uiclap
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold">Livro físico</h3>
                  </div>
                  <img
                    src={capa.url}
                    loading="lazy"
                    alt="Capa do livro Ocupado Demais Para Você, de Vitor Adôrno"
                    className="h-24 w-16 rounded-md border border-border/70 object-cover shadow-soft"
                  />
                </div>
                <p className="mt-4 font-serif text-3xl text-primary">R$ 38,12</p>
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
                  <span aria-hidden="true">🛒</span> Comprar na Uiclap
                </a>
                <button
                  type="button"
                  onClick={() => setFichaAberta((v) => !v)}
                  aria-expanded={fichaAberta}
                  aria-controls="ficha-tecnica"
                  className="tap-press mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-medium hover:bg-secondary"
                >
                  Saiba mais
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${fichaAberta ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id="ficha-tecnica"
                  className={`grid transition-all duration-500 ease-out ${
                    fichaAberta ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <FichaTecnica />
                  </div>
                </div>
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
                    <h3 className="mt-3 font-serif text-2xl font-semibold">
                      Livro digital (Kindle)
                    </h3>
                  </div>
                  <img
                    src={capa.url}
                    loading="lazy"
                    alt="Capa do livro Ocupado Demais Para Você, de Vitor Adôrno"
                    className="h-24 w-16 rounded-md border border-border/70 object-cover shadow-soft"
                  />
                </div>
                <p className="mt-4 font-serif text-3xl text-primary">R$ 9,90</p>
                <p className="text-sm text-foreground/70">leitura imediata</p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm">
                  <Tablet className="size-4" aria-hidden="true" /> Leia na hora, em qualquer
                  dispositivo
                </p>
                <a
                  href={LINK_KINDLE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-press mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift hover:bg-accent hover:text-accent-foreground"
                >
                  <span aria-hidden="true">🛒</span> Comprar na Amazon
                </a>
              </div>
            </Reveal>
          </div>

          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            Preços sujeitos a alteração pelas plataformas de venda.
          </p>
        </section>
        {/* Selo independente */}
        <section className="mx-auto max-w-3xl px-5 pb-16">
          <Reveal>
            <div className="paper-grain rounded-3xl border border-bark/35 bg-clay/25 px-7 py-9 text-center shadow-soft">
              <span className="inline-flex items-center gap-2 rounded-full border border-bark/35 px-4 py-1.5 font-serif text-xs font-semibold uppercase tracking-[0.2em] text-bark">
                <PenLine className="size-3.5" aria-hidden="true" />
                Escrito e publicado de forma independente
              </span>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
                Cada exemplar que sai daqui passou pelas mãos do próprio autor, do primeiro
                rascunho no diário até a escolha da capa. Quando você leva um livro independente
                para casa, você não compra só páginas, você dá fôlego para que a próxima história
                exista. Obrigado por ler com calma e por fazer parte disso.
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative border-t border-border/70 bg-secondary/30 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm text-foreground/75">
          <p className="font-serif text-base">Vitor Adôrno, 2026</p>
          <a
            href="https://instagram.com/ocupadoparavoce"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram do livro: @ocupadoparavoce"
            className="tap-press inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-background/70 px-4 py-2 font-medium hover:bg-secondary"
          >
            <Instagram className="size-4 text-primary" aria-hidden="true" />
            Livro, @ocupadoparavoce
          </a>
          <p className="text-xs text-muted-foreground">
            Ocupado Demais Para Você… Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* CTA flutuante */}
      <a
        href="#comprar"
        className="tap-press fixed bottom-5 left-5 right-5 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift hover:bg-accent hover:text-accent-foreground md:left-auto md:right-8 md:w-auto"
      >
        <ShoppingBag className="size-4" aria-hidden="true" /> Comprar agora
      </a>
      <div className="h-20 md:h-0" aria-hidden="true" />
    </div>
  );
}
