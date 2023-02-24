import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Lourinho from '../../components/Lourinho/Lourinho';
import Pipoca from '../../components/Pipoca/Pipoca';
import logoLar from '../../assets/larback.png'
function Cases() {
  return (

    <div className="App"
    // style={{ backgroundImage: `url(${logoLar})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", width: "100vw", height: "100vh", backgroundPosition: "center" }}
    >
      <Header />
      <Pipoca />
      <Lourinho />
      <Footer />
    </div>

  );
}

export default Cases;