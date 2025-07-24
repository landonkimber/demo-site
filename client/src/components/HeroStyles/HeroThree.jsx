import heroImg from "/HeroImages/HeroThree.jpg";

const HeroThree = () => {
  return (
    <section className="relative h-full w-full">
      {/* Image */}
      <img
        src={heroImg}
        alt="An image of a man working on a construction site."
        className="absolute h-full w-full object-cover object-[50%_60%] z-1"
      />

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Centered content */}
      <div className="relative z-3 flex h-full w-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center">
          and with the right tools...
        </h1>
      </div>
    </section>
  );
};

export default HeroThree;
