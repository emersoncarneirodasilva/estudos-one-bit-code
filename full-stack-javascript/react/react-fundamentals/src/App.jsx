import StatusText from "./components/StatusText";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}

export default App;
