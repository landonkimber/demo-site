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
    <div className="w-[100vw] items-center justify-center">
      <div
        className="flex flex-row transition-transform duration-500 ease-in-out transform-gpu"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {keys.map((k) => {
          const CurrentComponent = components[k];
          return (
            <div key={k} className="w-screen h-[40vh] flex-none relative">
              <CurrentComponent />
            </div>
          );
        })}
      </div>
      <button
        onClick={goPrev}
        className="absolute left-4 z-2 rounded-full bg-gray-200 hover:bg-gray-300"
        aria-label="Previous Component"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 z-2 rounded-full bg-gray-200 hover:bg-gray-300"
        aria-label="Next Component"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
  a;
};

export default ComponentHeroSlide;
