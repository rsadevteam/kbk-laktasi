"use client";

import ScrollReveal from "./ScrollReveal";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { value: 2020, suffix: "", label: "Godina osnivanja", sublabel: "Aktivni član KBS BiH" },
  { value: 32, suffix: "", label: "Medalje u 2025.", sublabel: "19 zlatnih · 6 srebrnih · 7 bronzanih" },
  { value: 6, suffix: "", label: "Pehara za najboljeg", sublabel: "Takmičara na turnirima 2025." },
  { value: 280, suffix: "+", label: "Takmičara na DP 2025", sublabel: "Iz 54 kluba — organizator KBK Laktaši" },
];

export default function Stats() {
  return (
    <section style={{
      background: "var(--bg-surface)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding: "4rem 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0",
        }}>
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 120}>
              <div
                className="stat-card"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                  borderTop: "none",
                  borderBottom: "none",
                  borderLeft: "none",
                  background: "transparent",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  color: "var(--red)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div style={{
                  fontFamily: "var(--font-condensed)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--white)",
                  marginTop: "0.5rem",
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "var(--white-dim)",
                  marginTop: "0.3rem",
                  lineHeight: 1.4,
                }}>
                  {s.sublabel}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
