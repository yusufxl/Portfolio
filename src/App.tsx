import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Notfount from './pages/Notfount';
import Homelayout from './pages/HomeLayout.tsx';
import Skills from './pages/Skills.tsx';
import './pages/main.scss';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homelayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="Skills" element={<Skills />} />

        </Route>
        <Route path="*" element={<Notfount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;