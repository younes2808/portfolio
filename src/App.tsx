import TerminalBox from "@/components/terminal";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      {/*NAVBAR*/}
      <div className="w-screen flex justify-center">
        <Navbar />
      </div>
      {/*Hero */}
      <div className="w-screen border-b-2 border-t-2">
        <Hero />
      </div>
      {/*Terminal Mockup*/}
      <div className="m-20">

        <TerminalBox />
        
      </div>
    </>
  );
}

export default App;
