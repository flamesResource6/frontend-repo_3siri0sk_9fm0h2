import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Showcase3D from './components/Showcase3D'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black text-gray-100 selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Showcase3D />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} Baraa Aljouri — Data Scientist
      </footer>
    </div>
  )
}

export default App
