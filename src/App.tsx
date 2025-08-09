// App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Games from "./pages/Games";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/secret" element={<Games />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
