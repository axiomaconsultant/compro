import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="18" width="5" height="8" rx="1" fill="var(--blue-400)" opacity="0.5" />
                  <rect x="9" y="13" width="5" height="13" rx="1" fill="var(--blue-400)" opacity="0.7" />
                  <rect x="16" y="7" width="5" height="19" rx="1" fill="var(--blue-300)" />
                  <path d="M4 20 L23 4" stroke="var(--electric)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
                  <circle cx="23" cy="4" r="2" fill="var(--electric)" />
                </svg>
                <div>
                  <div className="footer__logo-name">AXIOMA</div>
                  <div className="footer__logo-sub">DATA SOLUTIONS</div>
                </div>
              </div>
              <p className="footer__brand-desc">
                Layanan pengolahan data statistik profesional untuk mahasiswa, peneliti,
                dan institusi akademik di Indonesia.
              </p>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Layanan</div>
              <Link href="/services" className="footer__link">Analisis Deskriptif</Link>
              <Link href="/services" className="footer__link">Regresi &amp; Uji Asumsi</Link>
              <Link href="/services" className="footer__link">SEM-PLS</Link>
              <Link href="/services" className="footer__link">SEM-CB</Link>
              <Link href="/services" className="footer__link">Paket Tugas Akhir</Link>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Navigasi</div>
              <Link href="/about" className="footer__link">Tentang Kami</Link>
              <Link href="/workflow" className="footer__link">Alur Layanan</Link>
              <Link href="/catalog" className="footer__link">Katalog Lengkap</Link>
              <Link href="/terms" className="footer__link">Syarat &amp; Ketentuan</Link>
              <Link href="/contact" className="footer__link">Kontak</Link>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Kontak</div>
              <a href="mailto:axiomaconsultant@gmail.com" className="footer__link">
                axiomaconsultant@gmail.com
              </a>
              <a href="https://wa.me/628xxxxxxxxx" className="footer__link">
                WhatsApp: +62 8xx-xxxx-xxxx
              </a>
              <div className="footer__hours">
                <span>Senin – Jumat: 09.00 – 17.00</span>
                <span>Sabtu: 09.00 – 13.00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              © 2025 Axioma Data Solutions. Semua hak dilindungi.
            </p>
            <p className="footer__tagline">
              <span className="footer__dot" /> Layanan Aktif
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}