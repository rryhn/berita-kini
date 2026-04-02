import "./Navbar.css";

export default function Navbar() {
  const menu = [
    "Beranda",
    "Terbaru",
    "Hiburan",
    "Gaya Hidup",
    "Olahraga",
    "Nasional",
    "Internasional",
  ];

  return (
    <div className="navbar">
      {/* LOGO */}
      <div className="logo">
        Berita <span>Kini</span>
      </div>

      {/* MENU */}
      <ul className="menu">
        {menu.map((item, index) => (
          <li key={index} className={index === 0 ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
