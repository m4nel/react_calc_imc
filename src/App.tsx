import { useState } from "react";
import styles from "./App.module.css";
import powered from "./assets/powered.png";
import { level, calculateImc, levels } from "./helper/imc";
import { GridItem } from "./components/GridItem/GridItem";
import LeftArrow from "./assets/LeftArrow.png";


function App() {
  const [Altura, SetAltura] = useState<number>(0);
  const [Peso, SetPeso] = useState<number>(0);
  const [ParaExibir, MudaExibir] = useState<levels | null>(null);

  const Submit = () => {
    if (Altura && Peso) {
      MudaExibir(calculateImc(Altura, Peso));
    } else {
      alert("Preencha todos os campos");
    }
  };

  const BackButton = () => {
    MudaExibir(null);
    SetPeso(0);
    SetAltura(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powered} alt="" width={150} />
        </div>
      </header>
      <div className={styles.Container}>
        <div className={styles.LeftSide}>
          <h1 className={styles.h1}>Calcule o seu imc.</h1>

          <p className={styles.p}>
            IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            className={styles.input}
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={Altura > 0 ? Altura : ""}
            onChange={(e) => SetAltura(parseFloat(e.target.value))}
         disabled={ParaExibir ? true : false}
         />

          <input
            className={styles.input}
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3(em kg)"
            value={Peso > 0 ? Peso : ""}
            onChange={(e) => SetPeso(parseFloat(e.target.value))}
            disabled={ParaExibir ? true : false}
          />

          <button className={styles.button} onClick={Submit} disabled={ParaExibir ? true : false}>
            Calcular
          </button>
        </div>

        <div className={styles.RightSide}>
          {!ParaExibir && (
            <div className={styles.grid}>
              {level.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}

          {ParaExibir && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}>
                <img src={LeftArrow} alt="" width={25} onClick={BackButton} />
              </div>
              <GridItem item={ParaExibir} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
