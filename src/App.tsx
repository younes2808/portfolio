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
      <div className="m-40 text-center">
        <h1>Resten av content</h1>
      </div>
    </>
  );
}

export default App;
