import { BoxReveal } from "@/components/magicui/box-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-amber-200 to-pink-800 animate-gradient bg-[length:400%_400%]">
      {/* Background visual effects */}
      <div className="absolute bottom-13 right-0 bg-black rounded-full w-96 h-96 mix-blend-overlay filter blur-3xl opacity-60 animate-pulse z-0" />
      <div className="absolute top-26 left-0 bg-black rounded-full w-96 h-96 mix-blend-overlay filter blur-3xl animate-pulse z-0" />

      {/* Text content */}
      <div className="relative z-10 py-44 text-center max-w-3xl mx-auto px-4">
        <BoxReveal width="100%">
          <h1 className="text-3xl font-semibold">Hello, I’m</h1>
        </BoxReveal>
        <SparklesText className="mt-4 text-6xl text-white font-extrabold">
          Younes Benhaida
        </SparklesText>
        <BoxReveal width="100%">
          <p className="mt-6 text-xl text-gray-700">
            I'm a developer who likes to build cool, good-looking and functional websites.
            Welcome to my portfolio!
          </p>
        </BoxReveal>
      </div>

      {/* Bottom blur/fade into root background color */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-20 bg-gradient-to-t from-pink-100 to-transparent" />


    </div>
  );
};

export default Hero;
