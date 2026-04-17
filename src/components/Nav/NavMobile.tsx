
import { Link, useLocation } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { HiViewGridAdd } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';
import './NavMobile.scss';

const BottomNav: React.FC = () => {
    const location = useLocation();

    const items = [
        { path: "/", icon: <IoHomeOutline /> },
        { path: "/about", icon: <CgProfile /> },
        { path: "/project", icon: <HiViewGridAdd /> },
        { path: "/skills", icon: <FaCode /> },
    ];

    const activeIndex = items.findIndex(i => i.path === location.pathname);

    return (
        <nav className="bottom_nav">
            <div
                className="bottom_nav__indicator"
                style={{
                    left: `calc(${activeIndex} * 25% + 12.5%)`
                }}
            />
            {items.map((item, index) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`bottom_nav__link ${activeIndex === index ? 'active' : ''}`}
                >
                    {item.icon}
                </Link>
            ))}

        </nav>
    );
};

export default BottomNav;