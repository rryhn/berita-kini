import "./Footer.css";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* KIRI */}
        <div className="footer-left">
          <div className="logo">
            Berita <span>Kini</span>
          </div>

          <p className="copyright">© 2026 Berita Kini. All Rights Reserved.</p>

          <p className="follow">Ikuti Kami</p>

          {/* 🔥 ICON SUDAH DIGANTI */}
          <div className="socials">
            <div className="icon">
              <FaYoutube />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaFacebookF />
            </div>
          </div>
        </div>

        {/* TELUSURI */}
        <div className="footer-col">
          <h4>Telusuri</h4>
          <ul>
            <li>Beranda</li>
            <li>Terbaru</li>
            <li>Hiburan</li>
            <li>Olahraga</li>
            <li>Nasional</li>
            <li>Internasional</li>
          </ul>
        </div>

        {/* BANTUAN */}
        <div className="footer-col">
          <h4>Bantuan</h4>
          <ul>
            <li>Kontak Kami</li>
            <li>Laporan Pembajakan</li>
            <li>Kebijakan</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-col">
          <h4>Berlangganan Berita Terbaru</h4>

          <div className="subscribe">
            <input type="text" placeholder="Masukkan email" />
            <button>➤</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
