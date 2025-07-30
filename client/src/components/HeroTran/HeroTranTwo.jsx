const HeroTranTwo = () => {
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

  return (
    <div className="w-full h-8 bg-slate-800 bg-opacity-80 -translate-y-8 z-10 flex flex-row justify-center items-center">
      {words.map((word, index) => (
        <p key={index} className={wordClass}>
          {word}!
        </p>
      ))}
    </div>
  );
};

export default HeroTranTwo;
