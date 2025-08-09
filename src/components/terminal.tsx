import { useEffect, useState } from "react";

const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = `pportfolio:~$ ./aboutme.sh\n\nHi, I’m Younes Benhaida, a software engineering student based in Oslo, Norway. I’ve been passionate about programming since high school (VG2, IT1), and here are some facts about me:\n\n> Younes.education\n"B.Sc. Software Engineering - Oslo Metropolitan University (2025)"\n\n> Younes.interests\n["Programming", "AI", "Tech", "Real Madrid", "Gaming"]\n\n> Younes.skills\n["React", "Python", "Tailwind", "Three.js", "GSAP", "Java","Git"]`;

  useEffect(() => {
    let index = 0;
    const timeout = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(timeout);
    }, 25);

    return () => clearInterval(timeout);
  }, [fullText]);

  // Minimal color logic: split lines and add colors
  const coloredText = text.split("\n").map((line, i) => {
    if (line.startsWith("portfolio:~$"))
      return (
        <span key={i} className="text-green-600 font-bold">
          {line}
          {"\n"}
        </span>
      );
    if (line.startsWith("> "))
      return (
        <span key={i} className="text-orange-500">
          {line}
          {"\n"}
        </span>
      );
    if (line.startsWith("[") || line.startsWith('"'))
      return (
        <span key={i} className="text-purple-800 italic">
          {line}
          {"\n"}
        </span>
      );
    return (
      <span key={i}>
        {line}
        {"\n"}
      </span>
    );
  });

  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-xl overflow-hidden border border-amber-200">
      {/* Title Bar */}
      <div className="w-full h-11 bg-amber-100 flex items-center space-x-2 px-3">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
      </div>

      {/* Terminal Body */}
      <div className="bg-amber-50 text-rose-500 font-mono text-sm p-4 h-96 overflow-y-auto whitespace-pre-wrap">
        {coloredText}
      </div>
      
    </div>
  );
};

export default Terminal;
