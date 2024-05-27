
import './Specijaliteti.css';
import spe1 from '../Slike/spe1.PNG';
import spe2 from '../Slike/spe2.PNG';
import spe3 from '../Slike/spe3.PNG';
import { Link } from 'react-router-dom';


function Specijaliteti() {
    return (
        <div className="App">
            <h1>Specijaliteti kuće</h1>

            <h2>Sinjski arambašići</h2>
            <div className="desno">

                <p>
                    Iako su nalik na svima omiljenu sarmu, sinjski arambašići zapravo su manji svitci od listova kiselog ili svježeg kupusa nadjeveni mješavinom junećeg i svinjećeg mesa. Poznata sinjska uzrečica kaže da „kupus radi arambaše”, čime se ističe važnost dobroga kiselog kupusa u pripremi ovog tradicionalnog jela Cetinske krajine, dijela Dalmatinske zagore na čijem se području nalazi i sam grad Sinj. Listovi kupusa pune se dobro usitnjenim mesom koje se ne melje, nego se obrađuje s pomoću sjekirice, a u smjesu se dodaje i sitno narezana slanina, preprženi luk, usitnjeni češnjak i peršin te naribana korica limuna. Arambašići se kuhaju s komadima suhog mesa ili slanine te izrezanim listovima kiselog kupusa. Ovo zasitno i ukusno jelo predstavlja okrepljujući obrok kad krenu kišni jesenski dani, a još je slasnije ako se uz njega ispija lokalno crno vino.
                    <br />Klikom na sliku možete vidjeti naš jelovnik.
                </p>
                <Link to="/meni">
                    <img src={spe1} />
                </Link>
            </div>

            <h2>Komiška pogača</h2>
            <div className="livo">

                <p>
                    Komiška pogača aromatično je slano jelo koje svoje ime duguje malom mjestu na otoku Visu, šarmantnoj Komiži smještenoj podno brda Hum. Budući da je riječ o mjestu s dugom ribarskom tradicijom, ne iznenađuje činjenica da autohtono jelo ovoga mjesta u sebi sadrži usoljenu ribu, koja se priprema u ribarskim mjestima na našoj obali od pamtivijeka. Osnova je komiške pogače dizano tijesto koje u sebi skriva kombinaciju crvenog luka, svježih rajčica ili pelata, slane ribe poput inćuna ili srdela, začine te kapare po želji. Komiška pogača obično se reže na kocke, a zbog bogatog nadjeva sočna je i upečatljiva, a odličan je međuobrok ili čak glavno jelo. S obzirom na to da je riječ o slanom jelu, s njom se odlično slažu crna vina ili čak pivo, a upravo će vas kriška zasitne komiške pogače okrijepiti nakon dugog dana provedenog na suncu.
                    <br />Klikom na sliku možete vidjeti naš jelovnik.
                </p>
                <Link to="/meni">
                    <img src={spe2} />
                </Link>
            </div>


            <h2>Soparnik</h2>
            <div className="desno">

                <p>
                    Još jedan jednostavan, a vrijedan recept koji je upisan u registar zaštićenih oznaka zemljopisnog podrijetla poljički je soparnik, tanka pita od tijesta, blitve i luka koja se već stoljećima tradicionalno priprema u Dalmaciji. Soparnik je specijalitet iz kraja koji je nekada zauzimala Poljička republika, a obuhvaća teritorij oko planine Mosor istočno od Splita. Zbog jeftinih sastojaka koji se upotrebljavaju u njegovoj pripremi smatra se posnim jelom koje se često posluživalo na Veliki petak, Badnjak i uoči blagdana Svih svetih. Soparnik je slano jelo koje se peče na otvorenom ognjištu zvanom komin. Postavlja se u lim za pečenje stavljen izravno na žar i odozgo posut pepelom. Soparnik je gotov kada porumeni, a s njega se nakon vađenja iz komina uklanjao pepeo. Prije posluživanja soparnik se premazuje maslinovim uljem u koje je dodan protisnuti češnjak za dodatnu aromu i slast.
                    <br />Klikom na sliku otvorit će vam se video koji govori o soparniku.
                </p>
                <Link to="https://www.youtube.com/watch?v=_3QVDkd80fA">
                    <img src={spe3} />
                </Link>
            </div>
        </div>
    );
}

export default Specijaliteti;


