import ScrollReveal from "./ScrollReveal";

const athletes = [
  {
    name: "David Mudrinić",
    number: "01",
    disciplines: ["Kick Light +69 kg"],
    rank: "#1 WAKO Rang Lista",
    highlights: [
      "Prvak Evrope 2025",
      "Prvak BiH 2025",
      "2× Svjetski kup 2025",
      "Niz od 28 pobjeda",
    ],
    years: "Mlađi junior",
    color: "#C0392B",
  },
  {
    name: "Aleksa Brborović",
    number: "02",
    disciplines: ["Kick Light +94 kg"],
    rank: "Top 20 WAKO Senior",
    highlights: [
      "Juniorski prvak Evrope 2023",
      "Bronza EP Senior 2024",
      "Prvak BiH Senior 2025",
      "Najbolji sportista Laktaša 2024",
    ],
    years: "Senior",
    color: "#8B2020",
  },
  {
    name: "Minja Kodžo",
    number: "03",
    disciplines: ["K1", "Full Contact", "Low Kick"],
    rank: "Top 11 WAKO Full Contact",
    highlights: [
      "3× Prvak BiH 2023",
      "Bronza EP Junior 2023",
      "Prvak BiH Full Contact 2025",
    ],
    years: "Junior / Senior",
    color: "#6B1515",
  },
  {
    name: "Zare Đurđević",
    number: "04",
    disciplines: ["Light Contact"],
    rank: "Prvak BiH 2025",
    highlights: [
      "Prvak BiH Light Contact 2025",
      "Zlato Balkanski kup 2025",
      "2× Zlato UNA Open & RS 2026",
    ],
    years: "Junior",
    color: "#4A0F0F",
  },
];

export default function Athletes() {
  return (
    <section id="sampioni" style={{
      padding: "7rem 0",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Big bg text */}
      <div style={{
        position: "absolute",
        right: "-1rem",
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(8rem, 18vw, 22rem)",
        lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: "1px rgba(232,224,208,0.035)",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        BORCI
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <span className="section-label" style={{ marginBottom: "1rem", display: "flex" }}>
            Naši Šampioni
          </span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 0.9,
            color: "var(--white)",
            marginBottom: "4rem",
            letterSpacing: "0.02em",
          }}>
            BORCI KOJI<br />
            <span style={{ color: "var(--red)" }}>NOSE</span> GRAD.
          </h2>
        </ScrollReveal>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {athletes.map((a, i) => (
            <ScrollReveal key={a.name} delay={i * 100}>
              <div className="athlete-card" style={{ height: "100%" }}>
                {/* Card top accent */}
                <div style={{
                  height: "5px",
                  background: `linear-gradient(90deg, var(--red), ${a.color})`,
                }} />

                <div style={{ padding: "1.75rem" }}>
                  {/* Number + disciplines */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "3.5rem",
                      color: "rgba(192,57,43,0.18)",
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                    }}>
                      {a.number}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.3rem" }}>
                      {a.disciplines.map(d => (
                        <span key={d} style={{
                          fontFamily: "var(--font-condensed)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--red)",
                          border: "1px solid rgba(192,57,43,0.3)",
                          padding: "0.2rem 0.5rem",
                        }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    color: "var(--white)",
                    lineHeight: 1,
                    letterSpacing: "0.03em",
                    marginBottom: "0.3rem",
                  }}>
                    {a.name}
                  </h3>
                  <div style={{
                    fontFamily: "var(--font-condensed)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--white-dim)",
                    marginBottom: "1.25rem",
                  }}>
                    {a.years}
                  </div>

                  {/* Rank badge */}
                  <div style={{
                    fontFamily: "var(--font-condensed)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}>
                    <span style={{ color: "var(--red)", fontSize: "1rem" }}>◈</span>
                    {a.rank}
                  </div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />

                  {/* Highlights */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    {a.highlights.map(h => (
                      <li key={h} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontFamily: "var(--font-condensed)",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "var(--white-dim)",
                        lineHeight: 1.3,
                      }}>
                        <span style={{ color: "var(--red)", flexShrink: 0, marginTop: "1px" }}>—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
