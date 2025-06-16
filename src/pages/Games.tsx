import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

// Declare Dos globally on window
declare global {
  interface Window {
    Dos: (element: HTMLElement, options: { url: string }) => void;
  }
}

const loadJsDosAssets = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const scriptId = "jsdos-script";
    const styleId = "jsdos-style";

    // Prevent double loading
    if (document.getElementById(scriptId)) return resolve();

    // Load CSS
    const link = document.createElement("link");
    link.id = styleId;
    link.rel = "stylesheet";
    link.href = "https://v8.js-dos.com/latest/js-dos.css";
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://v8.js-dos.com/latest/js-dos.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load js-dos.js"));
    document.body.appendChild(script);
  });
};

const Games = () => {
  const dosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadJsDosAssets()
      .then(() => {
        if (dosRef.current && typeof window.Dos === "function") {
          window.Dos(dosRef.current, {
            url: "https://v8.js-dos.com/bundles/digger.jsdos",
          });

          // After js-dos renders the canvas, scale it to fill the container
          setTimeout(() => {
            const canvas = dosRef.current?.querySelector("canvas");
            if (canvas) {
              canvas.style.width = "100%";
              canvas.style.height = "100%";
              canvas.style.objectFit = "contain"; // keep aspect ratio
              canvas.style.display = "block"; // remove inline gaps
            }
          }, 1000); // adjust timeout if needed
        } else {
          console.warn("Dos function not found after script load.");
        }
      })
      .catch((err) => {
        console.error("Failed to load js-dos assets:", err);
      });
  }, []);

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
            <div
              ref={dosRef}
              id="dos"
              className="w-[85%] h-[90%] bg-white flex items-center justify-center overflow-hidden"
              style={{ position: "relative" }}
            >
              Loading...
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
