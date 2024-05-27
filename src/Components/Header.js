
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Naslovna from './Naslovna';
import Meni from './Meni';
import Rezervacija from './Rezervacija';
import Kafic from './Kafic';
import Specijaliteti from './Specijaliteti';
import './Header.css';
import slika1 from "../Slike/logo.PNG";
 
function Header() {
  return (
    <div>
      <Router>
        <div className="App-header">
          <div className="logo">
            <img src={slika1} />
          </div>
          <nav>
            <h2>Restoran Apetit</h2>
            <ul>
              <li><Link to="/">Naslovna</Link></li>
              <li><Link to="/meni">Jelovnik</Link></li>
              <li><Link to="/rezervacija">Rezervacija</Link></li>
              <li><Link to="/kafic">Kafić</Link></li>
              <li><Link to="/specijaliteti">Specijaliteti</Link></li>
            </ul>
          </nav>
          <div className="petraBucan">
            <p>Petra Bućan</p>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Naslovna />} />
          <Route path="/meni" element={<Meni />} />
          <Route path="/rezervacija" element={<Rezervacija />} />
          <Route path="/kafic" element={<Kafic />} />
          <Route path="/specijaliteti" element={<Specijaliteti />} />

        </Routes>
      </Router>
    </div>
  );
}
 
export default Header;