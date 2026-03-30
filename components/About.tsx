import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: "◈",
    title: "Omladinski fokus",
    body: "Klub je izgrađen na radu s mladim borcima, od 6 godina navzgor. Svaki šampion je ovdje počeo od nule.",
  },
  {
    icon: "◉",
    title: "Takmičarski mentalitet",
    body: "Redovni nastupi na državnim, evropskim i svjetskim takmičenjima. Formiramo borce koji ne prave izgovore.",
  },
  {
    icon: "◆",
    title: "Organizacijska snaga",
    body: "Domaćin državnog prvenstva BiH 2025. sa 280 takmičara iz 54 kluba — potvrda klupskog integriteta.",
  },
];

export default function About() {
  return (
    <section id="o-klubu" style={{ padding: "7rem 0", position: "relative", overflow: "hidden" }}>
      <div className="hex-grid-bg" />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        {/* Layout: text left, big accent right */}
        <div className="two-col-grid">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="section-label" style={{ marginBottom: "1.5rem" }}>
                O Klubu
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
                color: "var(--white)",
                marginBottom: "1.5rem" }}>
                MALI KLUB,<br />
                <span style={{ color: "var(--red)" }}>VELIKA</span><br />
                SRCA.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--white-dim)",
                maxWidth: "480px",
                marginBottom: "1.5rem" }}>
                Kik boks klub Laktaši formalno je osnovan 2020. godine, ali priča
                iza njega počela je mnogo ranije — u sali gdje je Igor Grbić počeo
                graditi generaciju boraca koji će Laktaše staviti na mapu
                evropskog kik boksa.
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--white-dim)",
                maxWidth: "480px" }}>
                Od 2023. klub ulazi u fazu brzog rasta: prvaci Bosne,
                juniorski prvak Evrope, seniori na podijumu Evropskih prvenstava.
                Sve to bez glamura, samo treningom.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div style={{
                marginTop: "2.5rem",
                padding: "1.4rem",
                borderLeft: "3px solid var(--red)",
                background: "rgba(192,57,43,0.05)" }}>
                <p style={{
                  fontFamily: "var(--font-condensed)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1.5 }}>
                  "Laktaši su dobili prve evropske medalje u kik boksu."
                </p>
                <p style={{
                  fontFamily: "var(--font-condensed)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginTop: "0.5rem" }}>
                  — Igor Grbić, 2023.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={200 + i * 130} direction="right">
                <div className="stat-card diag-accent" style={{ padding: "1.75rem 2rem" }}>
                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      color: "var(--red)",
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: "2px" }}>
                      {p.icon}
                    </span>
                    <div>
                      <div style={{
                        fontFamily: "var(--font-condensed)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--white)",
                        marginBottom: "0.4rem" }}>
                        {p.title}
                      </div>
                      <p style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                        color: "var(--white-dim)",
                        lineHeight: 1.6 }}>
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* KBS badge */}
            <ScrollReveal delay={600} direction="right">
              <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "1rem 1.5rem",
                border: "1px solid var(--border)",
                background: "var(--bg-card)" }}>
                <img
                  src="/kbs_logo.png"
                  alt="Kickboxing Savez BiH"
                  style={{ height: "44px", width: "auto", display: "block", flexShrink: 0 }}
                />
                <div>
                  <div style={{
                    fontFamily: "var(--font-condensed)", fontSize: "0.8rem",
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "var(--white-dim)" }}>
                    Zvanični član
                  </div>
                  <div style={{
                    fontFamily: "var(--font-condensed)", fontSize: "1rem",
                    fontWeight: 700, color: "var(--white)", marginTop: "1px" }}>
                    Kickboxing Saveza BiH
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
