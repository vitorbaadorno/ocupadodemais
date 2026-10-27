<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the publication-details dialog in a dedicated browser-safe component using the shared Dialog and Button controls, so the purchase card remains focused and accessible.
- Scope reference-inspired layout styling under the page's layout class and exclude the hero composition; this preserves existing content and interactive behavior while keeping layout rules separate from palette and typography tokens.
- Keep edge-decoration drift on an outer wrapper, pause it offscreen and honor reduced motion; this preserves image rotation and reveal effects without continuous offscreen animation.
- Freeze the edge-decoration layer's document-space height after initial font layout; content expansion must not redistribute its percentage-based positions.
- Keep FAQ answers mounted in a dedicated browser-safe component with a grid-height transition and an accessible shared Button trigger; this enables both enter and exit animation without exposing collapsed answers to keyboard navigation.
