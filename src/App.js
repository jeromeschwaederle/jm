import styles from "./App.module.css";
import Acceuil from "./components/Acceuil/Acceuil";
import UrneConfig from "./components/UrneConfig/UrneConfig";

export default function App() {
  return (
    <div className={styles.App}>
      {/* <Acceuil /> */}
      <UrneConfig />
    </div>
  );
}
