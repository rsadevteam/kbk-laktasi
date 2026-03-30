"use client";

import Image from "next/image";

const socialLinks = [
	{
		href: "https://www.facebook.com/klubborilackihvjestina.laktasi/",
		label: "Facebook",
		icon: (
			<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
			</svg>
		),
	},
	{
		href: "https://www.instagram.com/kickboxingclub_and_gym_laktasi/",
		label: "Instagram",
		icon: (
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
				<circle cx="12" cy="12" r="4" />
				<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
			</svg>
		),
	},
];

const navLinks = [
	{ href: "#o-klubu", label: "O Klubu" },
	{ href: "#sampioni", label: "Šampioni" },
	{ href: "#rezultati", label: "Rezultati" },
	{ href: "#trener", label: "Trener" },
	{ href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
	return (
		<footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", padding: "2.5rem 0" }}>
			<div
				className="footer-inner"
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "0 2rem",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					gap: "1.5rem" }}
			>
				{/* Logo */}
				<div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
					<Image
						src="/kbkl_logo.png"
						alt="KBK Laktaši"
						width={36}
						height={36}
						sizes="36px"
						style={{ height: "36px", width: "auto", display: "block" }}
					/>
					<div>
						<div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--white)", letterSpacing: "0.1em" }}>
							KBK LAKTAŠI
						</div>
						<div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.55rem", color: "var(--white-dim)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "1px" }}>
							Osnovan 2020.
						</div>
					</div>
				</div>

				{/* Nav links — hidden on mobile */}
				<div className="footer-links" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
					{navLinks.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							style={{ fontFamily: "var(--font-condensed)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--white-dim)", textDecoration: "none", transition: "color 0.2s ease" }}
							onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
							onMouseLeave={e => (e.currentTarget.style.color = "var(--white-dim)")}
						>
							{label}
						</a>
					))}
				</div>

				{/* Right: social + copyright */}
				<div
					className="footer-right"
					style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem" }}
				>
					<div style={{ display: "flex", gap: "0.75rem" }}>
						{socialLinks.map(s => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={s.label}
								style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", border: "1px solid var(--border)", color: "var(--white-dim)", textDecoration: "none", transition: "color 0.2s ease, border-color 0.2s ease" }}
								onMouseEnter={e => { e.currentTarget.style.color = "var(--red)"; e.currentTarget.style.borderColor = "rgba(192,57,43,0.4)"; }}
								onMouseLeave={e => { e.currentTarget.style.color = "var(--white-dim)"; e.currentTarget.style.borderColor = "var(--border)"; }}
							>
								{s.icon}
							</a>
						))}
					</div>
					<div style={{ fontFamily: "var(--font-condensed)", fontSize: "0.72rem", letterSpacing: "0.12em", color: "var(--white-dim)", textAlign: "right" }}>
						<div>Laktaši, Republika Srpska, BiH</div>
						<div style={{ marginTop: "0.2rem", opacity: 0.6 }}>© 2026 KBK Laktaši</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
