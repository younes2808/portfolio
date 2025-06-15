import { Link } from "react-router-dom";

const Bentogrid = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div
        className="grid w-full max-w-7xl gap-4 p-4 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 
                      auto-rows-fr"
      >
        {/* Box 1 */}
        <div className="min-h-[290px] col-span-1 lg:col-span-2">
          <div className="group relative h-full w-full cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-3xl">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-amber-500 transition-all duration-500 group-hover:scale-[20]"></span>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-amber-500 transition-all duration-500 group-hover:bg-amber-400">
                {/* Resume Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-10 w-10 text-white transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-8l-7-8z"
                  />
                </svg>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90">
                <p>
                  Take a closer look at my professional background, education,
                  and key accomplishments. Download my resume or view detailed
                  experience that shapes my expertise.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-amber-500 transition-all duration-500 group-hover:text-white"
                  >
                    Resume &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="min-h-[200px] col-span-1 lg:col-span-4">
          <Link to="/projects">
            <div className="group relative h-full w-full cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-3xl">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-teal-500 transition-all duration-500 group-hover:scale-[30]"></span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-teal-500 transition-all duration-500 group-hover:bg-teal-400">
                  {/* Folder Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5A2.25 2.25 0 015.25 5.25h3.586a2.25 2.25 0 011.59.659l1.415 1.414a2.25 2.25 0 001.59.659H18.75A2.25 2.25 0 0121 10.25v7.5A2.25 2.25 0 0118.75 20H5.25A2.25 2.25 0 013 17.75v-10.25z"
                    />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90">
                  <p>
                    This section highlights some of my personal and academic
                    projects. Click through to see what I've built using
                    different web technologies.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-teal-500 transition-all duration-500 group-hover:text-white"
                    >
                      Explore Projects &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Box 3 */}
        <div className="min-h-[200px] col-span-1 lg:col-span-4">
          <div className="group relative h-full w-full cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-3xl">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-indigo-500 transition-all duration-500 group-hover:scale-[30]"></span>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-indigo-500 transition-all duration-500 group-hover:bg-indigo-400">
                {/* About Me Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-10 w-10 text-white transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a9 9 0 0115 0"
                  />
                </svg>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90">
                <p>
                  Here you’ll find a bit about my background, my skills, and
                  what inspires me to keep building and learning every day.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-indigo-500 transition-all duration-500 group-hover:text-white"
                  >
                    About me &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="min-h-[290px] col-span-1 lg:col-span-2">
          <Link to="/secret">
            <div className="group relative h-full w-full cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-3xl">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red-500 transition-all duration-500 group-hover:scale-[20]"></span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-red-500 transition-all duration-500 group-hover:bg-red-400">
                  {/* Game Controller Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 64 40"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 20C8 11 16 4 32 4C48 4 56 11 56 20C56 29 48 36 32 36C16 36 8 29 8 20Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    {/* Left D-pad vertical */}
                    <rect
                      x="15"
                      y="14"
                      width="4"
                      height="12"
                      fill="black"
                      rx="1"
                    />
                    {/* Left D-pad horizontal */}
                    <rect
                      x="11"
                      y="18"
                      width="12"
                      height="4"
                      fill="black"
                      rx="1"
                    />
                    {/* Right buttons */}
                    <circle cx="44" cy="14" r="3" fill="red" />
                    <circle cx="50" cy="20" r="3" fill="yellow" />
                    <circle cx="38" cy="20" r="3" fill="blue" />
                    <circle cx="44" cy="26" r="3" fill="green" />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90">
                  <p>Looking for a cool surprise?</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-red-500 transition-all duration-500 group-hover:text-white "
                    >
                      Click Here &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Bentogrid;
