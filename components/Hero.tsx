"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [
      { el: badgeRef.current, delay: 100 },
      { el: titleRef.current, delay: 250 },
      { el: subRef.current, delay: 500 },
      { el: ctaRef.current, delay: 700 },
    ];

    els.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = `opacity 0.9s ease ${delay}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 80);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "var(--bg)" }}
    >
      {/* Hex grid bg */}
      <div className="hex-grid-bg" />

      {/* Large diagonal red slash */}
      <div style={{
        position: "absolute",
        top: 0, right: "-5%",
        width: "55%",
        height: "100%",
        background: "linear-gradient(135deg, transparent 45%, rgba(192,57,43,0.04) 45%)",
        pointerEvents: "none" }} />

      {/* Vertical red stripe - far right */}
      <div style={{
        position: "absolute",
        top: 0, right: "8%",
        width: "3px",
        height: "100%",
        background: "linear-gradient(to bottom, var(--red) 0%, rgba(192,57,43,0.0) 100%)",
        opacity: 0.35 }} />

      {/* Large ghost number */}
      <div className="hero-ghost-text" style={{
        position: "absolute",
        right: "-2rem",
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(18rem, 35vw, 42rem)",
        lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "1px rgba(192,57,43,0.08)",
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.05em" }}>
        KBK
      </div>

      {/* Red radial light source */}
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "10%",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)",
        pointerEvents: "none" }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "8rem 2rem 5rem",
        width: "100%" }}>
        {/* Top badge */}
        <div ref={badgeRef} style={{ marginBottom: "2rem" }}>
          <span className="section-label">
            Osnovan 2020. · Laktaši, BiH
          </span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5.5rem, 16vw, 18rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: "var(--white)",
            marginBottom: "0.1em",
            position: "relative" }}
        >
          KIK BOKS
          <br />
          <span style={{ color: "var(--red)", display: "inline-block" }}>
            KLUB
          </span>
          <br />
          <span style={{
            WebkitTextStroke: "2px var(--white)",
            color: "transparent",
            display: "inline-block" }}>
            LAKTAŠI
          </span>
        </h1>

        {/* Sub / tagline */}
        <div ref={subRef} style={{
          marginTop: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          maxWidth: "580px" }}>
          <p style={{
            fontFamily: "var(--font-condensed)",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            color: "var(--white-dim)",
            lineHeight: 1.5 }}>
            Prvaci Bosne, Evrope i Svijeta.
            Klub koji gradi šampione od djetinjstva.
          </p>

          {/* Live stat bar */}
          <div style={{
            marginTop: "1rem",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap" }}>
            {[
              { n: "2×", label: "Prvaci Evrope" },
              { n: "32", label: "Medalje 2025" },
              { n: "#1", label: "WAKO Rang Lista" },
            ].map((s) => (
              <div key={s.n} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.4rem",
                  color: "var(--red)",
                  lineHeight: 1,
                  letterSpacing: "0.02em" }}>
                  {s.n}
                </span>
                <span style={{
                  fontFamily: "var(--font-condensed)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--white-dim)",
                  marginTop: "0.2rem" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#sampioni" className="btn-punch">
            Upoznaj šampione
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#kontakt" className="btn-ghost">
            Prijavi se na trening
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          opacity: 0.4 }}>
          <div style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, transparent, var(--white))" }} />
          <span style={{
            fontFamily: "var(--font-condensed)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--white)",
            writingMode: "vertical-rl" }}>
            Skroluj
          </span>
        </div>
      </div>
    </section>
  );
}
