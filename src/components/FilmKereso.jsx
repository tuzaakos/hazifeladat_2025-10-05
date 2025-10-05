import Kereso from "./Kereso";

function FilmKereso() {
  const filmek = [
    "Star Wars",
    "Matrix",
    "Star Trek",
    "Dune",
    "Inception"
  ];

  return (
    <>
      <h2>Film kereso</h2>
      <Kereso lista={filmek} />
    </>
  );
}

export default FilmKereso;
