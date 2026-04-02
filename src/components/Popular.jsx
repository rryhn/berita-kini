import { useEffect, useState } from "react";
import axios from "axios";
import "./Popular.css";

export default function Popular() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // 🔥 tambahan

  useEffect(() => {
    const dummy = [
      {
        title: "Berita Nasional Menarik Hari Ini",
        thumbnail: "https://picsum.photos/200/150?1",
        date: "24/07/2026",
        category: "Nasional",
      },
      {
        title: "Ekonomi Indonesia Mengalami Perubahan",
        thumbnail: "https://picsum.photos/200/150?2",
        date: "24/07/2026",
        category: "Ekonomi",
      },
      {
        title: "Teknologi AI Semakin Berkembang Pesat",
        thumbnail: "https://picsum.photos/200/150?3",
        date: "24/07/2026",
        category: "Teknologi",
      },
    ];

    axios
      .get("https://berita-indo-api-next.vercel.app/api/cnn-news/nasional")
      .then((res) => {
        const posts = res?.data?.data?.posts;

        if (posts && posts.length > 0) {
          const formatted = posts.slice(0, 3).map((item) => ({
            title: item.title,
            thumbnail: item.thumbnail,
            date: item.pubDate || "24/07/2026",
            category: "Nasional",
          }));

          setData(formatted);
        } else {
          setData(dummy);
        }
      })
      .catch(() => {
        setData(dummy);
      });
  }, []);

  return (
    <div className="popular">
      <h2 className="title-section">Berita Terpopuler</h2>

      <div className="pop-list">
        {data.map((item, index) => (
          <div className="pop-card" key={index}>
            <div className="number">{index + 1}</div>

            <div className="image-wrapper">
              <img src={item.thumbnail} alt="news" />
            </div>

            <div className="content">
              <p className="title">{item.title}</p>

              <div className="meta">
                <span className="category">{item.category}</span>
                <span className="date">{item.date}</span>
              </div>

              {/* 🔥 BUTTON DETAIL */}
              <button
                className="btn-detail"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {activeIndex === index ? "Tutup" : "Detail Selengkapnya"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 DETAIL MUNCUL DI BAWAH */}
      {activeIndex !== null && data[activeIndex] && (
        <div className="detail-box">
          <h2>{data[activeIndex].title}</h2>

          <div className="meta">
            <span className="category">{data[activeIndex].category}</span>
            <span className="date">{data[activeIndex].date}</span>
          </div>

          <img src="/images/shadow.png" alt="detail" className="detail-img" />

          <p className="desc">
            Ini adalah isi dari berita yang ditampilkan sebagai detail. Kamu
            bisa mengganti ini dengan data asli dari API nanti.
          </p>

          {/* 🔥 KOMENTAR UI PROFESIONAL */}
          <div className="comments">
            <h3 className="comment-title">Komentar</h3>

            {/* INPUT KOMENTAR */}
            <div className="comment-input">
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="user"
                className="avatar"
              />
              <div className="input-box">
                <textarea placeholder="Apa yang ingin anda tanyakan?"></textarea>
                <button>Kirim</button>
              </div>
            </div>

            {/* LIST KOMENTAR */}
            <div className="comment-item">
              <img src="https://i.pravatar.cc/40?img=5" className="avatar" />

              <div className="comment-content">
                <div className="comment-header">
                  <b>UJANG YUSMEIDI S.P., M.Agr.</b>
                  <span>28 Mar 2024 11:15</span>
                </div>

                <p>
                  Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh?
                  Karena saya mau download ada konfirmasi bahwa TOTP aktivasi
                  salah. Bagaimana ya solusinya?
                </p>

                <span className="reply-btn">Balas</span>

                {/* BALASAN */}
                <div className="reply-item">
                  <img
                    src="https://i.pravatar.cc/40?img=8"
                    className="avatar"
                  />

                  <div className="comment-content">
                    <div className="comment-header">
                      <b>DINA RIKHA RIYANAWATI, S.Pd</b>
                      <span>28 Mar 2024 11:15</span>
                    </div>

                    <p>saya mengunduh sertifikatnya kok juga belum bisa</p>

                    <span className="reply-btn">Balas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
