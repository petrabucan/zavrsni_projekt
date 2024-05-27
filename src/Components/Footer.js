import './Footer.css';
import mreza1 from "../Slike/drustvenam1.PNG";
import mreza2 from "../Slike/drustvenam2.PNG";
import mreza3 from "../Slike/drustvenam3.PNG";

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-sadrzaj">
        <p>&copy; 2024 Apetit. Sva prava pridržana.</p>

        <div className="social-media">
          <div className="item">
            <img src={mreza1} alt="Instagram" />
            <p>Instagram</p>
          </div>
          <div className="item">
            <img src={mreza2} alt="Facebook" />
            <p>Facebook</p>
          </div>
          <div className="item">
            <img src={mreza3} alt="Tripadvisor" />
            <p>Tripadvisor</p>
          </div>
        </div>

        <p>Kontakt broj: 091 345 6693</p>
        <p>Mail: restoran.apetit@gmail.com</p>
        <p>Lokacija: Ulica Braće Radić 1</p>
        <p>Radno vrijeme: Pon-Ned: 8.00-23.00</p>
      </div>
    </footer>
  );
}

export default Footer;
