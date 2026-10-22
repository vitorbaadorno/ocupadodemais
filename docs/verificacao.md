# Verificação do redesign

- Build de produção Vite/TanStack/Nitro: aprovado.
- TypeScript (`tsc --noEmit`): aprovado.
- Página local: HTTP 200, conteúdo renderizado no servidor em pt-BR.
- Sete trechos comparados com a main; mantidos literalmente.
- Revisão visual em quadros de 320, 375, 768 e 1280 px: sem transbordamento horizontal (área útil menor em 15 px devido à barra de rolagem do ambiente).
- Formulário oficial Kit: carregou e apresentou campo de e-mail e botão de inscrição.
- Avanço manual dos trechos, menu móvel, navegação por âncoras e abertura/fechamento de capítulo por teclado: verificados no navegador.
- Contrastes calculados: marrom/creme 8,30:1; acento escuro/creme 5,53:1; texto secundário/papel 6,34:1; texto secundário/fundo de seção 5,07:1.
- Sem imagens externas, animação de rolagem, carrossel automático ou depoimentos com notas presumidas.

## Limites

Não foi enviada inscrição real nem validado recebimento/descadastro. Não foram executados Lighthouse, Core Web Vitals em produção, auditoria com leitor de tela ou teste em aparelhos físicos. Movimento reduzido, armazenamento bloqueado e falha do script possuem tratamento no código; não foi realizada simulação completa dessas condições no navegador.

O build herdado emite avisos de dependências sobre diretivas `use client` e resolução de caminhos; conclui com sucesso. A política de privacidade e as imagens continuam pendentes, conforme o escopo aprovado. O horário de envio deve ser configurado no Kit; o site apenas comunica a frequência informada.

Teste adicional do servidor de produção: HTTP 200, ordem das seções, preço, idioma e disponibilidade de scripts/CSS/fontes aprovados. Nenhum erro de console foi observado na revisão final do navegador.

## Atualização de 20/10/2026 — timeline, quiz e FAQ

- Build de produção e TypeScript passaram; `git diff --check` sem erros.
- Teste da função do quiz: sete resultados alcançáveis, maioria, desempate e rejeição de respostas incompletas.
- Navegador: fluxo completo de seis respostas, resultado Recorte de memória, destaque dourado e diferença de centralização de 0px na timeline; refazer e voltar preservando a seleção conferidos.
- Tela estreita: viewport solicitado de 375px, área útil medida em 360px devido à barra de rolagem; largura do documento também 360px, sem transbordamento horizontal.
- FAQ abriu pelo teclado e mostrou o texto fornecido; quatro logos carregaram. Nenhum erro registrado no console da sessão de verificação.
- Movimento reduzido tratado em CSS e no observador; conteúdo permanece visível sem JavaScript. Efeito de máquina de escrever preservado sem alterações.
- Prévia de produção: http://127.0.0.1:4173/ . O servidor precisa continuar em execução para o endereço funcionar.
- Propostas adicionais da lista de 140 itens estão em `revisao-visual-aprovacao.md`, pendentes de aprovação individual. Nenhuma publicação ou junção com main foi feita.
