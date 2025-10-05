import { useState, useEffect } from "react";
import styles from "../css/kereso.module.css";

function Kereso(props) {
  const [szuro, setSzuro] = useState("");
  const [szurtLista, setSzurtLista] = useState(props.lista);

  useEffect(() => {
    const ujLista = props.lista.filter((elem) =>
      elem.toLowerCase().includes(szuro.toLowerCase())
    );
    setSzurtLista(ujLista);
  }, [szuro, props.lista]);

  return (
    <div className={styles.kereso}>
      <input
        type="text"
        placeholder="Keresés..."
        value={szuro}
        onChange={(e) => setSzuro(e.target.value)}
      />

      <ul>
        {szurtLista.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Kereso;
