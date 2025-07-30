import heroImg from "/HeroImages/HeroOne.jpg";
import { FaCheck } from "react-icons/fa";

const HeroOne = () => {
  const wordClass = "text-lime-300 font-fugaz text-lg mx-2";
  const words = [
    "BOLD",
    "ICONIC",
    "LIMITLESS",
    "EXCLUSIVE",
    "RADICAL",
    "HOT",
    "ELECTRIC",
    "STYLISH",
    "FRESH",
    "NEW",
    "UNDENIABLE",
    "MODERN!",
    "LEGENDARY",
    "HIP",
  ];
  const bulletStyle =
    "w-2/3 text-4xl text-white font-bold font-sans bg-slate-800 bg-opacity-80 rounded-md m-5 p-2 pl-3 pb-3 flex items-center gap-2 opacity-0 -translate-x-full animate-slide-in-left";

  return (
    <section className="relative h-full w-full">
      {/* Image */}
      <img
        src={heroImg}
        alt="A picture of a deli store front."
        className="absolute h-full w-full object-cover object-[80%_70%] z-1"
      />

      {/* Centered content */}
      <div className="absolute left-[38%] z-3 flex center h-full w-[25%] items-center justify-center">
        <h1 className="z-5 absolute animate-typing overflow-hidden whitespace-nowrap border-r-4 text-6xl font-fugaz text-white text-center transform -skew-y-21">
          Your website here.
        </h1>
      </div>
      <div className="absolute left-[10%] z-3 flex flex-col center h-full w-[25%] items-center justify-center">
        <h1 className={bulletStyle} style={{ animationDelay: "0.2s" }}>
          <FaCheck className="mt-1" /> Professional
        </h1>
        <h1 className={bulletStyle} style={{ animationDelay: "0.5s" }}>
          <FaCheck className="mt-1" /> Personalized
        </h1>
        <h1 className={bulletStyle} style={{ animationDelay: "0.8s" }}>
          <FaCheck className="mt-1" /> Affordable
        </h1>
      </div>

      <div className="absolute bottom-0 w-full h-10 bg-slate-800 bg-opacity-80 flex flex-row justify-center items-center">
        {words.map((word, index) => (
          <p key={index} className={wordClass}>
            {word}!
          </p>
        ))}
      </div>
    </section>
  );
};

export default HeroOne;
