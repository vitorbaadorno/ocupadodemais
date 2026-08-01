import { useEffect, useRef, useState, type ReactNode } from "react";

export function Grifo({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "clay" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOn(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`grifo ${tone === "clay" ? "grifo-clay" : ""} ${on ? "grifo-on" : ""}`}
    >
      {children}
    </span>
  );
}
