"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
	{ label: "O Klubu", href: "#o-klubu" },
	{ label: "Šampioni", href: "#sampioni" },
	{ label: "Rezultati", href: "#rezultati" },
	{ label: "Trener", href: "#trener" },
];

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 100,
				background: scrolled ? "rgba(6,6,6,0.93)" : "transparent",
				backdropFilter: scrolled ? "blur(14px)" : "none",
				borderBottom: scrolled
					? "1px solid rgba(232,224,208,0.07)"
					: "1px solid transparent",
				transition:
					"background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
			}}
		>
			<div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						height: "68px",
					}}
				>
					{/* Logo */}
					<a
						href="#"
						style={{
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
							gap: "0.7rem",
						}}
					>
						<img
							src="/kbkl_logo.png"
							alt="KBK Laktaši"
							style={{ height: "44px", width: "auto", display: "block" }}
						/>
						<div>
							<div
								style={{
									fontFamily: "var(--font-display)",
									fontSize: "1.25rem",
									color: "var(--white)",
									lineHeight: 1,
									letterSpacing: "0.08em",
								}}
							>
								KBK LAKTAŠI
							</div>
							<div
								style={{
									fontFamily: "var(--font-condensed)",
									fontSize: "0.6rem",
									color: "var(--white-dim)",
									letterSpacing: "0.22em",
									textTransform: "uppercase",
									marginTop: "2px",
								}}
							>
								Kik Boks Klub
							</div>
						</div>
					</a>

					{/* Desktop links */}
					<div
						style={{ gap: "2.5rem", alignItems: "center" }}
						className="hidden md:flex"
					>
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								style={{
									fontFamily: "var(--font-condensed)",
									fontSize: "0.9rem",
									fontWeight: 600,
									letterSpacing: "0.14em",
									textTransform: "uppercase",
									color: "var(--white-dim)",
									textDecoration: "none",
									transition: "color 0.2s ease",
									position: "relative",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color = "var(--white)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color = "var(--white-dim)")
								}
							>
								{l.label}
							</a>
						))}
						<a
							href="#kontakt"
							className="btn-punch"
							style={{ padding: "0.6rem 1.6rem", fontSize: "0.82rem" }}
						>
							Kontakt
						</a>
					</div>

					{/* Mobile menu btn */}
					<button
						className="md:hidden"
						onClick={() => setOpen(!open)}
						style={{
							background: "none",
							border: "none",
							color: "var(--white)",
							cursor: "pointer",
							padding: "0.25rem",
						}}
					>
						{open ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div
					style={{
						background: "rgba(6,6,6,0.98)",
						borderTop: "1px solid var(--border)",
						padding: "1.5rem 2rem 2rem",
					}}
				>
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							onClick={() => setOpen(false)}
							style={{
								display: "block",
								fontFamily: "var(--font-condensed)",
								fontSize: "1.4rem",
								fontWeight: 700,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								color: "var(--white)",
								textDecoration: "none",
								padding: "0.7rem 0",
								borderBottom: "1px solid var(--border)",
							}}
						>
							{l.label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
