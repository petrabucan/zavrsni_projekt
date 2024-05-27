

function MeniPodaci({ ime, opis, cjena }) {
  return (
    <div className="meni-podaci">
      <h4 className="ime">{ime}</h4>
      <p className="opis">{opis}</p>
      <p className="cjena">{cjena}€</p>
    </div>
  );
}

export default MeniPodaci;

