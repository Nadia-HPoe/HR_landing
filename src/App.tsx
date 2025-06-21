import styles from "./App.module.scss";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Banner from "./components/Banner/Banner";
import Format from "./components/Format/Format";
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
        <Format />
        <Advantages />
      </div>
    </>
  );
}

export default App;
