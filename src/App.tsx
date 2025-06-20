import styles from "./App.module.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Banner />
        <Info />
      </div>
    </>
  );
}

export default App;
