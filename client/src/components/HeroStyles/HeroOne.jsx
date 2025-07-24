import heroImg from "/HeroImages/HeroOne.jpg";

const HeroOne = () => {
  return (
    <section className="relative h-full w-full">
      {/* Image */}
      <img
        src={heroImg}
        alt="A picture of a deli store front."
        className="absolute h-full w-full object-cover object-[80%_70%] z-1"
      />

      {/* Centered content */}
      <div className="absolute left-[35%] z-3 flex center h-full w-[25%] items-center justify-center">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 text-6xl font-fugaz text-white text-center transform -skew-y-21">
          Your website here.
        </h1>
      </div>
    </section>
  );
};

export default HeroOne;
