# Artes e interações — 20/10/2026

## Decisões confirmadas

- O selo do card físico diz **Edição física**, sem alegação de menor preço.
- Após o teste generativo alterar o desenho e não atingir o tamanho solicitado, o usuário aprovou ampliação convencional 2× com preservação das artes.
- Os originais em `D:/Projetos/ODPV/Assets/Para o site/image-assets/` não foram modificados.
- A arte de capa fornecida não contém título; foi usada no espaço reservado dos dois cards, mantendo a indicação de placeholder.

## Implementação

- Animações reiniciam em novos carregamentos e em restaurações pelo histórico do navegador. A preferência do sistema por movimento reduzido continua respeitada.
- Hero com crédito em 18px, sem travessão, e 32 elementos decorativos pequenos com transparências e entradas escalonadas. Bloco grande de placeholder removido.
- Trechos com fade de 350ms na saída e na entrada, avanço automático a cada 7 segundos e apenas duas setas visíveis. A troca pausa enquanto o leitor mantém o mouse ou foco na área, e quando a aba está oculta.
- Timeline inicia à esquerda, permite arraste com mouse, rolagem por toque e navegação por teclado. Barra e botões de progressão removidos. O quiz rola até a timeline e transfere o foco para o capítulo destacado.
- Cards com espaços de capa nos dois formatos e Kindle a R$ 9,90. CTA de escrita e autor com aparência de botão. Setas para cima removidas.
- Fotos do autor incorporadas e rodapé compactado, preservando links e contato.
- `public/artwork/manifest.json` registra dimensões de origem e saída das 35 artes. `scripts/prepare-artwork.py` reproduz a ampliação; o preview da capa evita carregar a imagem de 8192×12288 nos cards.

## Verificação

- TypeScript: passou.
- Build: passou; avisos do bundler sobre dependências e configuração já existentes.
- ESLint dos arquivos alterados nesta etapa: passou.
- ESLint geral: bloqueado por 267 erros de formatação CRLF em arquivos fora desta alteração.
- 35 arquivos verificados com largura e altura exatamente duplicadas; canal alpha mantido nos 32 elementos.
- Navegador em 1440px e 390px: sem overflow horizontal da página; nenhuma imagem quebrada ou erro de console observado.
- Arraste com mouse deslocou a timeline de 0 para 590px; quiz completo destacou capítulo 7 e rolou automaticamente até ele.
- Timer observado com intervalo de aproximadamente 7s entre trocas; amostras confirmaram opacidade caindo a zero e voltando a um. Controle manual também passou.
- Reload observado durante hidratação: título reiniciou com 24 letras ocultas e terminou com todas visíveis.
- Nenhum commit, push, merge ou deploy executado.
