# ODPV — redesign

Implementação local na branch órfã `codex/redesign-odpv`, criada em branco. A `origin/main` foi consultada para recuperar conteúdo e preservar a base React 19, TypeScript, TanStack Start e Vite. Não há merge nem publicação.

## Executar

- `npm ci`
- `npm run dev -- --host 127.0.0.1 --port 5173`
- `npm run build`
- `npx tsc --noEmit`

## Conteúdo e decisões

Os dados da obra, sete trechos literais, capítulos, lojas e depoimentos ficam em `src/data/book.ts`. As correções do autor prevalecem sobre o README histórico e sobre a main. As duas avaliações idênticas de Pietra Yassmin e ge foram mantidas exatamente como fornecidas. Nenhuma nota em estrelas foi presumida.

O título usa Caprasimo, o corpo Lora e os destaques EB Garamond. As fontes WOFF2 e licenças estão em `public/fonts`. As imagens foram intencionalmente substituídas por espaços reservados, sem gerar novas capas ou retratos.

Ordem: hero → apresentação e público → trechos + newsletter → capítulos → autor → depoimentos → compra → rodapé.

O título digita uma única vez por navegador/perfil, usando `localStorage` (chave `odpv:title-seen:v1`). O texto já está presente no HTML, sem alteração de altura durante a animação, com nome acessível completo. Movimento reduzido desativa o efeito. Quando o armazenamento é bloqueado, o site continua funcionando, mas a primeira visita não pode ser lembrada entre sessões.

A newsletter carrega o script oficial Kit UID `1dd41e68dc`. O provedor controla envio, validação e confirmação; o site não simula inscrições. Há alternativa para abrir o formulário no Kit quando o script não carrega. O botão envia e-mails reais: testes de confirmação devem usar um endereço autorizado pelo autor.

## Antes de uma futura publicação

- Inserir imagens oficiais nos espaços já preparados.
- Definir e aprovar a política de privacidade e acrescentar o link. O aviso curto de finalidade junto ao formulário não substitui essa política.
- Validar uma inscrição real, o e-mail de confirmação e o cancelamento no Kit, com endereço autorizado. Confirmar o fuso do agendamento de quinta-feira às 19h no provedor.
- Confirmar condições das lojas no momento da publicação. O preço físico de R$ 37,77 foi informado pelo autor; o Kindle direciona para consulta na Amazon.
- Retirar `noindex, nofollow` de `src/routes/__root.tsx` e `Disallow: /` de `public/robots.txt` somente na versão aprovada para produção.
- Adicionar imagem social oficial aos metadados quando fornecida.

A política não foi inventada. O e-mail oficial confirmado é ocupadoparavoce@gmail.com. Naturalidade: Niquelândia, GO; residência: Uruaçu, GO. A obra é uma nova edição de Pensamentos de um Jovem Moderno.
