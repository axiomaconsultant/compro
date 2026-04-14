const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L13.5 8.5H20L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L2 8.5H8.5L11 2Z"
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Akurat & Terstandar",
    desc: "Metodologi statistik sesuai standar akademik internasional dengan dokumentasi lengkap.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="var(--electric)" strokeWidth="1.4" />
        <path
          d="M8 11l2 2 4-4"
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Konsultasi Inklusif",
    desc: "Diskusi hasil dan interpretasi data sudah termasuk dalam setiap paket layanan.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="var(--electric)" strokeWidth="1.4" />
        <path
          d="M7 11h8M7 7h8M7 15h5"
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Deliverables Lengkap",
    desc: "Output, laporan naratif, dan file kerja tersedia untuk setiap layanan yang dipesan.",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="section-divider" />
      <div className="container">
        <div className="about__layout">
          <div className="about__left">
            <p className="section-label">Tentang Kami</p>
            <h2 className="section-title">
              Mitra Analitik
              <br />
              <em>Terpercaya</em> untuk
              <br />
              Penelitian Anda
            </h2>

            <p className="about__desc">
              Axioma Data Solutions adalah penyedia jasa pengolahan data statistik
              profesional yang melayani kebutuhan analisis kuantitatif bagi
              mahasiswa, peneliti, dan institusi akademik di Indonesia.
            </p>

            <p className="about__desc">
              Didirikan dengan misi membantu para akademisi menghasilkan penelitian
              berkualitas tinggi, Axioma menghadirkan layanan mulai dari analisis
              deskriptif dasar hingga Structural Equation Modeling (SEM) tingkat
              lanjut.
            </p>

            <div className="about__software-grid">
              {[
                "SPSS","SmartPLS","AMOS","R","Excel","Stata","Python","LISREL",
                "NVivo","Tableau","JASP","Mplus","Minitab","Statistica","EViews","SAS",
              ].map((s) => (
                <span key={s} className="about__sw-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="about__right">
            <div className="about__card-stack">
              <div className="about__bg-card" />
              <div className="about__main-card">
                <div className="about__card-header">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect width="36" height="36" rx="8" fill="rgba(0,170,255,0.1)" />
                    <rect x="5" y="24" width="6" height="8" rx="1.5" fill="var(--blue-400)" opacity="0.5" />
                    <rect x="13" y="18" width="6" height="14" rx="1.5" fill="var(--blue-400)" opacity="0.7" />
                    <rect x="21" y="10" width="6" height="22" rx="1.5" fill="var(--blue-300)" />
                    <path d="M7 26 L15 20 L23 14 L28 9" stroke="var(--electric)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
                    <circle cx="28" cy="9" r="2.5" fill="var(--electric)" />
                  </svg>
                  <div>
                    <div className="about__card-title">Axioma Data Solutions</div>
                    <div className="about__card-sub">Konsultan Statistik Profesional</div>
                  </div>
                </div>
                {pillars.map((p, i) => (
                  <div key={i} className="about__pillar">
                    <div className="about__pillar-icon">{p.icon}</div>
                    <div>
                      <div className="about__pillar-title">{p.title}</div>
                      <div className="about__pillar-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}