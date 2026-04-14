const terms = [
  { icon: "💬", text: "Konsultasi awal tidak dipungut biaya." },
  { icon: "💳", text: "Pembayaran bertahap: 50% di muka (DP) dan 50% setelah pekerjaan selesai." },
  { icon: "⏱️", text: "Estimasi waktu pengerjaan 2–5 hari kerja tergantung kompleksitas analisis." },
  { icon: "✏️", text: "Revisi minor (tanpa perubahan data atau metode) termasuk dalam harga layanan." },
  { icon: "🔒", text: "Data klien dijaga kerahasiaannya dan tidak digunakan untuk keperluan di luar pekerjaan yang disepakati." },
  { icon: "⚠️", text: "Pembatalan setelah pekerjaan dimulai tidak mendapatkan pengembalian DP." },
  { icon: "📋", text: "Untuk kebutuhan khusus di luar daftar layanan, konsultasikan terlebih dahulu untuk mendapatkan penawaran harga." },
];

export default function Terms() {
  return (
    <section className="terms section" id="terms">
      <div className="container">
        <div className="terms__layout">
          <div className="terms__left">
            <p className="section-label">Syarat &amp; Ketentuan</p>
            <h2 className="section-title">
              Transparan &amp;
              <br />
              <em>Berkeadilan</em>
            </h2>
            <p className="terms__desc">
              Kami percaya bahwa transparansi adalah fondasi kepercayaan. Berikut
              ketentuan layanan yang berlaku untuk semua klien Axioma.
            </p>
          </div>

          <div className="terms__right">
            <div className="terms__list">
              {terms.map((t, i) => (
                <div className="terms__item" key={i}>
                  <span className="terms__item-icon">{t.icon}</span>
                  <p className="terms__item-text">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}