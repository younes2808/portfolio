import Navbar from "./Navbar";

const Games = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="w-full flex justify-center">
        <Navbar />
      </div>

      {/* Gameboy Body */}
      <div className="flex justify-center px-4 py-8">
        <div className="w-full max-w-[640px] aspect-[4/5] bg-sky-200 rounded-l-lg rounded-tr-lg rounded-br-[90px] shadow-lg p-6 flex flex-col justify-between items-center">
          {/* Screen */}
          <div className="w-full h-1/2 bg-gray-800 rounded-md relative flex items-center justify-center text-white text-lg">
            {/* White Inner Screen */}
            <div className="w-[85%] h-[90%] bg-white flex items-center justify-center">
              Game Screen
            </div>

            {/* Red button underneath */}
            <div className="absolute top-[96.5%] left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
