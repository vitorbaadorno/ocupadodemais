# Deploy na Vercel

- Branch: `codex/redesign-odpv-completo`. Não mesclar com `main`.
- Instalação: `npm ci`; build: `npm run build` (Vite + TanStack Start + Nitro).
- O preset `vercel` do Nitro gera `.vercel/output/` no formato Build Output API, incluindo arquivos estáticos, função SSR e regras de roteamento em `config.json`.
- As regras geradas servem arquivos estáticos primeiro e encaminham as demais URLs para a função SSR do TanStack Start. Não adicionar um rewrite para `/index.html`: este projeto usa SSR.
- No painel da Vercel, deixe Output Directory sem override. Não publique apenas `.output/public`, pois isso excluiria a função SSR. O `vercel.json` define instalação e build; o Nitro gera as rotas de deploy.
- Conecte o repositório e habilite deployments para a branch acima. O push dispara o deploy se essa integração já estiver ativa.
- Autor Git: Vitor Adôrno <vbatistaadorno@gmail.com>. Esse e-mail deve estar verificado na conta GitHub com acesso ao projeto Vercel.

Referência: https://nitro.build/deploy/providers/vercel
