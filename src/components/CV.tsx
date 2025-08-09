//Inspired by https://github.com/adiian/resume-templates
//All credit goes to the original creator

import { useEffect } from "react";

//Scrolling to the top off the page on Load
const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="text-black font-sans pb-8 min-h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-2xl mt-2 rounded-2xl">
        {/* Header */}
        <header className="flex justify-between items-center border-gray-200 pb-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">
              Younes Benhaida
            </h1>
            <p className="text-lg text-gray-700">benhaida.mehdi@gmail.com</p>
            <p className="text-sm text-blue-600 hover:underline">
              <a
                href="https://github.com/younes2808"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/younes2808
              </a>
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Oslo, Norway</p>
          </div>
        </header>

        {/* Education Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-200 pb-2 mb-1">
            Education
          </h2>
          {[
            {
              title: "M.Sc. Programming and Systems Architecture",
              school: "University of Oslo (UiO)",
              date: "Aug 2025 - Jun 2027",
            },
            {
              title: "B.Sc. Computer Engineering (Dataingeniør)",
              school: "Oslo Metropolitan University (OsloMet)",
              date: "Aug 2022 - Jun 2025",
            },
            {
              title: "Studiespesialisering med realfagskompetanse",
              school: "Kuben videregående skole",
              date: "Aug 2019 - Jun 2022",
            },
          ].map((edu, i) => (
            <div key={i} className="mb-4">
              <p className="text-lg font-semibold text-gray-900">{edu.title}</p>
              <p className="text-sm text-gray-600">
                {edu.school} | {edu.date}
              </p>
            </div>
          ))}
        </section>

        {/* Work Experience */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-200 pb-2 mb-1">
            Experience
          </h2>
          {[
            {
              title: "Teacher Assistant | Oslo Metropolitan University",
              date: "Jan 2025 - Jun 2025",
              tasks: [
                "Assisted in teaching DATA2410 (Networking and Cloud Computing).",
                "Guided students through practical lab work, assignments, and troubleshooting.",
                "Graded coursework and provided feedback to support the professor.",
              ],
            },
            {
              title: "Bachelor Thesis | SINTEF",
              date: "Jan 2025 - Jun 2025",
              tasks: [
                "Developed a tool to convert research papers into XML using AI-powered OCR and a custom classification model.",
                "Designed the system to enhance Retrieval-Augmented Generation (RAG) model performance.",
                "Collaborated with SINTEF and Bucharest University of Economic Studies.",
              ],
            },
            {
              title:
                "AI Researcher – NAVATAR-HELPER | Oslo Metropolitan University",
              date: "Aug 2024 - Dec 2024",
              tasks: [
                "Researched and developed a bilingual (Norwegian/English) RAG model to answer NEET-related questions.",
                "Collaborated with CIM (Center for Intelligent Musculoskeletal Health) to evaluate AI applications in healthcare.",
                "Benchmarked model accuracy and speed, comparing RAG with/without embedding models.",
              ],
            },
            {
              title: "Coding Instructor | Oslo",
              date: "Aug 2018 - Jun 2019",
              tasks: [
                "Delivered Scratch programming courses to 4th grade students.",
                "Prepared and presented lessons introducing basic programming concepts in an engaging way.",
              ],
            },
          ].map((job, i) => (
            <div key={i} className="mb-6">
              <p className="text-lg font-semibold text-gray-900">{job.title}</p>
              <p className="text-sm text-gray-600">{job.date}</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-800 text-sm leading-relaxed">
                {job.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="mb-5">
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-200 pb-2 mb-1">
            Skills
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 leading-relaxed">
            <li>
              <strong>Programming Languages:</strong> Python, Java, JavaScript,
              TypeScript, C#, SQL, PHP
            </li>
            <li>
              <strong>Web Development:</strong> HTML, CSS, React.js, Three.js,
              GSAP, jQuery, Bootstrap
            </li>
            <li>
              <strong>Databases:</strong> MySQL, Firebase, Milvus, Chroma
            </li>
            <li>
              <strong>Version Control:</strong> Git, GitHub
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Docker, Node.js, Linux,
              IntelliJ, Adobe XD, Photoshop, Matlab
            </li>
            <li>
              <strong>Agile Methodologies:</strong> Scrum, Kanban, Lean
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-200 pb-2 mb-1">
            Projects
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-sm leading-relaxed">
            <li>
              <strong>NAVATAR Helper:</strong> Built a Retrieval-Augmented
              Generation (RAG) model using Python and LangChain.
            </li>
            <li>
              <strong>RAYS Social Media App:</strong> Developed a full-stack
              .NET + React social media app with authentication and real-time
              updates.
            </li>
            <li>
              <strong>Apple Landing Page:</strong> Created an interactive
              landing page with Three.js and GSAP animations.
            </li>
            <li>
              <strong>StarWars Falcon Viewer:</strong> Built a 3D model viewer
              powered by Three.js.
            </li>
            <li>
              <strong>Sci2XML:</strong> Converted research PDFs into structured
              XML for better data processing.
            </li>
          </ul>
        </section>
      </div>

      {/* Print Button */}
      <div className="flex justify-center mt-8 print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-800 transition-all duration-200 text-white font-semibold py-2 px-5 rounded-lg shadow-md"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
};

export default CV;
