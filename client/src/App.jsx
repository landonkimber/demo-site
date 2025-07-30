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
import { HeroTranOne, HeroTranTwo } from "./components/HeroTran/index";

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
  const HeroTransistionList = {
    HeroTranOne,
    HeroTranTwo,
  };
  return (
    <>
      <NavbarHolder />
      <main className="min-h-screen scroll-mt-32 bg-slate-100 bg-blend-overlay">
        <ComponentHeroSlide components={HeroComponentList} />
        {/* <ComponentSlide
          components={HeroTransistionList}
          componentWidth={"w-full"}
        /> */}
        <ComponentSlide components={PassageComponentList} />
        <ComponentSlide components={PassageComponentList} />
        <ComponentSlide components={PassageComponentList} />
      </main>
    </>
  );
}

export default App;
