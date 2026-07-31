import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Mail,
  ShoppingBag,
  Sparkles,
  Star,
  Tablet,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
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
      { property: "og:title", content: "Ocupado Demais Para Você… | Vitor Adôrno" },
      {
        property: "og:description",
        content:
          "Sete capítulos sobre tempo, memória e as pessoas que passam pela nossa vida. Um convite a desacelerar.",
      },
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

const trechos = [
  "Existe um tipo de pressa que só percebemos quando alguém, sem querer, nos obriga a parar.",
  "Guardar uma lembrança é uma forma de continuar visitando as pessoas que ficaram longe.",
  "A tarde termina do mesmo jeito para todo mundo, mas nem todo mundo repara nela.",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
              className="rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Comprar
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-warm opacity-70" aria-hidden="true" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                >
                  <ShoppingBag className="size-4" aria-hidden="true" /> Garanta o seu exemplar
                </a>
                <a
                  href="#livro"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
                >
                  <BookOpen className="size-4" aria-hidden="true" /> Sobre o livro
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={hero}
                width={1280}
                height={960}
                alt="Ilustração de um banco de praça vazio sob uma árvore ao entardecer"
                className="w-full rounded-3xl border border-border/70 object-cover shadow-lift"
              />
            </Reveal>
          </div>
        </section>

        {/* Sobre o livro */}
        <section id="livro" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Sobre o livro</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                “Ocupado Demais Para Você…” é uma coletânea de prosa reflexiva dividida em sete
                capítulos que atravessam tempo, memória, amizade, isolamento urbano, amor, família e
                perdão. São histórias cotidianas, do tipo que acontece enquanto ninguém está
                prestando muita atenção.
              </p>
              <p>
                Um jovem reencontra os pais num feriado e reabre uma caixa de brinquedos de
                infância. Amizades nascem, se transformam e às vezes se perdem pelo caminho. Numa
                praça, um encontro casual com um senhor traz de volta tudo aquilo que ele deixou
                para depois. Há observações sobre um amor moderno que se comunica com mensagens
                prontas e copiadas, uma amizade que se rompe e volta a existir através do perdão, um
                casal mais velho revivendo a própria história em álbuns de fotografia, e um capítulo
                final feito de pequenas cenas vistas numa praça, cada uma revelando uma fagulha de
                humanidade.
              </p>
              <p>
                No fundo, o livro faz um convite simples: desacelerar, olhar para quem está por
                perto e perceber que a vida ocupada demais também é feita de encontros pequenos que
                merecem atenção.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Autor */}
        <section id="autor" className="bg-secondary/35 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Sobre o autor</h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  Vitor Adôrno é um autor brasileiro independente, natural de Uruaçu, Goiás. Este é
                  seu segundo livro publicado, depois de “Pensamentos de um Jovem Moderno”.
                </p>
                <p>
                  Sua escrita é íntima e observadora. Ele parte de cenas comuns, uma conversa de
                  calçada, um álbum antigo, uma tarde parada numa praça, e transforma esses momentos
                  em reflexões sobre presença, memória e o que significa estar perto de alguém de
                  verdade.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Capítulos */}
        <section id="capitulos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Os sete capítulos</h2>
            <p className="mt-3 max-w-xl text-foreground/70">
              Cada capítulo caminha por um tempo diferente da vida.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capitulos.map((cap, i) => (
              <Reveal key={cap.titulo} delay={i * 70}>
                <article className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
                  <span className="font-serif text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold">{cap.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{cap.frase}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Trechos */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 bg-gradient-warm opacity-45" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5">
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">No tom do livro</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {trechos.map((t, i) => (
                <Reveal key={t} delay={i * 90}>
                  <blockquote className="h-full rounded-2xl bg-background/80 p-7 font-serif text-lg italic leading-relaxed shadow-soft">
                    “{t}”
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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
              <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
                <h3 className="font-serif text-2xl font-semibold">Livro físico</h3>
                <p className="mt-4 font-serif text-3xl text-primary">R$ 38,12</p>
                <p className="text-sm text-foreground/70">mais frete</p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm">
                  <Truck className="size-4" aria-hidden="true" /> Entrega para todo o Brasil
                </p>
                <a
                  href={LINK_FISICO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Comprar na Uiclap
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
                <h3 className="font-serif text-2xl font-semibold">Livro digital (Kindle)</h3>
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
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Comprar na Amazon
                </a>
              </div>
            </Reveal>
          </div>
          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            Preços sujeitos a alteração pelas plataformas de venda.
          </p>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-secondary/30 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm text-foreground/75">
          <p className="font-serif text-base">Vitor Adôrno, 2026</p>
          <a
            href="mailto:vitorba.adorno@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="size-4" aria-hidden="true" /> vitorba.adorno@gmail.com
          </a>
          <p className="text-xs text-muted-foreground">
            Ocupado Demais Para Você… Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* CTA flutuante */}
      <a
        href="#comprar"
        className="fixed bottom-5 left-5 right-5 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-accent hover:text-accent-foreground md:left-auto md:right-8 md:w-auto"
      >
        <ShoppingBag className="size-4" aria-hidden="true" /> Comprar agora
      </a>
      <div className="h-20 md:h-0" aria-hidden="true" />
    </div>
  );
}
