import { Routes, Route, Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
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
import Achievements from './pages/Achievements';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import { usePageLoadPerformance } from './hooks/usePerformance';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-red-500 to-crimson-600 text-white font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            <Trophy size={24} />
            View My Achievements
          </Link>
        </div>
      </div>
      <Resume />
      <Projects />
      <Stats />
      <Contact />
    </>
  );
}

function App() {
  usePageLoadPerformance();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <AllProjects />
          </PageTransition>
        } />
        <Route path="/project/:id" element={
          <PageTransition>
            <ProjectDetail />
          </PageTransition>
        } />
        <Route path="/achievements" element={
          <PageTransition>
            <Achievements />
          </PageTransition>
        } />
      </Routes>
    </div>
  );
}

export default App;
