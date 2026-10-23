# Fundo contínuo de avaliações e compras

As duas seções compartilham uma camada decorativa, com 28 imagens fornecidas pelo autor. O fundo passa gradualmente do creme à cor da seção de compras, sem interromper as ilustrações na divisão entre as seções.

- Artes originais: `D:/Projetos/ODPV/Assets/Para o site/Imagens ruins/Imagens pro site/`.
- Cópias ampliadas: `assets/section-artwork-4x/`, com largura e altura quadruplicadas, transparência preservada e nitidez leve. Ampliação convencional, conforme autorização anterior; não inventa detalhes.
- Imagens usadas na página: `public/artwork/reading/`, derivadas das cópias ampliadas e dimensionadas para os elementos pequenos, com carregamento sob demanda.
- Reprodução: `scripts/prepare-section-artwork.py` (Python com Pillow).
- Componente: `ReadingArtwork.tsx`. Reutiliza a animação `artwork-enter` do hero: 850ms, fade, deslocamento de 16px, atrasos escalonados e opacidades diferentes.
- Cada imagem entra quando está carregada e chega à área visível. Reinicia em reload e restauração pelo histórico, com a mesma chave de entrada usada no hero. A preferência por movimento reduzido continua respeitada.
- Decoração sem foco, sem captura de cliques e oculta de leitores de tela. Conteúdo e cards ficam acima da camada decorativa.
- O seletor de revelação das seções foi atualizado para manter a animação do conteúdo dentro do novo agrupamento.

Integra a atualização da branch `codex/redesign-odpv-completo`, junto às animações de revelação do quiz e FAQ e à troca automática dos trechos a cada sete segundos, sem pausa por mouse ou foco nos controles.
