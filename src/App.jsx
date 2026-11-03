import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Internship from './sections/Internship.jsx'
import Certifications from './sections/Certifications.jsx'
import DevSkills from './sections/DevSkills.jsx'
import DevProjects from './sections/DevProjects.jsx'
import AiDev from './sections/AiDev.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Achievements from './sections/Achievements.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Internship /><Certifications />
        <DevSkills /><DevProjects /><AiDev /><Experience /><Education />
        <Achievements /><TechStack /><Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mist">
        © {new Date().getFullYear()} Fahim Yadgir. Built with React and Tailwind CSS.
      </footer>
    </MotionConfig>
  )
}
