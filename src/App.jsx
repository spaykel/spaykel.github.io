import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Leadership from './components/Leadership.jsx';
import Skills from './components/Skills.jsx';
import Personal from './components/Personal.jsx';
import Footer from './components/Footer.jsx';
import CursorField from './components/CursorField.jsx';

export default function App() {
  return (
    <>
      <CursorField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Personal />
      </main>
      <Footer />
    </>
  );
}
