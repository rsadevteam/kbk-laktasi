import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  { year: "2023", text: "Trener reprezentacije BiH na EP u Istanbulu — prve EU medalje za Laktaše" },
  { year: "2023", text: "Proglašen najboljim trenerom grada Laktaši" },
  { year: "2024", text: "KBS BiH: Najboljeg trener za tatami disciplinu" },
  { year: "2024", text: "Drugi put zaredom — Najboljeg trener grada Laktaši" },
  { year: "2025", text: "Trener RepBiH na EP u Lido di Jesolo — David Mudrinić prvak Evrope" },
  { year: "2026", text: "Nagrađen kao jedan od najuspješnijih sportskih radnika u izboru 2025." },
];

export default function Coach() {
  return (
    <section id="coach" style={{
      padding: "7rem 0",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden" }}>
      {/* Big diagonal background accent */}
      <div style={{
        position: "absolute",
        top: 0, right: 0,
        width: "50%",
        height: "100%",
        background: "linear-gradient(135deg, transparent 40%, rgba(192,57,43,0.04) 40%)",
        pointerEvents: "none" }} />
      <div style={{
        position: "absolute",
        top: 0, right: 0,
        width: "3px",
        height: "100%",
        background: "linear-gradient(to bottom, var(--red), transparent)",
        opacity: 0.3 }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div className="two-col-grid">

          {/* Left: info */}
          <div>
            <ScrollReveal>
              <span className="section-label" style={{ marginBottom: "1.5rem" }}>
                Stručni kadar
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: "0.5rem" }}>
                Glavni trener
              </div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                color: "var(--white)",
                marginBottom: "0.2em" }}>
                IGOR<br />
                <span style={{ color: "var(--red)" }}>GRBIĆ</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div style={{
                fontFamily: "var(--font-condensed)",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--white-dim)",
                marginBottom: "2rem",
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap" }}>
                <span>Licenca B · KBS BiH</span>
                <span style={{ color: "var(--border)" }}>|</span>
                <span>B-TL24-29</span>
                <span style={{ color: "var(--border)" }}>|</span>
                <span>Trener RepBiH</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--white-dim)",
                maxWidth: "500px",
                marginBottom: "1.5rem" }}>
                Igor Grbić je osnova svega što KBK Laktaši predstavlja. Kao glavni trener,
                doveo je klub od lokalnog sportskog kolektiva do međunarodne referentne
                tačke bosanskoga kik boksa.
              </p>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--white-dim)",
                maxWidth: "500px" }}>
                Trener je i reprezentacije Bosne i Hercegovine — vodio je borce na
                Evropskim i Svjetskim takmičenjima. Dvaput zaredom proglašen najboljim
                trenerom grada Laktaši, a KBS BiH ga je 2024. odlikovao kao
                najboljeg trenera za tatami disciplinu.
              </p>
            </ScrollReveal>

            {/* License card */}
            <ScrollReveal delay={380}>
              <div style={{
                marginTop: "2.5rem",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                padding: "1.4rem 1.75rem",
                display: "inline-flex",
                gap: "1.5rem",
                alignItems: "center" }}>
                <Image
                  src="/kbs_logo.png"
                  alt="Kickboxing Savez BiH"
                  width={48}
                  height={48}
                  sizes="48px"
                  style={{ height: "48px", width: "auto", display: "block", flexShrink: 0 }}
                />
                <div>
                  <div style={{
                    fontFamily: "var(--font-condensed)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--white-dim)",
                    marginBottom: "0.2rem" }}>
                    Trenerska licenca
                  </div>
                  <div style={{
                    fontFamily: "var(--font-condensed)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--white)" }}>
                    KBS BiH · B-TL24-29
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: achievements timeline */}
          <div>
            <ScrollReveal delay={150} direction="right">
              <div style={{
                fontFamily: "var(--font-condensed)",
                fontSize: "0.72rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--white-dim)",
                marginBottom: "2rem" }}>
                Ključna priznanja
              </div>
            </ScrollReveal>

            <div style={{ position: "relative", paddingLeft: "3rem" }}>
              {/* Timeline line */}
              <div className="timeline-line" />

              {achievements.map((a, i) => (
                <ScrollReveal key={i} delay={200 + i * 80} direction="right">
                  <div style={{
                    display: "flex",
                    gap: "1.25rem",
                    paddingBottom: "1.75rem",
                    alignItems: "flex-start",
                    position: "relative" }}>
                    {/* Dot */}
                    <div className="timeline-dot" style={{
                      position: "absolute",
                      left: "-2.85rem",
                      marginTop: "4px" }} />

                    <div>
                      <div style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.85rem",
                        letterSpacing: "0.1em",
                        color: "var(--red)",
                        marginBottom: "0.2rem" }}>
                        {a.year}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-condensed)",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--white)",
                        lineHeight: 1.4 }}>
                        {a.text}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
