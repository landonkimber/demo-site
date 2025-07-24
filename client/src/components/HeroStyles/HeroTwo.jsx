import heroImg from "/HeroImages/HeroTwo.jpg";

const HeroTwo = () => {
  return (
    <section className="relative h-full w-full">
      {/* Image */}
      <img
        src={heroImg}
        alt="An image of chefs in their kitchen."
        className="absolute h-full w-full object-cover object-[50%_55%] z-1"
      />

      {/* <div className="absolute inset-0 bg-black/40" aria-hidden="true" /> */}

      {/* Centered content */}
      <div className="relative z-10 flex h-full w-full items-center ">
        <h1 className="text-6xl text-right w-[45%] font-zain italic text-white bg-gradient-to-l from-red-600/60 to-transparent text-center px-4 py-2 rounded-sm -skew-x-10 ">
          With enough help...
        </h1>
      </div>
    </section>
  );
};

export default HeroTwo;
