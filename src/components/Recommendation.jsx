import { useEffect, useState } from "react";
import axios from "axios";

export default function Recommendation() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const perPage = 8;

  useEffect(() => {
    const dummy = Array.from({ length: 40 }, (_, i) => ({
      title: "Berita Menarik " + (i + 1),
      thumbnail: `https://picsum.photos/300/200?random=${i}`,
      date: new Date().toLocaleDateString(), // 🔥 tanggal dummy
    }));

    axios
      .get("https://berita-indo-api-next.vercel.app/api/cnn-news/teknologi")
      .then((res) => {
        const posts = res?.data?.data?.posts;

        if (posts && posts.length > 0) {
          let fullData = [];
          while (fullData.length < 40) {
            fullData = [...fullData, ...posts];
          }

          // 🔥 tambahkan tanggal
          const formatted = fullData.slice(0, 40).map((item) => ({
            ...item,
            date: item.pubDate || new Date().toLocaleDateString(),
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

  // 🔥 FILTER SEARCH
  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  return (
    <div style={{ padding: "40px" }}>
      {/* HEADER: KIRI + KANAN */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Rekomendasi Untuk Anda</h2>
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari berita..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset ke halaman 1
          }}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {current.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.thumbnail}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "10px" }}>
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                {item.title}
              </p>

              {/* 🔥 TANGGAL */}
              <small style={{ color: "#777" }}>{item.date}</small>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ‹
        </button>

        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => setPage(num)}
            style={{
              padding: "8px 12px",
              background: page === num ? "#007bff" : "#eee",
              color: page === num ? "#fff" : "#000",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {num}
          </span>
        ))}

        <button onClick={() => setPage(page + 1)} disabled={page === 5}>
          ›
        </button>
      </div>
    </div>
  );
}
