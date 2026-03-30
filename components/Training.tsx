import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "◈",
    title: "Za sve uzraste",
    body: "Program počinje od 6 godina. Mladi borci razvijaju tehniku, disciplinu i samopouzdanje od samog početka.",
  },
  {
    icon: "◉",
    title: "Tatami i ring",
    body: "Trening obuhvata i tatami discipline (Kick Light, Light Contact) i ring borbe (K1, Full Contact, Low Kick).",
  },
  {
    icon: "◆",
    title: "Takmičarski put",
    body: "Aktivni takmičari se vode prema državnim, evropskim i svjetskim takmičenjima po programu kluba.",
  },
  {
    icon: "▲",
    title: "Individualan pristup",
    body: "Svaki borac ima vlastiti trening plan. Igor Grbić lično prati napredak svakog takmičara.",
  },
];

export default function Training() {
  return (
    <section style={{
      padding: "7rem 0",
      background: "var(--bg-surface)",
      position: "relative",
      overflow: "hidden" }}>
      <div className="hex-grid-bg" />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        {/* Top row: label + headline + CTA */}
        <div className="training-header-grid" style={{ marginBottom: "4rem" }}>
          <div>
            <ScrollReveal>
              <span className="section-label" style={{ marginBottom: "1rem" }}>
                Treninzi
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                lineHeight: 0.9,
                color: "var(--white)",
                letterSpacing: "0.02em" }}>
                POČNI<br />
                <span style={{ color: "var(--red)" }}>DANAS.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} direction="right">
            <div style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem" }}>
              <div style={{
                fontFamily: "var(--font-condensed)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--white-dim)" }}>
                Lokacija
              </div>
              <div style={{
                fontFamily: "var(--font-condensed)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--white)" }}>
                Sportski centar Laktaši
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--white-dim)" }}>
                Karađorđeva bb, 78250 Laktaši
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)" }}>
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="stat-card" style={{
                border: "none",
                borderRadius: 0,
                background: "var(--bg-surface)",
                minHeight: "200px" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  color: "var(--red)",
                  marginBottom: "1rem" }}>
                  {f.icon}
                </div>
                <div style={{
                  fontFamily: "var(--font-condensed)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--white)",
                  marginBottom: "0.6rem" }}>
                  {f.title}
                </div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "var(--white-dim)",
                  lineHeight: 1.65 }}>
                  {f.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={400}>
          <div style={{
            marginTop: "3.5rem",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            padding: "2.5rem 3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap" }}>
            <div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                color: "var(--white)",
                lineHeight: 1.1 }}>
                SPREMAN/NA ZA PRVI KORAK?
              </div>
              <div style={{
                fontFamily: "var(--font-condensed)",
                fontSize: "0.9rem",
                color: "var(--white-dim)",
                marginTop: "0.4rem",
                letterSpacing: "0.06em" }}>
                Kontaktiraj nas i zakaži prvi probni trening.
              </div>
            </div>
            <a href="#kontakt" className="btn-punch" style={{ flexShrink: 0 }}>
              Kontaktiraj klub
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
