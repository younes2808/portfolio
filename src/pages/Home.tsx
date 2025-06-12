// pages/Home.tsx
import TerminalBox from "@/components/terminal";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Bentogrid from "@/components/bentogrid";

const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="w-screen flex justify-center">
        <Navbar />
      </div>
      {/* Hero */}
      <div className="w-screen border-t-2">
        <Hero />
      </div>
      {/* Terminal Mockup */}
      <div className="m-20">
        <TerminalBox />
      </div>
      {/* Bento Grid */}
      <div className="m-20">
        <Bentogrid />
      </div>
    </>
  );
};

export default Home;
