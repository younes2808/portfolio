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

  // Helper functions to simulate keyboard events on the canvas element
  const sendKeyEvent = (key: string, type: "keydown" | "keyup") => {
    const canvas = dosRef.current?.querySelector("canvas");
    if (!canvas) return;

    const keyCodeMap: Record<string, number> = {
      ArrowUp: 38,
      ArrowDown: 40,
      ArrowLeft: 37,
      ArrowRight: 39,
    };

    const event = new KeyboardEvent(type, {
      key,
      code: key,
      bubbles: true,
      cancelable: true,
      composed: true,
    });

    // Override readonly properties for compatibility
    Object.defineProperty(event, "keyCode", {
      get: () => keyCodeMap[key] || 0,
    });
    Object.defineProperty(event, "which", {
      get: () => keyCodeMap[key] || 0,
    });

    canvas.dispatchEvent(event);
  };

  const holdKey = (key: string) => {
    sendKeyEvent(key, "keydown");
  };

  const releaseKey = (key: string) => {
    sendKeyEvent(key, "keyup");
  };

  useEffect(() => {
    loadJsDosAssets()
      .then(() => {
        if (dosRef.current && typeof window.Dos === "function") {
          window.Dos(dosRef.current, {
            url: "https://v8.js-dos.com/bundles/digger.jsdos",
            autoStart: true, // Autostarting emulation instead of clicking start
            kiosk: true, // Hiding sidemenu
            volume: 0,
          } as any);

          // After js-dos renders the canvas, scale it to fill container and focus it
          setTimeout(() => {
            const canvas = dosRef.current?.querySelector("canvas");
            if (canvas) {
              canvas.style.width = "100%";
              canvas.style.height = "80%";
              canvas.style.objectFit = "contain"; // keep aspect ratio
              canvas.style.display = "block"; // remove inline gaps
              canvas.tabIndex = 0; // Make canvas focusable
              canvas.focus(); // Focus so it receives keyboard input
            }
          }, 1000);
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

      {/*Background */}
      <div className=" h-screen">
        {/* Gameboy Body */}
        <div
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
          className="flex justify-center px-4 py-8"
        >
          <div className="w-full max-w-[640px] aspect-[4/5] bg-sky-200 rounded-l-lg rounded-tr-lg rounded-br-[90px] shadow-lg p-6 flex flex-col justify-between items-center">
            {/* Screen */}
            <div className="w-full h-1/2 bg-gray-800 rounded-md relative flex items-center justify-center text-white text-lg">
              {/* White Inner Screen */}
              <div
                ref={dosRef}
                id="dos"
                className="w-[85%] h-[90%] bg-white flex items-center justify-center overflow-hidden"
                style={{ position: "relative" }}
              ></div>

              {/* Red button underneath */}
              <div className="absolute top-[94%] sm:top-[96.5%] left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            </div>

            {/* Gamepad */}
            <div className="mt-6 flex flex-col items-center">
              {/* Up */}
              <a
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
                className="w-10 h-10 bg-black text-white border border-white shadow-md flex items-center justify-center mb-2"
                onMouseDown={() => holdKey("ArrowUp")}
                onMouseUp={() => releaseKey("ArrowUp")}
                onMouseLeave={() => releaseKey("ArrowUp")}
                onTouchStart={() => holdKey("ArrowUp")}
                onTouchEnd={() => releaseKey("ArrowUp")}
                onContextMenu={(e) => e.preventDefault()}
                onTouchMove={(e) => e.preventDefault()}
              >
                ↑
              </a>

              <div className="flex">
                {/* Left */}
                <a
                  style={{ userSelect: "none", WebkitUserSelect: "none" }}
                  className="w-10 h-10 bg-black text-white border border-white shadow-md flex items-center justify-center mr-2"
                  onMouseDown={() => holdKey("ArrowLeft")}
                  onMouseUp={() => releaseKey("ArrowLeft")}
                  onMouseLeave={() => releaseKey("ArrowLeft")}
                  onTouchStart={() => holdKey("ArrowLeft")}
                  onTouchEnd={() => releaseKey("ArrowLeft")}
                  onContextMenu={(e) => e.preventDefault()}
                  onTouchMove={(e) => e.preventDefault()}
                >
                  ←
                </a>

                {/* Spacer */}
                <div className="w-10 h-10"></div>

                {/* Right */}
                <a
                  style={{ userSelect: "none", WebkitUserSelect: "none" }}
                  className="w-10 h-10 bg-black text-white border border-white shadow-md flex items-center justify-center ml-2"
                  onMouseDown={() => holdKey("ArrowRight")}
                  onMouseUp={() => releaseKey("ArrowRight")}
                  onMouseLeave={() => releaseKey("ArrowRight")}
                  onTouchStart={() => holdKey("ArrowRight")}
                  onTouchEnd={() => releaseKey("ArrowRight")}
                  onContextMenu={(e) => e.preventDefault()}
                  onTouchMove={(e) => e.preventDefault()}
                >
                  →
                </a>
              </div>

              {/* Down */}
              <a
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
                className="w-10 h-10 bg-black text-white border border-white shadow-md flex items-center justify-center mt-2"
                onMouseDown={() => holdKey("ArrowDown")}
                onMouseUp={() => releaseKey("ArrowDown")}
                onMouseLeave={() => releaseKey("ArrowDown")}
                onTouchStart={() => holdKey("ArrowDown")}
                onTouchEnd={() => releaseKey("ArrowDown")}
                onContextMenu={(e) => e.preventDefault()}
                onTouchMove={(e) => e.preventDefault()}
              >
                ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
