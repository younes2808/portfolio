import TerminalBox from "@/components/terminal";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Bentogrid from "./components/bentogrid";

function App() {
  return (
    <>
      {/*NAVBAR*/}
      <div className="w-screen flex justify-center">
        <Navbar />
      </div>
      {/*Hero */}
      <div className="w-screen border-t-2">
        <Hero />
      </div>
      {/*Terminal Mockup*/}
      <div className="m-20">
        <TerminalBox />
      </div>
      {/*Bento grid*/}
      <div className="m-20">
      <Bentogrid />
      </div>
    </>
  );
}

export default App;
