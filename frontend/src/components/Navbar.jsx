import {useState, useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import Menu from './MenuBtn';
import {X} from 'lucide-react';

export default function Navbar() {
    const NavLinks = () => {
        return (
            <>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'text-green-500 text-xl underline underline-offset-2': 'text-black hover:underline underline-offset-1'
                }>
                    Home
                </NavLink>
                <NavLink to="/recordParameters" className={({ isActive }) =>
                    isActive ? 'text-green-500 text-xl underline underline-offset-2': 'text-black hover:underline underline-offset-1'
                }>
                    Record
                </NavLink>
                <NavLink to="/report" className={({ isActive }) => 
                    isActive ? 'text-green-500 text-xl underline underline-offset-2': 'text-black hover:underline underline-offset-1'
                }>
                    Reports
                </NavLink>
            </>
        );
    };
    const [open, setOpen] = useState(false);
    const tl = () => {
        setOpen(!open);
    };

    return (
        <>
            <header className="top-0 sticky z-[20] flex-wrap bg-white py-2 w-full shadow-sm shadow-green-100 hover:shadow-green-300">
                <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
                    <h3 className="text-xl md:text-2xl basis-1/2 font-bold text-green-600">Mindfulnotes</h3>
                    <nav className="space-x-6 hidden md:flex">
                        <NavLinks />
                    </nav>
                    <div className="md:hidden basis-1/2 flex justify-end">
                        <button onClick={tl}>
                            {open ? <X />: <Menu />}
                        </button>
                    </div>
                    {open && (
                        <div className="md:hidden basis-full flex flex-col items-center">
                            <NavLinks />
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};