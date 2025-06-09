import { BoxReveal } from "@/components/magicui/box-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Hero = () => {
  return (
    <div className="relative inset-0 bg-gradient-to-br from-teal-100 via-blue-400 to-cyan-500 animate-gradient bg-[length:400%_400%]">
      {/* Background visual effect */}
      <div className="absolute bottom-0 right-0 bg-black rounded-full w-96 h-96 mix-blend-overlay filter blur-3xl opacity-60 animate-bounce z-0" />
      <div className="absolute top-26 left-0 bg-black rounded-full w-96 h-96 mix-blend-overlay filter  blur-3xl animate-pulse" />
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
    </div>
  );
};


export default Hero;
