import CV from "@/components/CV";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="w-screen flex justify-center print:hidden">
        <Navbar />
      </div>

      {/*CV */}
      <div className="w-screen">
        <CV />
      </div>
    </>
  );
};

export default Resume;
