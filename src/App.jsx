import { Routes, Route, Link } from "react-router-dom";
import Nyitolap from "./components/Nyitolap";
import KonyvKereso from "./components/KonyvKereso";
import FilmKereso from "./components/FilmKereso";
import styles from "./css/app.module.css";

function App() {
  return (
    <>
      <nav className={styles.menu}>
        <Link to="/">Nyitólap</Link> |{" "}
        <Link to="/konyvek">önyv kereső</Link> |{" "}
        <Link to="/filmek">Film kereső</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Nyitolap />} />
        <Route path="/konyvek" element={<KonyvKereso />} />
        <Route path="/filmek" element={<FilmKereso />} />
      </Routes>
    </>
  );
}

export default App;
