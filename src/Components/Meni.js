
import MeniPodaci from './MeniPodaci';
import "./Meni.css";


function Menu (){
    return (
    <div className="menu">
      <h1>Naš jelovnik</h1>

      <h2>Hladna predjela</h2>
      <MeniPodaci ime="Dalmatinski pršut" opis = "" cjena="9.00 " />
      <MeniPodaci ime="Paški sir"  opis = ""cjena="9.00" />
      <MeniPodaci ime="Puđa sir" opis = "" cjena="8.00" />
      <MeniPodaci ime="Dalmatinska plata"  opis = "sir, pršut, panceta, inćuni, masline, kapari" cjena="19.00" />
      <MeniPodaci ime="Plata sireva"  opis = "paški sir, iberico, gorgonzola sir, feta sir" cjena="18.00" />
      <MeniPodaci ime="Slani inćuni"  opis = "porcija 5 kom" cjena="9.00" />
      <MeniPodaci ime="Slavonska plata"  opis = "kobasica, kulen, pršut, feferoni" cjena="19.00" />
      <MeniPodaci ime="Pašteta od tune"  opis = "" cjena="7.00" />
      <MeniPodaci ime="Slani zalogaj"  opis = "pogača sa sirom i maslinama" cjena="6.00" />
      <MeniPodaci ime="Salata od hobotnice"  opis = "" cjena="15.00" />

      <h2>Juhe</h2>
      <MeniPodaci ime="Goveđa juha"  opis = "" cjena="4.50" />
      <MeniPodaci ime="Krem juha od gljiva"  opis = "" cjena="4.50" />
      <MeniPodaci ime="Krem juha od rajčice"  opis = "" cjena="4.50" />


      <h2>Tjestenina</h2>
      <MeniPodaci ime="Špageti bolognese"  opis = "Umak od mljevenog mesa i rajčica" cjena="10.50" />
      <MeniPodaci ime="Špageti carbonara"  opis = "Damatinska panceta, jaja, vrhnje" cjena="10.50" />
      <MeniPodaci ime="Rezanci s kozicama"  opis = "Umak od rajčice, kozice" cjena="11.50" />
      <MeniPodaci ime="Lasgne bolognese"  opis = "Umak od mljevenog mesa i rajčica" cjena="11.50" />
      <MeniPodaci ime="Lasagne s 4 vrste sira"  opis = "feta, gorgonzola, parmezan, gauda" cjena="12.50" />
      <MeniPodaci ime="Rižot od kozica"  opis = "" cjena="14.50" />
      <MeniPodaci ime="Rižot od sipe"  opis = "" cjena="15.00" />


      <h2>Riblja jela</h2>
      <MeniPodaci ime="Liganje pržene"  opis = "kolutići" cjena="15.70" />
      <MeniPodaci ime="Tuna odrezak na žaru"  opis = "" cjena="17.80" />
      <MeniPodaci ime="Steak lubina na žaru"  opis = "" cjena="16.90" />

      <h2>Mesna jela</h2>
      <MeniPodaci ime="Apetit plata"  opis = "(2 osobe) biftek 125g, ramstek 125g, lungić 125g, rol. piletina 125g, teleći šnicel, povrće" cjena="46.00" />
      <MeniPodaci ime="Mesna plata"  opis = "(2 osobe) 2 kotlet, 125g piletina, 2 kobasice, 4 čevapi, 1 pljeskavica" cjena="36.00" />
      <MeniPodaci ime="Punjena pljeskavica sa sirom"  opis = "" cjena="13.00" />
      <MeniPodaci ime="Beef burger"  opis = "junetina, sir, zelena salata, rajčica, panceta, burger umak, kapula, prženi kumpiri" cjena="12.0" />
      <MeniPodaci ime="Piletina sa žara"  opis = "" cjena="12.50" />
      <MeniPodaci ime="Punjena piletina"  opis = "šunka i sir" cjena="13.50" />
      <MeniPodaci ime="Biftek na žaru"  opis = "" cjena="29.00" />
      <MeniPodaci ime="Biftek u zelenom papru"  opis = "" cjena="30.00" />
      <MeniPodaci ime="Biftek u umaku od gljiva"  opis = "" cjena="30.00" />
      <MeniPodaci ime="Ramstek na žaru"  opis = "" cjena="22.00" />
      <MeniPodaci ime="Ramstek sa pršutom i sirom"  opis = "" cjena="25.00" />
      <MeniPodaci ime="Mješano meso"  opis = "125g piletina, 2 ćevapi, 2 gril, kobasica, svinjski kotlet, kapula, ajvar" cjena="18.00" />
      <MeniPodaci ime="Čevapćići"  opis = "10 kom + pomfrit" cjena="12.00" />
      <MeniPodaci ime="Teleći kotlet sa žara"  opis = "ajvar, kapula" cjena="19.50" />
      <MeniPodaci ime="Pileća plata"  opis = "(2 osobe) Pileći ražnjići x2 s povrćem, punjena piletina, pileći šnicel, kroketi, umak od šampinjona, pekarski krumpir" cjena="29.50" />
      
      
      
      <h2>Specijaliteti kuće</h2>
      <MeniPodaci ime="Komiška pogača"  opis = "" cjena="14.70" />
      <MeniPodaci ime="Soparnik"  opis = "2 kom" cjena="12.50" />
      <MeniPodaci ime="Sinjski arambašići"  opis = "4 kom" cjena="15.20" />


      <h2>Prilozi</h2>
      <MeniPodaci ime="Kajmak"  opis = "" cjena="1.50" />
      <MeniPodaci ime="Pomfrit"  opis = "" cjena="4.00" />
      <MeniPodaci ime="Riža"  opis = "" cjena="6.50" />
      <MeniPodaci ime="Povrće sa žara"  opis = "" cjena="8.00" />
      <MeniPodaci ime="Blitva na dalmatinski"  opis = "" cjena="5.00" />
      <MeniPodaci ime="Kruh"  opis = "" cjena="1.00" />


      <h2>Salate</h2>
      <MeniPodaci ime="Mješana sezonska"  opis = "" cjena="4.50" />
      <MeniPodaci ime="Grčka salata"  opis = "sozonsko povrće, feta sir, masline balzamico" cjena="11.50" />
      <MeniPodaci ime="Apetit salata"  opis = "sozonsko povrće, piletina, suncokret, masline, dressing, crema aceto" cjena="13.50" />
      <MeniPodaci ime="Caprese salata"  opis = "mozzarela, rajčice, masline, bosiljak, maslinovo ulje" cjena="12.50" />
      <MeniPodaci ime="Caprese burrata"  opis = "burrata, aceto krema, rukola, cherry rajčice" cjena="13.00" />


      <h2>Pizza</h2>
      <p>VELIKA (φ34cm) / JUMBO (φ50cm)</p>
      <MeniPodaci ime="Mješana"  opis = "" cjena="10.00 €/12.90" />
      <MeniPodaci ime="Margarita"  opis = "" cjena="9,00 € / 10,90" />
      <MeniPodaci ime="Napolitana"  opis = "rajčica, sir, inćuni, šunka, gljive, origano" cjena="11,00 € / 13,90" />
      <MeniPodaci ime="Dalmatinska"  opis = "rajčica, sir, pršut, šunka, maslina, origano" cjena="12,00 € / 14,00" />
      <MeniPodaci ime="Kozice"  opis = "" cjena="12,00 € / 15,90 " />
      <MeniPodaci ime="Vegetarijana"  opis = "rajčica, sir, povrće, kukuruz, gljive, masline" cjena="11,00 € / 14,50" />
      <MeniPodaci ime="Slavonska"  opis = "rajčica, sir, šunka, gljive, kulen, vrhnje, feferoni" cjena="12,00 € / 14,90 " />
      <MeniPodaci ime="Četiri sira"  opis = "rajčica, gouda, gorgonzola, mozzarella, parmezan" cjena=" 11,00 € / 15,90 " />
      <MeniPodaci ime="Seljačka"  opis = "rajčica, sir, šunka, kulen, panceta, kapula, origano" cjena="10,50 € / 15,50" />
      <MeniPodaci ime="Apetit"  opis = "umak od rajčica, mozzarella, češnjak, pršut, cherry rajčica, rikula, parmezan" cjena="13,50 € / 16,90 " />
      <MeniPodaci ime="Topli sendvič"  opis = "" cjena="4.50" />


      <h2>Deserti</h2>
      <MeniPodaci ime="Palačinke s orasima"  opis = "" cjena="5.20" />
      <MeniPodaci ime="Palačinke s marmeladom"  opis = "" cjena="4.50" />
      <MeniPodaci ime="Palačinke s nutelom"  opis = "" cjena="4.70" />
      <MeniPodaci ime="Palačinke sa sladoledom"  opis = "" cjena="5.90" />
      <MeniPodaci ime="Panna cotta"  opis = "" cjena="4.50" />
      <MeniPodaci ime="Čokoladna torta"  opis = "" cjena="5.00" />
      <MeniPodaci ime="Voćna torta"  opis = "šumsko voće" cjena="4.60" />


      <h2>Topli napici</h2>
      <MeniPodaci ime="Espresso" cjena="2.50" />
      <MeniPodaci ime="Cappuccino" cjena="3.00" />
      <MeniPodaci ime="Kava s mlijekom" cjena="3.00" />
      <MeniPodaci ime="Macchiato" cjena="3.00" />
      <MeniPodaci ime="Čaj" cjena="2.50" />
      <MeniPodaci ime="Vruća čokolada" cjena="3.50" />

      <h2>Sokovi</h2>
      <MeniPodaci ime="Coca-Cola 0,33L" cjena="2.50" />
      <MeniPodaci ime="Fanta 0,33L" cjena="2.50" />
      <MeniPodaci ime="Sprite 0,33L" cjena="2.50" />
      <MeniPodaci ime="Ledeni čaj 0,5L" cjena="3.00" />
      <MeniPodaci ime="Mineralna voda 0,5L" cjena="2.00" />
      <MeniPodaci ime="Prirodni sokovi 0,25L" opis="naranča, jabuka" cjena="2.80" />

      <h2>Alkoholna pića</h2>
      <MeniPodaci ime="Pivo 0,5L" cjena="3.00" />
      <MeniPodaci ime="Crno vino 0,2L" cjena="4.50" />
      <MeniPodaci ime="Bijelo vino 0,2L" cjena="4.50" />
      <MeniPodaci ime="Prošek 0,1L" cjena="4.00" />
      <MeniPodaci ime="Rakija 0,03L" cjena="3.50" />
      <MeniPodaci ime="Likeri 0,03L" cjena="3.50" />
    </div>
  );
}
    
      


export default Menu;
