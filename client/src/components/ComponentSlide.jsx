import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ComponentSlide = ({ components, componentWidth = "max-w-7xl" }) => {
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
    <div
      className={`relative ${componentWidth} mx-auto flex items-center justify-between`}
    >
      <button
        onClick={goPrev}
        className="absolute left-8 top-64 p-2 rounded-full bg-gray-200 bg-opacity-50 hover:bg-gray-400 hover:text-white z-10"
        aria-label="Previous Component"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <CurrentComponent />

      <button
        onClick={goNext}
        className="absolute right-8 top-64 p-2 rounded-full bg-gray-200 bg-opacity-50 hover:bg-gray-400 hover:text-white z-15"
        aria-label="Next Component"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ComponentSlide;
