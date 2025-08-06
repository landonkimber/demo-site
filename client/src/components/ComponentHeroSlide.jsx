import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ComponentHeroSlide = ({ components }) => {
  const keys = Object.keys(components);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentComponent = components[keys[currentIndex]];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? keys.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === keys.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[70vh] z-5 w-[100vw] overflow-x-hidden overflow-y-hidden z-5">
      <div
        className="flex flex-row transition-transform duration-500 ease-in-out transform-gpu"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {keys.map((k) => {
          const CurrentComponent = components[k];
          return (
            <div key={k} className="w-screen h-[70vh] flex-none relative">
              <CurrentComponent />
            </div>
          );
        })}
      </div>
      <button
        onClick={goPrev}
        className="absolute left-4 top-[40vh] z-2 rounded-full h-24 bg-gray-200 backdrop-blur bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-70 shadow-white  hover:shadow-lg"
        aria-label="Previous Component"
      >
        <ArrowLeft className="w-16 h-16 text-white" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 top-[40vh] z-2 rounded-full h-24 bg-gray-200 backdrop-blur bg-opacity-30 hover:bg-gray-200 hover:bg-opacity-70 shadow-white hover:shadow-lg"
        aria-label="Next Component"
      >
        <ArrowRight className="w-16 h-16 text-white" />
      </button>
    </div>
  );
};

export default ComponentHeroSlide;
