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
  window.onload = function () {
    window.scrollTo(0, 0);
  };
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
    <main className="relative">
      <ComponentHeroSlide components={HeroComponentList} />

      <div className="relative mt-[70vh] scroll-mt-[70vh] bg-[url(/blueprint.jpg)] bg-slate-100 bg-blend-overlay z-8">
        <ComponentSlide components={PassageComponentList} />
      </div>

      <NavbarHolder />
    </main>
  );
}

export default App;
