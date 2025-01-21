import { useEffect, useRef } from 'react';
import ProfileInfo from './components/ProfileInfo'
import Skills from './components/Skills';
import SoftwareExperience from "./components/SoftwareExperience";
import { PersonalFooter } from './components/PersonalFooter';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import NavBar from './components/Navbar';

function App() {

  const appRef = useRef(null);
  const toRef = useRef(null);


  const moveGradient = (event) => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const mouseX = event?.clientX
      ? Math.round((event.clientX / winWidth) * 100)
      : 50;
    const mouseY = event?.clientY
      ? Math.round((event.clientY / winHeight) * 100)
      : 50;

    if (appRef) {
      appRef.current.style.setProperty("--mouse-x", `${mouseX}%`);
      appRef.current.style.setProperty("--mouse-y", `${mouseY}%`);
    }
  };

  useEffect(() => {
    moveGradient();

    document.addEventListener("mousemove", moveGradient);
    return () => {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, []);

  return (
    <>
      <div id="app"
        ref={appRef}
        className="app"
      >
        <div id="content"
          className="space-y-5 " style={{
            minHeight: '100vh',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 100,
          }}>
          <ProfileInfo />
          <Skills />
          <SoftwareExperience />
          <WorkExperience />
          <Education />
          <Projects />
          <PersonalFooter />
        </div>
      </div >
    </>
  )
}

export default App
