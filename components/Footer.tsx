import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top gradient divider — matches navbar electric accent */}
      <div className="footer__accent-bar" />

      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">

            {/* Brand Column */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img
                  src="/logoAxioma1.png"
                  alt="Axioma Logo"
                  width={38}
                  height={38}
                  className="footer__logo-img"
                />
                <div className="footer__logo-text">
                  <div className="footer__logo-name">AXIOMA</div>
                  <div className="footer__logo-sub">DATA SOLUTIONS</div>
                </div>
              </div>
              <p className="footer__brand-desc">
                Layanan pengolahan data statistik profesional untuk mahasiswa, peneliti,
                dan institusi akademik di Indonesia.
              </p>
              <div className="footer__social">
                <a href="https://wa.me/62881026369090" className="footer__social-btn" aria-label="WhatsApp">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.527 5.845L.057 23.882l6.248-1.634A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.193-1.375l-.371-.222-3.853 1.007 1.03-3.75-.243-.386A9.934 9.934 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </a>
                <a href="mailto:axiomaconsultant@gmail.com" className="footer__social-btn" aria-label="Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Layanan Column */}
            <div className="footer__col">
              <div className="footer__col-header">
                <div className="footer__col-title">Layanan</div>
                <div className="footer__col-line" />
              </div>
              <nav className="footer__nav">
                {[
                  "Analisis Deskriptif",
                  "Regresi & Uji Asumsi",
                  "SEM-PLS",
                  "SEM-CB",
                  "Paket Tugas Akhir",
                ].map((item) => (
                  <Link key={item} href="/services" className="footer__link">
                    <span className="footer__link-dot" />
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Navigasi Column */}
            <div className="footer__col">
              <div className="footer__col-header">
                <div className="footer__col-title">Navigasi</div>
                <div className="footer__col-line" />
              </div>
              <nav className="footer__nav">
                {[
                  { href: "/about",    label: "Tentang Kami" },
                  { href: "/workflow", label: "Alur Layanan" },
                  { href: "/catalog",  label: "Katalog Lengkap" },
                  { href: "/terms",    label: "Syarat & Ketentuan" },
                  { href: "/contact",  label: "Kontak" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="footer__link">
                    <span className="footer__link-dot" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Kontak Column */}
            <div className="footer__col">
              <div className="footer__col-header">
                <div className="footer__col-title">Kontak</div>
                <div className="footer__col-line" />
              </div>
              <div className="footer__contact-list">
                <a href="mailto:axiomaconsultant@gmail.com" className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </span>
                  axiomaconsultant@gmail.com
                </a>
                <a href="https://wa.me/+62881026369090" className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </span>
                  +62881026369090
                </a>

                <div className="footer__hours-card">
                  <div className="footer__hours-title">Jam Operasional</div>
                  <div className="footer__hours-row">
                    <span className="footer__hours-day">Sen – Jum</span>
                    <span className="footer__hours-time">09.00 – 17.00</span>
                  </div>
                  <div className="footer__hours-row">
                    <span className="footer__hours-day">Sabtu</span>
                    <span className="footer__hours-time">09.00 – 13.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer__divider">
        <div className="container">
          <div className="footer__divider-line" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              © 2025 Axioma Data Solutions. Semua hak dilindungi.
            </p>
            <p className="footer__tagline">
              <span className="footer__dot" />
              <span>Layanan Aktif</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* ─── CSS Variables (aligned with Navbar) ─────────────────────────── */
        .footer {
          --electric:       #0073CC;
          --electric-dark:  #005fa8;
          --electric-hover: #0082e6;
          --navy-900:       #060e1c;
          --navy-800:       #0a1628;
          --navy-700:       #0f1f35;
          --navy-600:       #1a2e48;
          --navy-500:       #243c5a;
          --gray-100:       #e2e8f0;
          --gray-200:       #cbd5e1;
          --gray-400:       #94a3b8;
          --gray-500:       #64748b;
          --gray-600:       #475569;
          --white:          #f0f4f8;

          background: linear-gradient(180deg, var(--navy-800) 0%, var(--navy-900) 100%);
          color: var(--gray-400);
          font-family: var(--font-body, system-ui, sans-serif);
          position: relative;
          overflow: hidden;
        }

        /* Subtle radial glow matching navbar electric color */
        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 40% at 15% 0%, rgba(0,115,204,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 50% 35% at 85% 100%, rgba(0,115,204,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        /* ─── Accent bar — mirrors the electric blue ───────────────────────── */
        .footer__accent-bar {
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--electric) 25%,
            #38bdf8 50%,
            var(--electric) 75%,
            transparent 100%
          );
        }

        /* ─── Layout ─────────────────────────────────────────────────────── */
        .footer__top {
          padding: 3.5rem 0 2.5rem;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 3rem;
        }

        /* ─── Brand ──────────────────────────────────────────────────────── */
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 1.25rem;
          text-decoration: none;
        }

        .footer__logo-img {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .footer__logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer__logo-name {
          font-family: var(--font-display, Georgia, serif);
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--white);
        }

        .footer__logo-sub {
          font-size: 7.5px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--electric);
          margin-top: 3px;
        }

        .footer__brand-desc {
          font-size: 0.825rem;
          line-height: 1.75;
          color: var(--gray-500);
          margin: 0 0 1.25rem;
          max-width: 280px;
        }

        /* Social buttons — styled like mini CTAs */
        .footer__social {
          display: flex;
          gap: 0.5rem;
        }

        .footer__social-btn {
          width: 34px;
          height: 34px;
          border: 1px solid var(--navy-600);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-400);
          background: rgba(255,255,255,0.03);
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }

        .footer__social-btn:hover {
          background: rgba(0,115,204,0.12);
          border-color: var(--electric);
          color: var(--electric-hover);
          transform: translateY(-2px);
        }

        /* ─── Columns ────────────────────────────────────────────────────── */
        .footer__col-header {
          margin-bottom: 1.125rem;
        }

        .footer__col-title {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gray-200);
          margin-bottom: 0.5rem;
        }

        /* Short electric underline — same visual language as nb__ink */
        .footer__col-line {
          height: 2px;
          width: 1.75rem;
          background: var(--electric);
          border-radius: 2px;
        }

        .footer__nav {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .footer__link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--gray-500);
          text-decoration: none;
          padding: 0.4rem 0;
          letter-spacing: 0.01em;
          transition: color 0.2s, gap 0.2s;
        }

        .footer__link:hover {
          color: var(--gray-200);
          gap: 0.85rem;
        }

        .footer__link:hover .footer__link-dot {
          background: var(--electric);
          transform: scale(1.4);
        }

        .footer__link-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--navy-500);
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }

        /* ─── Contact ────────────────────────────────────────────────────── */
        .footer__contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 13px;
          color: var(--gray-500);
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.2s;
        }

        .footer__contact-item:hover {
          color: var(--gray-200);
        }

        .footer__contact-icon {
          width: 22px;
          height: 22px;
          background: rgba(0,115,204,0.1);
          border: 1px solid rgba(0,115,204,0.2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--electric);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .footer__hours-card {
          margin-top: 0.375rem;
          padding: 0.75rem 0.875rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--navy-600);
          border-radius: 10px;
        }

        .footer__hours-title {
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--electric);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .footer__hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.2rem 0;
          font-size: 12px;
        }

        .footer__hours-day  { color: var(--gray-500); }
        .footer__hours-time { color: var(--gray-400); font-weight: 500; }

        /* ─── Divider ────────────────────────────────────────────────────── */
        .footer__divider-line {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--navy-600) 20%,
            var(--navy-600) 80%,
            transparent 100%
          );
        }

        /* ─── Bottom bar ─────────────────────────────────────────────────── */
        .footer__bottom {
          padding: 1.125rem 0;
          position: relative;
        }

        .footer__bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .footer__copy {
          font-size: 12px;
          color: var(--gray-600);
          margin: 0;
          letter-spacing: 0.02em;
        }

        .footer__tagline {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-600);
          margin: 0;
        }

        /* Pulsing green dot — same as status indicators */
        .footer__dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(34,197,94,0.6);
          animation: footer-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes footer-pulse {
          0%, 100% { box-shadow: 0 0 6px rgba(34,197,94,0.6); }
          50%       { box-shadow: 0 0 12px rgba(34,197,94,0.9); }
        }

        /* ─── Responsive ─────────────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .footer__grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.25rem;
          }
          .footer__brand {
            grid-column: 1 / -1;
          }
          .footer__brand-desc { max-width: 100%; }
        }

        @media (max-width: 640px) {
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
          .footer__brand { grid-column: auto; }
          .footer__bottom-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}