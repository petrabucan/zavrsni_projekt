import kafic1 from "../Slike/kafic1.PNG";
import kafic2 from "../Slike/kafic2.PNG";
import kafic3 from "../Slike/kafic3.PNG";
import kafic4 from "../Slike/kafic4.PNG";
import kafic5 from "../Slike/kafic5.PNG";
import kafic6 from "../Slike/kafic6.PNG";
import './Kafic.css';



export default function Kafic() {
  return (
    <div className="App">

      <div className="tekst">
      <h1>Apetit Caffe Bar</h1>
      <p>
        U skladu našrg restorana nalazi se i kafić, očaravajući kutak gdje se miris svježe mljevene
        kave miješa s veselim žamorom i opuštenom atmosferom. Naš kafić je
        idealno mjesto za vaše jutarnje kofeinsko buđenje, opuštajući predah
        tijekom dana ili uživanje u osvježavajućim napicima nakon ukusnog
        obroka. Naša strast prema kavi vidljiva je u svakom gutljaju. Naši
        baristi stručno pripremaju širok spektar kava, od klasičnih espresso i
        cappuccino napitaka do osvježavajućih ledenih kava i bogatih lattea.
        Svaka šalica kave izrađena je s pažnjom i ljubavlju, pružajući vam
        neponovljivu kulinarsku avanturu.
      </p>

      </div>
      
      <div className="slike1">
        <img src={kafic1} />
        <img src={kafic2} />
      </div>


      <div className="obojen">
        <h2>Ponuda</h2>
        <p>Osim kave, naš kafić nudi i širok
          izbor osvježavajućih pića, kao što su svježe cijeđeni sokovi, voćni
          smoothieji i hladni napici koji će vas osvježiti u toplim ljetnim
          danima. Za ljubitelje čaja, nudimo bogatu selekciju aromatičnih čajeva
          koji će vas zagrijati u hladnijim mjesecima. Uz to, naš kafić je
          savršeno mjesto za druženje s prijateljima ili jednostavno za opuštanje
          sami sa sobom uz dobru knjigu. Uživajte u udobnoj atmosferi,
          prijateljskom osoblju i širokoj paleti ukusnih napitaka dok se
          prepustite ritmu gradskog života. Dođite i posjetite nas u našem kafiću,
          gdje se dobar osjećaj nikada ne završava. Vaša omiljena šalica kave čeka
          vas već danas!</p>
      </div>
      <div className="slike2">
        <img src={kafic3} />
        <img src={kafic4} />
        <img src={kafic5} />
        <img src={kafic6} />
      </div>
    </div>



  );
}
