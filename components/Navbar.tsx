"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  
  { href: "/",    label: "Beranda" },
  { href: "/about",    label: "Tentang" },
  { href: "/services", label: "Layanan" },
  { href: "/workflow", label: "Alur Kerja" },
  { href: "/catalog",  label: "Katalog" },
  { href: "/contact",  label: "Kontak" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [inkStyle,  setInkStyle]  = useState({ left: 0, width: 0, opacity: 0 });
  const navRef   = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  // Scroll listener
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close drawer on route change (backup)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Ink underline animation
  function handleLinkEnter(i: number) {
    const el  = linkRefs.current[i];
    const nav = navRef.current;
    if (!el || !nav) return;
    const elRect  = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    setInkStyle({ left: elRect.left - navRect.left, width: elRect.width, opacity: 1 });
  }
  function handleNavLeave() {
    setInkStyle(s => ({ ...s, opacity: 0 }));
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  // ── Close drawer — called directly on every mobile link click
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <style>{`
        .nb {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background .35s ease, box-shadow .35s ease;
        }
        .nb--scrolled {
          background: rgba(240,244,248,0.93);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.07), 0 4px 30px rgba(0,0,0,0.07);
        }
        .nb__inner {
          display: flex; align-items: center;
          height: 72px; gap: 0;
        }

        /* ── Logo ── */
        .nb__logo {
          display: flex; align-items: center; gap: 11px;
          text-decoration: none; flex-shrink: 0;
          margin-right: auto; padding: 8px 0;
        }
        .nb__logo-mark {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  object-fit: contain;
  transition: transform .2s, opacity .2s;
}
.nb__logo:hover .nb__logo-mark {
  transform: translateY(-1px);
  opacity: 0.85;
}
        .nb__logo-text  { display: flex; flex-direction: column; line-height: 1; }
        .nb__logo-name  {
          font-family: var(--font-display); font-size: 17px;
          font-weight: 700; letter-spacing: .1em; color: var(--white);
        }
        .nb__logo-sub   {
          font-size: 7.5px; font-weight: 600; letter-spacing: .2em;
          text-transform: uppercase; color: var(--blue-500); margin-top: 2px;
        }

        /* ── Desktop nav ── */
        .nb__nav {
          display: flex; align-items: center; gap: 2px; position: relative;
        }
        .nb__ink {
          position: absolute; bottom: -2px; height: 2px;
          background: var(--electric); border-radius: 2px; pointer-events: none;
          transition: left .25s cubic-bezier(.4,0,.2,1),
                      width .25s cubic-bezier(.4,0,.2,1), opacity .2s;
        }
        .nb__link {
          font-family: var(--font-body); font-size: 13.5px; font-weight: 500;
          color: var(--gray-200); text-decoration: none;
          padding: 8px 14px; border-radius: 8px; letter-spacing: .02em;
          white-space: nowrap; position: relative;
          transition: color .2s, background .2s;
        }
        .nb__link:hover { color: var(--white); }
        .nb__link--active {
          color: var(--electric-dark) !important; font-weight: 600;
        }
        .nb__link--active::after {
          content: ''; position: absolute;
          bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--electric);
        }
        .nb__pipe {
          width: 1px; height: 20px; background: var(--navy-600);
          margin: 0 14px; flex-shrink: 0;
        }

        /* ── Desktop CTA ── */
        .nb__cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          color: #fff !important; text-decoration: none;
          padding: 9px 22px; background: var(--electric);
          border-radius: 9px; letter-spacing: .02em; white-space: nowrap;
          box-shadow: 0 2px 10px rgba(0,115,204,.22), inset 0 1px 0 rgba(255,255,255,.14);
          transition: background .2s, transform .2s, box-shadow .2s; flex-shrink: 0;
        }
        .nb__cta:hover {
          background: var(--electric-hover); transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,115,204,.32), inset 0 1px 0 rgba(255,255,255,.14);
        }
        .nb__cta:active { transform: translateY(0); }
        .nb__cta svg { transition: transform .2s; }
        .nb__cta:hover svg { transform: translateX(3px); }

        /* ── Burger ── */
        .nb__burger {
          display: none; flex-direction: column; justify-content: center;
          align-items: center; gap: 5px; width: 40px; height: 40px;
          background: rgba(255,255,255,.7); border: 1px solid var(--navy-600);
          border-radius: 9px; cursor: pointer; padding: 0; flex-shrink: 0;
          transition: background .2s;
        }
        .nb__burger:hover { background: #fff; }
        .nb__burger span {
          display: block; width: 18px; height: 1.5px;
          background: var(--gray-100); border-radius: 2px;
          transition: transform .3s ease, opacity .3s ease, width .3s ease;
          transform-origin: center;
        }
        .nb__burger--open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nb__burger--open span:nth-child(2) { opacity: 0; width: 0; }
        .nb__burger--open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .nb__drawer {
          display: none;
          position: fixed; top: 72px; left: 0; right: 0; bottom: 0;
          background: rgba(240,244,248,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          flex-direction: column; padding: 24px 24px 48px;
          overflow-y: auto; border-top: 1px solid var(--navy-600);
          animation: nb-down .22s ease forwards;
          z-index: 99;
        }
        .nb__drawer--open { display: flex; }

        @keyframes nb-down {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Mobile links */
        .nb__m-links {
          display: flex; flex-direction: column; gap: 2px; margin-bottom: 24px;
        }
        .nb__m-link {
          display: flex; align-items: center; justify-content: space-between;
          font-family: var(--font-body); font-size: 17px; font-weight: 500;
          color: var(--gray-100); text-decoration: none;
          padding: 15px 16px; border-radius: 10px; letter-spacing: .01em;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: background .15s, color .15s;
          /* Ensure full-width tap target */
          -webkit-tap-highlight-color: transparent;
        }
        .nb__m-link:last-child { border-bottom: none; }
        .nb__m-link:hover,
        .nb__m-link:active { background: rgba(0,115,204,.07); color: var(--electric-dark); }
        .nb__m-link--active {
          background: rgba(0,115,204,.06);
          color: var(--electric-dark) !important;
          font-weight: 600;
        }
        .nb__m-link svg { opacity: 0; transition: opacity .15s, transform .15s; }
        .nb__m-link:hover svg, .nb__m-link--active svg {
          opacity: 1; transform: translateX(3px);
        }

        /* Mobile CTA */
        .nb__m-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
          color: #fff !important; text-decoration: none;
          padding: 15px 28px; background: var(--electric); border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,115,204,.28);
          transition: background .2s, transform .15s;
          -webkit-tap-highlight-color: transparent;
        }
        .nb__m-cta:active { transform: scale(0.98); background: var(--electric-dark); }

        /* Mobile footer info */
        .nb__m-footer {
          margin-top: auto; padding-top: 28px;
          border-top: 1px solid var(--navy-600);
          display: flex; flex-direction: column; gap: 4px;
        }
        .nb__m-footer-label {
          font-size: 10px; font-weight: 700; letter-spacing: .15em;
          text-transform: uppercase; color: var(--gray-400); margin-bottom: 4px;
        }
        .nb__m-footer-val { font-size: 13.5px; color: var(--gray-200); }

        /* Responsive breakpoint */
        @media (max-width: 860px) {
          .nb__nav, .nb__pipe { display: none; }
          .nb__burger { display: flex; }
        }
      `}</style>

      {/* ── Navbar bar ── */}
      <header className={`nb ${scrolled ? "nb--scrolled" : ""}`}>
        <div className="nb__inner container">

          {/* Logo */}
<Link href="/" className="nb__logo" onClick={closeMenu}>
  <img
    src="/logoAxioma1.png"
    alt="Axioma Logo"
    width={38}
    height={38}
    className="nb__logo-mark"
  />
  <div className="nb__logo-text">
    <span className="nb__logo-name">AXIOMA</span>
    <span className="nb__logo-sub">Data Solutions</span>
  </div>
</Link>

          {/* Desktop nav */}
          <nav ref={navRef} className="nb__nav" onMouseLeave={handleNavLeave}>
            <span className="nb__ink" style={{
              left: inkStyle.left, width: inkStyle.width, opacity: inkStyle.opacity,
            }}/>
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={el => { linkRefs.current[i] = el; }}
                className={`nb__link ${isActive(link.href) ? "nb__link--active" : ""}`}
                onMouseEnter={() => handleLinkEnter(i)}
              >
                {link.label}
              </Link>
            ))}
            <div className="nb__pipe"/>
            <Link href="/contact" className="nb__cta">
              Konsultasi Gratis
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </nav>

          {/* Burger button */}
          <button
            className={`nb__burger ${menuOpen ? "nb__burger--open" : ""}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            <span/><span/><span/>
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={`nb__drawer ${menuOpen ? "nb__drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        {/* Nav links — onClick={closeMenu} on every single link */}
        <div className="nb__m-links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nb__m-link ${isActive(link.href) ? "nb__m-link--active" : ""}`}
              onClick={closeMenu}   /* ← key fix: close drawer immediately */
            >
              {link.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="var(--electric)"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="nb__m-cta"
          onClick={closeMenu}   /* ← same fix here */
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4.5A1.5 1.5 0 013.5 3h9A1.5 1.5 0 0114 4.5v7A1.5 1.5 0 0112.5 13h-9A1.5 1.5 0 012 11.5v-7z"
              stroke="currentColor" strokeWidth="1.3"/>
            <path d="M2 5l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          Konsultasi Gratis
        </Link>

        {/* Footer info */}
        <div className="nb__m-footer">
          <span className="nb__m-footer-label">Hubungi Kami</span>
          <span className="nb__m-footer-val">info@axiomadata.id</span>
          <span className="nb__m-footer-val">+62 812-xxxx-xxxx</span>
        </div>
      </div>
    </>
  );
}