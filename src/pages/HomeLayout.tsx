import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import '../components/Nav/gooeyNav.scss';
import Footer from '../components/Footer/Footer';
import '../assets/sass/Media.scss'
import NavMobile from '../components/Nav/NavMobile';
const Homelayout = () => {
    const items = [
        { label: "Home", name: "/" },
        { label: "About Me", name: "/About" },
        { label: "Project", name: "/Project" },
        { label: "Skills", name: "/Skills" },
    ];
    return (
        <>
            <Nav items={items} />
            <Outlet />
            <Footer />
            <NavMobile />
       
        </>
    );
};

export default Homelayout;