
import "./../components/Particles/Particles.tsx";
import Particles from './../components/Particles/Particles.tsx';

import AboutMe from '../components/AboutMe/AboutMe.tsx';


const About = () => {
  return (
    < >
      <div className="about_animation" style={{ position: 'relative', minHeight: '1160px' }}>
        <Particles />
        <AboutMe />

      </div>

    </ >
  )
}

export default About
