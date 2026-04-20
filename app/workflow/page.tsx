"use client";

import { use, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Konsultasi Awal",
    subtitle: "via WhatsApp",
    desc: "Ceritakan kebutuhan penelitian Anda. Kami akan mendiskusikan jenis analisis, variabel, skala data, dan metode statistik yang paling sesuai.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M17.5 12.5c0 .46-.1.9-.28 1.3-.19.4-.46.77-.8 1.06-.56.5-1.3.78-2.07.8H5.83l-3.33 2.5V5c0-.83.67-1.5 1.5-1.5h9.5c.83 0 1.5.67 1.5 1.5v7.5z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Konfirmasi & DP",
    subtitle: "Pembayaran 50%",
    desc: "Setelah scope pekerjaan disepakati, kami kirimkan ringkasan dan estimasi waktu. Pembayaran DP 50% sebagai konfirmasi resmi.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <rect
          x="2.5"
          y="5"
          width="15"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M2.5 8.5h15M6 12h2M9.5 12h3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Pengiriman Data",
    subtitle: "Excel / SPSS / CSV",
    desc: "Kirimkan data mentah beserta kuesioner atau instrumen penelitian. Kami menerima berbagai format file.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2v11M6 9l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 14v2a1 1 0 001 1h12a1 1 0 001-1v-2"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Pengolahan Data",
    subtitle: "Tim Axioma",
    desc: "Tim kami memproses data dari uji asumsi, analisis utama, hingga penyusunan tabel dan output hasil sesuai standar akademis.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle
          cx="10"
          cy="10"
          r="7.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M10 6v4l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Review & Revisi",
    subtitle: "Minor Gratis",
    desc: "Hasil analisis kami kirimkan untuk Anda review. Revisi minor sudah termasuk dalam layanan tanpa biaya tambahan.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10.5l5 5L17 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Pelunasan",
    subtitle: "Sisa 50%",
    desc: "Setelah hasil disetujui, tagihan pelunasan dikirimkan. Pembayaran dilakukan sebelum output final diserahkan.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle
          cx="10"
          cy="10"
          r="7.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M10 6.5v1.5M10 12v1.5M7.5 9.5a1.5 1.5 0 013 0c0 1.5-3 1.5-3 3a1.5 1.5 0 003 0"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Serah Terima",
    subtitle: "via Email",
    desc: "Output final, file kerja, dan laporan interpretasi dikirimkan langsung ke email Anda. Terorganisir dan siap digunakan.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <rect
          x="2.5"
          y="5"
          width="15"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M2.5 7.5L10 12l7.5-4.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10.5l4.5 4.5 7.5-9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Workflow() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    if (activeIdx < steps.length - 1) setActiveIdx((i) => i + 1);
  };

  const handlePrev = () => {
    if (activeIdx > 0) setActiveIdx((i) => i - 1);
  };

  const handleReset = () => setActiveIdx(0);

  return (
    <section className="workflow section" id="workflow">
      <div className="container">
        {/* ── Header ── */}
        <div className="workflow__header">
          <p className="section-label">Alur Layanan</p>
          <h2 className="section-title">
            Proses <em>Transparan</em>
            <br />
            dari Awal hingga Akhir
          </h2>
          <p className="workflow__sub">
            7 tahap yang jelas, komunikatif, dan terstruktur untuk memastikan
            hasil terbaik bagi penelitian Anda.
          </p>
        </div>

        {/* ── Progress dots ── */}
        <div className="workflow__progress">
          {steps.map((s, i) => (
            <button
              key={i}
              className={
                "workflow__dot" +
                (i === activeIdx ? " active" : "") +
                (i < activeIdx ? " done" : "")
              }
              onClick={() => setActiveIdx(i)}
              title={s.title}
              aria-label={`Langkah ${s.num}: ${s.title}`}
            />
          ))}
        </div>

        {/* ── Steps ── */}
        <div className="workflow__steps">
          {steps.map((step, i) => {
            const isDone = i < activeIdx;
            const isActive = i === activeIdx;

            return (
              <div
                className={
                  "workflow__step" +
                  (isActive ? " is-active" : "") +
                  (isDone ? " is-done" : "")
                }
                key={i}
                onClick={() => setActiveIdx(i)}
              >
                {/* Left: number + connector */}
                <div className="workflow__step-left">
                  <div className="workflow__step-num">
                    {isDone ? <CheckIcon /> : <span>{step.num}</span>}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="workflow__step-line" />
                  )}
                </div>

                {/* Right: card */}
                <div className="workflow__step-content">
                  <div className="workflow__step-card">
                    <div className="workflow__step-header">
                      <div className="workflow__step-header-left">
                        <div className="workflow__step-icon">{step.icon}</div>
                        <div className="workflow__step-title">{step.title}</div>
                      </div>
                      <div className="workflow__step-badge">
                        {step.subtitle}
                      </div>
                    </div>
                    <p className="workflow__step-desc">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Nav controls ── */}
        <div className="workflow__controls">
          <button
            className="workflow__btn"
            onClick={handlePrev}
            disabled={activeIdx === 0}
          >
            ← Sebelumnya
          </button>
          <button
            className="workflow__btn workflow__btn--primary"
            onClick={handleNext}
            disabled={activeIdx === steps.length - 1}
          >
            Lanjut →
          </button>
          <button className="workflow__btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
