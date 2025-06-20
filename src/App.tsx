import styles from "./App.module.scss";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Banner />
        <Info />
        <About />
        <Services />
      </div>
    </>
  );
}

export default App;
