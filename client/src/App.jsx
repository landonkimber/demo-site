import "./App.css";
import "./index.css";

import NavbarHolder from "./components/NavbarHolder";
import ComponentSlide from "./components/ComponentSlide";
import ComponentHeroSlide from "./components/ComponentHeroSlide";

import {
  PassageOne,
  PassageTwo,
  PassageThree,
  PassageFour,
} from "./components/PassageStyles/index";
import {
  HeroOne,
  HeroTwo,
  HeroThree,
  HeroFour,
} from "./components/HeroStyles/index";

function App() {
  const PassageComponentList = {
    PassageOne,
    PassageTwo,
    PassageThree,
    PassageFour,
  };
  const HeroComponentList = {
    HeroOne,
    HeroTwo,
    HeroThree,
    HeroFour,
  };
  return (
    <>
      <NavbarHolder />
      <main className="bg-gray-50 min-h-screen pt-32 scroll-mt-32">
        <ComponentHeroSlide components={HeroComponentList} />
        <ComponentSlide components={PassageComponentList} />
      </main>
    </>
  );
}

export default App;
