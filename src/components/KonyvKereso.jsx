import Kereso from "./Kereso";

function KonyvKereso() {
  const konyvek = [
    "A Gyuruk Ura",
    "Harry Potter",
    "A szolgallolany meseje",
    "Tuskevar",
    "Egri csillagok"
  ];

  return (
    <>
      <h2>Konyv kereso</h2>
      <Kereso lista={konyvek} />
    </>
  );
}

export default KonyvKereso;
