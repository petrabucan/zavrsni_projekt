import mogucnost1 from "../Slike/mogucnost1.PNG";
import mogucnost2 from "../Slike/mogucnost2.PNG";
import mogucnost3 from "../Slike/mogucnost3.PNG";
import mogucnost4 from "../Slike/mogucost4.PNG";
import mogucnost5 from "../Slike/mogucnost5.PNG";
import mogucnost6 from "../Slike/mogucnost6.PNG";
import './Naslovna.css';
import placanje1 from "../Slike/placanje1.PNG";
import placanje2 from "../Slike/placanje2.PNG";
import placanje3 from "../Slike/placanje3.PNG";
import placanje4 from "../Slike/placanje4.PNG";
import restoran1 from "../Slike/restoran1.PNG";
import restoran2 from "../Slike/restoran2.PNG";
import restoran3 from "../Slike/restoran3.PNG";
import restoran4 from "../Slike/restoran4.PNG";

export default function Naslovna() {
    return (
        <div className="App">
            <h1>Restoran Apetit</h1>
            <div className="razmak">
                <h2>O nama</h2>
                <p className="tekst">
                    Restoran Apetit je već godinama jedan od vodećih splitskih restorana u
                    izborima stručne gastronomske kritike i zadovoljnih posjetitelja.
                    Dugogodišnje obiteljsko iskustvo, izbor najboljih namirnica i čuvane
                    tajne pripreme stvorili su od Restorana Apetit kultno mjesto splitske i
                    hrvatske gastronomije. Veliki izbor inovativnih i tradicionalnih hladnih
                    i toplih predjela, s posebinim naglaskom na tjestenine, rižote, mesna i
                    riblja jela pružaju mogućnost uživanja i najzahtjevnijim sladokuscima.
                </p>
            </div>
            <div className="slike1">
                <img src={restoran1} />
                <img src={restoran2} />
            </div>


            <div className="razmak">
                <h2>Restoran na dobrom mjestu</h2>
                <p className="tekst">
                    Dopustite da vas razmazi naša mediteranska, međunarodna nebo hrvatska
                    kuhinja. Kušajte vrhunske delikatese i odlično lokalno jelo naših
                    iskusnih kuhara, kreirne s puno strasti. Na primjer, probajte svježa
                    jela od plodova mora i alkoholno piće. Za istinsko oduševljenje brinu se
                    naše raznovrsne tjestenine kao i naši božanstveni deserti između obroka
                    ili kao desert. Rado ćemo vas ugostiti na brunch, na ručak ili na večera
                    u lijepom ambijentu! Nudimo vam besplatni WiFi kako bi svugdje bili
                    dostupni. Imamo i odvojeni dio za sve pušače.
                </p>
            </div>

            <div className="mogucnosti">
                <h2>Naše usluge</h2>
                <table>
                    <tr>
                        <td>
                            <img src={mogucnost1} />
                            <p>Klimatizizacija</p>
                        </td>
                        <td><img src={mogucnost2} />
                            <p>Vanjski prostor</p>
                        </td>
                        <td>
                            <img src={mogucnost3} />
                            <p>Parking mjesta</p>
                        </td>
                        <td>
                            <img src={mogucnost4} />
                            <p>Prostor za pušače</p>
                        </td>
                        <td>
                            <img src={mogucnost5} />
                            <p>Dostava</p>
                        </td>
                        <td>
                            <img src={mogucnost6} />
                            <p>Besplatni WIFI</p>
                        </td>
                    </tr>
                </table>

            </div>


            <div className="razmak obojen" >
                <h2>Naša posvećenost</h2>
                <p className="tekst">
                    Uz našu posvećenost kvaliteti, u Apetitu se trudimo da svaki gost osjeti
                    posebnu pažnju i brigu. Naš tim stručnih konobara stoji vam na
                    raspolaganju kako bi vaše iskustvo bilo besprijekorno, prilagođavajući
                    se vašim željama i potrebama. Naš prostor odiše toplinom i elegancijom,
                    stvarajući ugodan ambijent koji poziva na opuštanje i uživanje. Bilo da
                    se odlučite za intimalnu večeru u našem elegantnom restoranu ili za
                    opušteno druženje na našoj prostranoj terasi, Apetit je mjesto gdje se
                    stvaraju nezaboravni trenuci. Uz svoju strast prema hrani i
                    gostoprimstvu, Apetit nije samo restoran - to je destinacija gdje se
                    stvaraju uspomene koje će trajati vječno. Dođite i istražite sve što
                    imamo za ponuditi, jer vaš apetit zaslužuje samo najbolje.
                </p>

            </div>
            <div className="slike1">
                <img src={restoran3} />
                <img src={restoran4} />
            </div>


            <div className="placanje">
                <h2>Načini plaćanja</h2>
                <table>
                    <tr>
                        <td>
                            <img src={placanje1} />
                            <p>Visa</p>
                        </td>
                        <td><img src={placanje2} />
                            <p>Diners Card</p>
                        </td>
                        <td>
                            <img src={placanje3} />
                            <p>Maestro card</p>
                        </td>
                        <td>
                            <img src={placanje4} />
                            <p>Gotovina</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    );
}
