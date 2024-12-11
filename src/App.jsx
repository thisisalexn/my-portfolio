import { useEffect, useRef } from 'react';
import ProfileInfo from './components/ProfileInfo'
import Skills from './components/Skills';
import SoftwareExperience from "./components/SoftwareExperience";
import { PersonalFooter } from './components/PersonalFooter';

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
        <div className="space-y-5" style={{
          minHeight: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 100,
        }}>
          <ProfileInfo />
          <Skills />
          <SoftwareExperience />
          <PersonalFooter />
        </div>
      </div >
    </>
  )
}

export default App
