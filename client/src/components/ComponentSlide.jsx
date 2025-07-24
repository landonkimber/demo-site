import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ComponentSlide = ({ components }) => {
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
    <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4">
      <button
        onClick={goPrev}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        aria-label="Previous Component"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <CurrentComponent />

      <button
        onClick={goNext}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        aria-label="Next Component"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ComponentSlide;
