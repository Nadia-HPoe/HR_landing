import styles from "./App.module.scss";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Banner from "./components/Banner/Banner";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Format from "./components/Format/Format";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Links from "./components/Links/Links";
import Reviews from "./components/Reviews/Reviews";
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
        <Gallery />
        <Reviews />
        <Faq />
        <Links />
        <Footer />
      </div>
    </>
  );
}

export default App;
