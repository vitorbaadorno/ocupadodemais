import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { book } from "../data/book";

const description =
  "Prosa reflexiva sobre tempo, memória e encontros. Conheça os sete capítulos de Ocupado Demais Para Você…, de Vitor Adôrno, leia trechos e encontre seu exemplar.";
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${book.title} | ${book.author}` },
      { name: "description", content: description },
      { name: "author", content: book.author },
      { name: "theme-color", content: "#F2E6D8" },
      { property: "og:title", content: `${book.title} | ${book.author}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "book" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: book.url },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: book.title },
      { name: "twitter:description", content: description },
      // Preview branch only. Remove after release approval, along with robots.txt Disallow.
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: book.url },
      {
        rel: "preload",
        href: "/fonts/caprasimo.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: ({ children }: { children: ReactNode }) => (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  ),
  component: Root,
  notFoundComponent: () => (
    <main className="error-page">
      <span className="eyebrow">Página não encontrada</span>
      <h1>Vamos voltar ao livro?</h1>
      <a className="button primary" href="/">
        Ir para o início
      </a>
    </main>
  ),
  errorComponent: ({ reset }) => (
    <main className="error-page">
      <h1>Esta página não carregou.</h1>
      <p>Tente novamente para continuar a leitura.</p>
      <button className="button primary" onClick={reset}>
        Tentar novamente
      </button>
    </main>
  ),
});
function Root() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
