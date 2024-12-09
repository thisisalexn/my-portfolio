import { useEffect, useRef } from 'react';
import ProfileInfo from './components/ProfileInfo'

function App() {

  const appRef = useRef(null);
  const toRef = useRef(null);


  const moveGradient = (event) => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const mouseX = Math.round((event.pageX / winWidth) * 100);
    const mouseY = Math.round((event.pageY / winHeight) * 100);

    if (appRef) {
      appRef.current.style.setProperty("--mouse-x", `${mouseX}%`);
      appRef.current.style.setProperty("--mouse-y", `${mouseY}%`);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveGradient);
    return () => {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, []);

  return (
    <>
      <div id="app" ref={appRef} className='app'>
        <div className='flex items-center justify-center h-screen w-screen'>
          <ProfileInfo />
        </div >
      </div>
    </>
  )
}

export default App
