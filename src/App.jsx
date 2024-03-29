import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Favorits from "./components/Favorits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const windowWidth = useWindowWidth();

  return (
    <div className="overflow-x-hidden">
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaigns />}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorits />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
