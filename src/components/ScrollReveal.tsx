import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>(
      "main > section:not(.hero) > .container, .reading-sections > section > .container, .site-footer > .container",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("reveal-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -30px 0px" },
    );
    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });
    const revealAll = () => elements.forEach((element) => element.classList.add("reveal-visible"));
    motion.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", revealAll);
      elements.forEach((element) => element.classList.remove("scroll-reveal", "reveal-visible"));
    };
  }, []);
  return null;
}
