import styles from "./App.module.css";
import Acceuil from "./components/Acceuil/Acceuil";
import CommentCaMarche from "./components/CommentCaMarche/CommentCaMarche";

export default function App() {
  return (
    <div className={styles.App}>
      <Acceuil />
    </div>
  );
}
