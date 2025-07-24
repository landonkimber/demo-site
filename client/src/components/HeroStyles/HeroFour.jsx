import heroImg from "/HeroImages/HeroFour.jpg";

const HeroFour = () => {
  return (
    <section className="relative h-full w-full">
      {/* Image */}
      <img
        src={heroImg}
        alt="An image of a blue sky filled with fluffy white clouds."
        className="absolute h-full w-full object-cover object-[50%_40%] z-1"
      />

      {/* Centered content */}
      <div className="relative z-3 flex h-full w-full items-center justify-center">
        <h1 className="text-6xl font-limelight italic text-white text-center">
          the sky is the limit!
        </h1>
      </div>
    </section>
  );
};

export default HeroFour;
