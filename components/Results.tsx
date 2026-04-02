import ScrollReveal from "./ScrollReveal";

const years = [
  {
    year: "2026",
    results: [
      { medal: "🥇", event: "UNA Open 2026, Bihać", athletes: ["David Mudrinić", "Zare Đurđević", "Filip Kalabić"], note: "David — pehar za najboljeg mlađeg juniora" },
      { medal: "🥇", event: "Prvenstvo RS 2026, Prnjavor", athletes: ["Zare Đurđević", "Andrej Vuruna", "Filip Kalabić", "David Mudrinić"], note: "7 medalja ukupno · David — najboljeg mlađi junior" },
      { medal: "🥈", event: "Italian World Cup 2026, Lido di Jesolo", athletes: ["David Mudrinić"], note: "Srebro — finalni poraz od 1. nosioca iz Moldavije" },
    ],
  },
  {
    year: "2025",
    results: [
      { medal: "🥇", event: "Prvak Evrope 2025, Lido di Jesolo", athletes: ["David Mudrinić"], note: "Kick Light stariji kadet +69 kg" },
      { medal: "🥇", event: "WAKO Svjetski kup Budimpešta", athletes: ["David Mudrinić"], note: "#1 WAKO rang lista u kategoriji" },
      { medal: "🥇", event: "WAKO Svjetski kup Italija", athletes: ["David Mudrinić"], note: "Italian World Cup — niz od 28 pobjeda" },
      { medal: "🥇", event: "Državno prvenstvo BiH 2025 — 1. dio", athletes: ["Aleksa Brborović", "David Mudrinić", "Zare Đurđević"], note: "KBK Laktaši — domaćin i organizator (54 kluba, 280 takmičara)" },
      { medal: "🥇", event: "Državno Prvenstvo BiH 2025 — 2. dio", athletes: ["Zare Đurđević", "Minja Kodžo"], note: "Zare — prvak Light Contact · Minja — prvak Full Contact Junior" },
      { medal: "🥇", event: "Balkanski kup 2025", athletes: ["David Mudrinić", "Zare Đurđević"], note: "David — pehar za najboljeg borca kategorije" },
      { medal: "🥈", event: "Evropski kup Zagreb 2025", athletes: ["Minja Kodžo"], note: "David — zlato, Zare — bronza" },
      { medal: "🥉", event: "Italian World Cup 2025", athletes: ["Aleksa Brborović"], note: "David — zlato" },
    ],
  },
  {
    year: "2024",
    results: [
      { medal: "🥉", event: "Evropsko seniorsko prvenstvo, Atina", athletes: ["Aleksa Brborović"], note: "Kick Light Senior — prva seniorska EP medalja" },
      { medal: "🥇", event: "Memorijal Dragan Gajić - Ricko", athletes: ["Aleksa Brborović", "Zare Đurđević"], note: "Pehar za najboljeg kluba tatami discipline" },
      { medal: "🥇", event: "Croatia Open, Makarska", athletes: ["David Mudrinić"], note: "Pehar za najboljeg starijeg kadeta turnira" },
      { medal: "◈", event: "Proglašenja — KBS BiH 2024", athletes: ["Igor Grbić"], note: "Najboljeg trener za tatami · Aleksa — najboljeg sportista Laktaša" },
    ],
  },
  {
    year: "2023",
    results: [
      { medal: "🥇", event: "Juniorsko Evropsko Prvenstvo, Istanbul", athletes: ["Aleksa Brborović"], note: "Kick Light do 89 kg — prve europske medalje za Laktaše" },
      { medal: "🥉", event: "Juniorsko EP 2023, Istanbul", athletes: ["Minja Kodžo"], note: "Bronza na EP" },
      { medal: "🥇", event: "Trostruki prvak BiH 2023", athletes: ["Minja Kodžo"], note: "K1 + Full Contact + Low Kick — ista sezona" },
      { medal: "🥇", event: "WAKO Evropski kup Karlovac", athletes: ["Aleksa Brborović", "David Mudrinić"], note: "2 zlata · 2 bronze" },
    ],
  },
];

export default function Results() {
  return (
    <section id="results" style={{
      padding: "7rem 0",
      background: "var(--bg-surface)",
      position: "relative",
      overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <ScrollReveal>
          <span className="section-label" style={{ marginBottom: "1rem" }}>
            Rezultati
          </span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 0.9,
            color: "var(--white)",
            marginBottom: "4rem",
            letterSpacing: "0.02em" }}>
            ISTORIJA<br />
            <span style={{ color: "var(--red)" }}>POBJEDA.</span>
          </h2>
        </ScrollReveal>

        {/* Year blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {years.map((y, yi) => (
            <ScrollReveal key={y.year} delay={yi * 60}>
              <div className="year-results-grid" style={{ position: "relative" }}>
                {/* Year label */}
                <div className="year-label-text" style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 8vw, 6rem)",
                  color: yi === 0 ? "var(--red)" : "rgba(232,224,208,0.12)",
                  lineHeight: 1,
                  letterSpacing: "0.03em",
                  userSelect: "none" }}>
                  {y.year}
                </div>

                {/* Fog overlay — fades year text before it reaches results */}
                <div aria-hidden="true" style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "3rem",
                  width: "14rem",
                  background: "linear-gradient(to right, transparent, var(--bg-surface))",
                  pointerEvents: "none",
                  zIndex: 1,
                }} />

                {/* Results */}
                <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "2rem", position: "relative", zIndex: 2 }}>
                  {y.results.map((r, ri) => (
                    <div
                      key={ri}
                      className="result-row"
                      style={{ padding: "1rem 0", display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: "1rem", alignItems: "start" }}
                    >
                      <span style={{ fontSize: "1.3rem", lineHeight: 1.4 }}>
                        {r.medal}
                      </span>
                      <div>
                        <div style={{
                          fontFamily: "var(--font-condensed)",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--white)",
                          letterSpacing: "0.05em",
                          marginBottom: "0.25rem" }}>
                          {r.event}
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                          {r.athletes.map(a => (
                            <span key={a} style={{
                              fontFamily: "var(--font-condensed)",
                              fontSize: "0.75rem",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: "var(--red)",
                              border: "1px solid rgba(192,57,43,0.25)",
                              padding: "0.1rem 0.45rem" }}>
                              {a}
                            </span>
                          ))}
                        </div>
                        {r.note && (
                          <div style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.8rem",
                            color: "var(--white-dim)",
                            lineHeight: 1.4,
                            marginTop: "0.15rem" }}>
                            {r.note}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
