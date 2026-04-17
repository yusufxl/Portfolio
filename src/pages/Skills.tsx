import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

import '../components/SoftAurora/SoftAurora';

import LogoLoop from '../components/LogoLoop/LogoLoop';
import Skill from '../components/Skills/Skill';


const techLogos = [
  { node: <SiReact />, title: "React", href: "" },
  { node: <SiNextdotjs />, title: "Next.js", href: "" },
  { node: <SiTypescript />, title: "TypeScript", href: "" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "" },
];


const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
const Contact = () => {
  return (
    <>
      <Skill/>
      <div style={{ height: '100px', position: 'relative', overflow: 'hidden'  }}>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </>


  )
}

export default Contact