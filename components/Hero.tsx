import Link from "next/link";

const stats = [
  { value: "30+", label: "Layanan Analisis" },
  { value: "15+", label: "Software Statistik" },
  { value: "2–5", label: "Hari Pengerjaan" },
  { value: "100%", label: "Kerahasiaan Data" },
];

const SOFTWARE = ["SPSS","SmartPLS","AMOS","R","Stata","Python","NVivo","Tableau","EViews"];

const BAR_HEIGHTS = [40, 60, 45, 80, 55, 100];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__wrap">
        {/* ── LEFT ── */}
        <div className="hero__left">
          <div className="hero__eyebrow animate-fadeUp delay-1">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Layanan Profesional Aktif
            </span>
          </div>

          <h1 className="hero__title animate-fadeUp delay-2">
            Pengolahan Data<br />
            <em>Statistik</em> Profesional<br />
            untuk Penelitian Anda
          </h1>

          <p className="hero__desc animate-fadeUp delay-3">
            Axioma Data Solutions menghadirkan layanan analisis kuantitatif
            dan kualitatif tingkat lanjut bagi mahasiswa, peneliti, dan
            institusi akademik di Indonesia. Akurat, terstandar, dan tepat waktu.
          </p>

          <div className="hero__software animate-fadeUp delay-4">
            {SOFTWARE.map((s) => (
              <span key={s} className="hero__software-tag">{s}</span>
            ))}
          </div>

          <div className="hero__actions animate-fadeUp delay-5">
            <Link href="/catalog" className="btn btn--primary">
              Lihat Katalog Layanan
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Konsultasi Gratis
            </Link>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero__right animate-fadeUp delay-3">
          {/* Chart Card */}
          <div className="hero__chart-card">
            <p className="hero__chart-label">Tingkat Kepuasan Klien</p>
            <div className="hero__bars">
              {BAR_HEIGHTS.map((h, i) => (
                <div key={i} className="hero__bar-wrap">
                  <div
                    className={`hero__bar-fill${i === 3 || i === 5 ? " hero__bar-fill--accent" : ""}`}
                    style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
                  />
                </div>
              ))}
            </div>
            <div className="hero__chart-line">
              <svg viewBox="0 0 340 50" width="100%" height="50">
                <polyline
                  points="0,45 56,36 112,40 168,20 224,28 280,10 340,5"
                  fill="none" stroke="var(--electric)" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="chart-line-path"
                />
                <circle cx="340" cy="5" r="3" fill="var(--blue-300)" />
              </svg>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="hero__stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}