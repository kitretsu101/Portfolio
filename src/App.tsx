import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Resume />
      <Projects />
      <Stats />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
