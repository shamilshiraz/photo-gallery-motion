import Lenis from 'lenis'
import './App.css'
import { useEffect, useState } from 'react'
import Projects from './components/Projects'
import Canva from './components/Canva'


function App() {

  useEffect(()=>{
    const lenis=new Lenis({
      duration:0.4,
      easing:(t)=>t,
      smooth: true,      // enable smooth scroll (default: true)
      direction: 'vertical', // scroll direction
      gestureDirection: 'vertical', // gesture direction
      smoothTouch: true,   // smooth scroll on touch devices (default: false)
      touchMultiplier: 2,  // touch speed (default: 2)
      infinite: false,     // enable infinite scrolling (default: false)
    })

    function raf(time) {
      lenis.raf(time); // update lenis on each frame
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis on component unmount
      lenis.destroy();
    };
  },[])

  const[activeProject,setActiveProject]=useState(null) 

  return (
    <div className='bg-black'>
     <Canva activeProject={activeProject}/>
     <div className="main h-[25vh] text-white">
     <center>    <h1 className='text-3xl font-bold pt-4'>Photogenesis</h1></center>
     </div>
     <Projects setActiveProject={setActiveProject}/>  
     <div className="main h-[50vh]"></div>

    </div>
  )
}

export default App
