"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="kontakt" style={{
      padding: "7rem 0 5rem",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden" }}>
      {/* Red corner accent */}
      <div style={{
        position: "absolute",
        bottom: 0, right: 0,
        width: "400px", height: "400px",
        background: "radial-gradient(circle at bottom right, rgba(192,57,43,0.1) 0%, transparent 65%)",
        pointerEvents: "none" }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div className="two-col-grid">

          {/* Left — headline + text */}
          <div>
            <ScrollReveal>
              <span className="section-label" style={{ marginBottom: "1.5rem" }}>
                Kontakt
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.9,
                color: "var(--white)",
                marginBottom: "1.5rem",
                letterSpacing: "0.02em" }}>
                PRIDRUŽI SE<br />
                <span style={{ color: "var(--red)" }}>TIMU.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--white-dim)",
                maxWidth: "440px" }}>
                Bez obzira na uzrast ili nivo iskustva — vrata su otvorena.
                Bilo da si početnik koji želi probati kik boks,
                ili iskusni takmičar koji traži ozbiljan trening program,
                KBK Laktaši je tvoje mjesto.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — info cards + links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                icon: "◉",
                label: "Adresa",
                value: "Karađorđeva bb",
                sub: "78250 Laktaši, BiH",
              },
              {
                icon: "◈",
                label: "Pravni naziv",
                value: 'KIK BOKS KLUB "LAKTAŠI"',
                sub: "JIB: 4404546080003 · Aktivan od 06.02.2020.",
              },
              {
                icon: "◆",
                label: "Trener / Kontakt osoba",
                value: "Igor Grbić",
                sub: "Licenca B · KBS BiH · B-TL24-29",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80} direction="right">
                <div style={{
                  display: "flex",
                  gap: "1.2rem",
                  padding: "1.2rem 1.5rem",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  alignItems: "flex-start",
                  transition: "border-color 0.3s ease" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(192,57,43,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    color: "var(--red)",
                    lineHeight: 1.4,
                    flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-condensed)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--white-dim)",
                      marginBottom: "0.2rem" }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-condensed)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      lineHeight: 1.3 }}>
                      {item.value}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "var(--white-dim)",
                      marginTop: "0.2rem" }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Quick links */}
            <ScrollReveal delay={300} direction="right">
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                {[
                  { label: "KBS BiH", href: "https://kickboxingbih.ba" },
                  { label: "WAKO Rang lista", href: "https://setopen.sportdata.org" },
                  { label: "Glas Laktaša", href: "https://www.glaslaktasa.com" },
                ].map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-condensed)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--white-dim)",
                      textDecoration: "none",
                      border: "1px solid var(--border)",
                      padding: "0.5rem 1rem",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "var(--red)";
                      e.currentTarget.style.borderColor = "rgba(192,57,43,0.35)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "var(--white-dim)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    {l.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M4 2h4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal delay={400} direction="right">
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
                {[
                  {
                    href: "https://www.facebook.com/klubborilackihvjestina.laktasi/",
                    label: "Facebook",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.instagram.com/kickboxingclub_and_gym_laktasi/",
                    label: "Instagram",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                    ),
                  },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "36px", height: "36px",
                      border: "1px solid var(--border)",
                      color: "var(--white-dim)",
                      textDecoration: "none",
                      transition: "color 0.2s ease, border-color 0.2s ease" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "var(--red)";
                      e.currentTarget.style.borderColor = "rgba(192,57,43,0.4)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "var(--white-dim)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
