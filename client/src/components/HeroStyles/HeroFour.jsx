import heroImg from "/HeroImages/HeroFour.jpg";
import Logo from "../SVGs/Logo";

const HeroFour = () => {
  return (
    <section className="relative h-full w-full">
      {/* Image */}
      <img
        src={heroImg}
        alt="An image of a blue sky filled with fluffy white clouds."
        className="absolute h-full w-full object-cover object-[50%_40%] z-1"
      />
      <div
        className="absolute w-full h-full bg-sky-900 bg-opacity-20"
        aria-hidden="true"
      ></div>
      {/* Centered content */}
      <div className="relative z-3 flex h-full w-full items-center justify-center">
        <div className="font-limelight italic text-white text-center w-full h-full mt-[10vh]">
          <svg
            className="w-1/2 h-[80%] mx-auto"
            viewBox="0 0 600 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <path
                id="curve"
                d="M 20,200 Q 300,20 580,200"
                fill="transparent"
              />
            </defs>
            <text fill="white" fontSize="68">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                sky is the limit!
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute h-72 w-72 items-center flex justify-center mt-[5%]">
          <Logo />
        </div>
      </div>
    </section>
  );
};

export default HeroFour;
