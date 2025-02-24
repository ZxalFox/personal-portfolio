import Link from "next/link";
import heroBg from "../public/bg-hero.png";
import LottieAnimation from "./lottie-animation";

const HeroSection = () => {
  return (
    <section
      className="bg-bottom bg-cover bg-no-repeat "
      style={{ backgroundImage: `url('${heroBg.src}')` }}
    >
      <div className="text-center flex flex-col justify-center items-center text-white px-5 py-20 sm:px-10">
        <h1 className="text-4xl font-bold mb-4 group animate-fade-in">
          Welcome to my Portfolio
        </h1>
        <p className="text-xl mb-8 animate-fade-in ">
          Hi! My name is Ayron, and I&apos;m a fullstack developer.
        </p>
        <Link
          href="#skills"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in"
        >
          Know more
        </Link>
        <div className="mt-10">
          <LottieAnimation className="w-full sm:w-[20rem]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
