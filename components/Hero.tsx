import Link from "next/link";

const stats = [
  { value: "30+", label: "Layanan Analisis" },
  { value: "15+", label: "Software Statistik" },
  { value: "2–5", label: "Hari Pengerjaan" },
  { value: "100%", label: "Kerahasiaan Data" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__noise" />
      </div>

      <div className="hero__chart-deco" aria-hidden="true">
        <div className="chart-bar" style={{ height: "40%", animationDelay: "0s" }} />
        <div className="chart-bar" style={{ height: "60%", animationDelay: "0.15s" }} />
        <div className="chart-bar" style={{ height: "45%", animationDelay: "0.3s" }} />
        <div className="chart-bar" style={{ height: "80%", animationDelay: "0.45s" }} />
        <div className="chart-bar" style={{ height: "55%", animationDelay: "0.6s" }} />
        <div className="chart-bar" style={{ height: "100%", animationDelay: "0.75s" }} />
        <div className="chart-line">
          <svg viewBox="0 0 300 100" preserveAspectRatio="none">
            <polyline
              points="0,80 50,65 100,70 150,40 200,50 250,20 300,10"
              fill="none"
              stroke="var(--electric)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="400"
              strokeDashoffset="400"
              className="chart-line-path"
            />
          </svg>
        </div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow animate-fadeUp delay-1">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Layanan Profesional Aktif
            </span>
          </div>

          <h1 className="hero__title animate-fadeUp delay-2">
            Pengolahan Data
            <br />
            <em>Statistik</em> Profesional
            <br />
            untuk Penelitian Anda
          </h1>

          <p className="hero__desc animate-fadeUp delay-3">
            Axioma Data Solutions menghadirkan layanan analisis kuantitatif dan
            kualitatif tingkat lanjut bagi mahasiswa, peneliti, dan institusi
            akademik di Indonesia. Akurat, terstandar, dan tepat waktu.
          </p>

          <div className="hero__software animate-fadeUp delay-4">
            {["SPSS", "SmartPLS", "AMOS", "R", "Stata", "Python", "NVivo", "Tableau", "EViews"].map((s) => (
              <span key={s} className="hero__software-tag">{s}</span>
            ))}
          </div>

          <div className="hero__actions animate-fadeUp delay-5">
            <Link href="/catalog" className="btn btn--primary">
              Lihat Katalog Layanan
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__stats-bar">
        <div className="container">
          <div className="hero__stats">
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