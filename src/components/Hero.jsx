import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const data = [
    {
      title: "Kenapa Messi Beri Penalti ke Otamendi di Argentina vs Zambia?",
      desc: "Lionel Messi secara mengejutkan memberikan eksekusi penalti kepada Nicolas Otamendi saat Argentina membantai Zambia",
      image: "/images/argentina.png",
      date: "01/04/2026",
      link: "https://www.cnnindonesia.com/olahraga",
    },
    {
      title: "Pasar Asia Menguat, Trump Optimistis Akhiri Peran Iran",
      desc: "Saham dan obligasi menguat di sesi awal perdagangan Asia, Rabu (1/4), setelah Presiden AS Donald Trump optimistis akan mengakhiri perang 2-3 minggu ke depan.",
      image: "/images/trump.jpg",
      date: "01/04/2026",
      link: "https://www.cnnindonesia.com/ekonomi",
    },
    {
      title: "10 Perkembangan Teknologi AI Semakin Pesat",
      desc: "AI berkembang pesat dan digunakan di berbagai sektor.",
      image: "/images/Ai.jpg",
      date: "26/12/2024",
      link: "https://www.kompas.com/tech/read/2024/12/26/140000565/10-teknologi-ai-yang-paling-banyak-digunakan-di-tahun-2024",
    },
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const item = data[index];

  return (
    <div className="hero">
      {/* LEFT */}
      <div className="hero-left">
        <span className="tag">Headline</span>

        <h1>{item.title}</h1>

        <p className="desc">{item.desc}</p>

        <small className="date">{item.date}</small>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Baca Selengkapnya →
        </a>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <img src={item.image} alt="" />
      </div>

      {/* NAV */}
      <div className="nav">
        <button onClick={prev}>‹</button>
        <span>
          {index + 1} dari {data.length}
        </span>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
}
