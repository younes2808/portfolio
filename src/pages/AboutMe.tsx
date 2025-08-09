import { useEffect } from "react";
import Navbar from "./Navbar";

const AboutMe = () => {
  //Skipping to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* NAVBAR */}
      <div className="w-full flex justify-center">
        <Navbar />
      </div>

      <div className=" flex items-center justify-center p-2">
        <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Profile picture */}
          <div className="mb-6">
            <img
              src="/src/assets/me.png"
              alt="Picture of me"
              className="w-32 h-32 object-cover rounded-full mx-auto shadow-md"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>

          {/* Personal intro */}
          <p className="text-gray-700 leading-relaxed mb-4">
            My name is Younes Benhaida, I’m 22 years old. I just started my
            master’s in Programming and System Architecture at the University of
            Oslo (UiO). I completed my bachelor’s degree in Data Engineering at
            OsloMet.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            My journey with programming started back in 9th grade when I became
            a coding instructor for younger students. I would teach 4th graders
            how to use Scratch, which I really enjoyed. In high school (VGS), I
            chose IT1 and IT2 as elective subjects, where I met an inspiring
            Danish IT teacher who formerly worked for the Norwegian military. He opened my eyes to the
            many opportunities in IT and was one of the reasons why I chose to study programming at university.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I took my bachelor’s at OsloMet, which was challenging but also a
            lot of fun. On the side, I enjoy programming projects; you can check
            some in the projects section of this website. My big dream is to
            learn how to program games, both to become a better programmer and
            because I love games.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Outside of IT, I enjoy spending time with friends and staying very
            active. I lift weights five times a week and aim for 10,000 steps
            every day. I also like exploring nature through hiking and
            occasionally try my hand at photography.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I’m still figuring out my career goals since I haven’t started
            working in IT yet, but I’m eager to learn and grow. What excites me
            most about tech at the moment is AI.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
