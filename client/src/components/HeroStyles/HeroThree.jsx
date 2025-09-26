import heroImg from "/HeroImages/HeroThree.jpg";

const HeroThree = () => {
  return (
    <section className="relative h-full w-full flex items-center">
      {/* Image */}
      <img
        src={heroImg}
        alt="An image of a man working on a construction site."
        className="absolute h-full w-full object-cover object-[50%_60%] z-1"
      />

      <div
        className="absolute w-full h-full bg-gray-900 bg-opacity-50"
        aria-hidden="true"
      ></div>

      {/* Centered content */}
      <div className="relative z-6 flex h-20% w-full items-center justify-center">
        <h1 className="text-5xl transform-h-[20%] font-audiowide font-bold text-white text-center [text-shadow:0_0_8px_rgba(255,165,0,0.8)] ">
          and with the right tools...
        </h1>
      </div>
    </section>
  );
};

export default HeroThree;
