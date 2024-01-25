import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Favorits from "./components/Favorits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto grid gap-y-6">
        <Favorits />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
