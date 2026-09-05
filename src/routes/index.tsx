import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BookOpen,
  Instagram,
  Link as LinkIcon,
  ShoppingBag,
  Mail,
  Tablet,
  Truck,
} from "lucide-react";


import { Reveal } from "@/components/Reveal";
import { FloatingScenery, Particles, Parallax } from "@/components/Atmosphere";
import { Citacoes } from "@/components/Citacoes";
import { Depoimentos } from "@/components/Depoimentos";
import { LinhaDoTempo } from "@/components/LinhaDoTempo";
import { Grifo } from "@/components/Grifo";
import { ProgressoLeitura } from "@/components/ProgressoLeitura";
const capa = { url: "/assets/capa-livro.webp" };
const autor = { url: "/assets/vitor-adorno.png" };
const cenaAutor = { url: "/assets/cena-autor.png" };
const cenaLivro = { url: "/assets/cena-livro.png" };
const arvore2 = { url: "/assets/arvore2.png" };
const arvore3 = { url: "/assets/arvore3.png" };



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
    titulo: "Para quem sente falta de amigos de outras épocas",
    frase: "Aquelas pessoas que você jurou que veria sempre e hoje só aparecem na memória.",
  },
  {
    titulo: "Para quem vive numa rotina corrida",
    frase: "Dias que passam rápido demais e deixam pouco espaço para conversar sem pressa.",
  },
  {
    titulo: "Para quem gosta de observar",
    frase: "Cenas de praça, gestos pequenos, conversas alheias que contam histórias inteiras.",
  },
  {
    titulo: "Para quem já precisou perdoar",
    frase: "Alguém importante, um laço rompido e o caminho lento até voltar a existir.",
  },
];


function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dusk text-foreground">
      <ProgressoLeitura />
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

        {/* Sobre o livro + Para quem é este livro */}
        <section id="livro" className="section-fade relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={cenaLivro.url}
              alt=""
              loading="lazy"
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
            <div className="text-left">
              <Reveal>
                <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">
                  Sobre o livro
                </h2>
              </Reveal>

              <div className="relative mt-7 space-y-5 text-lg leading-relaxed text-foreground/85">
                {sinopse.map((p, i) => (
                  <Reveal key={i} delay={i * 140}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div id="para-quem">
              <Reveal>
                <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                  Para quem é este livro
                </h2>
              </Reveal>
              <div className="mt-8 space-y-6">
                {paraQuem.map((item, i) => (
                  <Reveal key={item.titulo} delay={i * 90}>
                    <div
                      className={i > 0 ? "border-t border-border/60 pt-6" : undefined}
                    >
                      <h3 className="font-serif text-lg font-semibold">{item.titulo}</h3>
                      <p className="mt-2 leading-relaxed text-foreground/75">{item.frase}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Autor */}
        <section id="autor" className="section-fade relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={cenaAutor.url}
              alt=""
              loading="lazy"
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 md:px-8">
            <Reveal>
              <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
                <div className="flex shrink-0 flex-col items-center gap-4 self-center md:self-start">
                  <img
                    src={autor.url}
                    loading="lazy"
                    alt="Foto do autor Vitor Adôrno"
                    className="w-64 rounded-3xl border-4 border-accent object-cover shadow-soft md:h-[26rem] md:w-72"
                  />
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
                <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
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
          <Parallax speed={0.14} className="left-[-3rem] top-[6%] w-40 opacity-30 md:w-60">
            <img src={arvore3.url} alt="" loading="lazy" className="float-layer w-full" />
          </Parallax>
          <Parallax speed={0.24} className="right-[-2.5rem] top-[45%] w-32 opacity-25 md:w-52">
            <img src={arvore2.url} alt="" loading="lazy" className="float-layer w-full" />
          </Parallax>
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
              <LinhaDoTempo capitulos={capitulos} />
            </div>
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
                  <span className="font-sans text-4xl font-bold text-primary">R$ 38,12</span>
                </div>
                <p className="text-sm text-foreground/70">mais frete</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  O mesmo livro impresso, pelo melhor preço. Na Amazon, a versão física sai por R$
                  48,15 mais frete.
                </p>
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
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  O valor de R$ 48,15 mais frete é o preço da versão impressa vendida na Amazon.
                  Não confunda com a versão digital para Kindle, que custa R$ 9,90 e aparece no
                  card ao lado.
                </p>
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

          <p className="mt-6 text-center text-sm leading-relaxed text-foreground/80">
            Os livros são impressos sob demanda, ou seja, cada exemplar só é produzido depois de
            vendido. Por isso, os prazos de entrega costumam ser mais longos do que o habitual.
          </p>

          <p className="mt-3 text-center text-sm italic text-muted-foreground">
            Preços sujeitos a alteração pelas plataformas de venda.
          </p>



        </section>
      </main>

      <footer className="relative border-t border-bark/40 bg-bark py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm text-sand/85">
          <p className="font-serif text-base text-sand">Vitor Adôrno, 2026</p>
          <p className="max-w-md text-sand/85">
            Conheça as outras redes sociais da obra e acompanhe os próximos textos.
          </p>
          <a
            href="https://linktr.ee/ocupadoparavoce"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-press inline-flex items-center gap-2 font-medium text-gold underline underline-offset-4 hover:text-sand"
          >
            <LinkIcon className="size-4" aria-hidden="true" />
            linktr.ee/ocupadoparavoce
          </a>
          <p className="text-sand/80">
            <Mail className="mr-1 inline size-4" aria-hidden="true" />
            ocupadoparavoce@gmail.com
          </p>

          <p className="text-xs text-sand/65">
            Ocupado Demais Para Você… Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <div className="h-20 md:h-0" aria-hidden="true" />
    </div>
  );
}
