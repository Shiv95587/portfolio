import AboutMe from "./sections/AboutMe.js";
import Services from "./sections/Services.js";
import Projects from "./sections/Projects.js";
import Achievements from "./sections/Achievements.js";
import Contact from "./sections/Contact.js";
export default function Main({ currentTab, setCurrentTab }) {
  return (
    <main>
      <AboutMe currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Services />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
