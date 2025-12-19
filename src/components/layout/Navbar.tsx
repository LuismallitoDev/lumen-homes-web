import { useState } from 'react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About Us', href: '/about-us' },
        { name: 'Services', href: '/services' },
        //{ name: 'Portfolio', href: '/projects' },
        //{ name: 'Testimonials', href: '/testimonials' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-lumen-dark/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

                {/* ================= LOGO SECTION FIXED ================= */}
                <Link to="/" className="flex items-center cursor-pointer transition-opacity hover:opacity-80 shrink-0">
                    <img
                        src="src\assets\images\Logo Negative Transparent BG.png"
                        alt="Lumen Homes Logo"
                        className="w-35 md:w-48 h-auto max-h-35 object-contain"
                    />
                </Link>
                {/* ====================================================== */}

                {/* DESKTOP MENU */}
                <div className="hidden md:flex space-x-8 font-montserrat text-[11px] font-medium tracking-[0.15em] text-white/70 uppercase items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="hover:text-lumen-gold transition-colors relative group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lumen-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    {/* CTA BUTTON*/}
                    <div className="pl-4">
                        <Link to="/apply">
                            <Button variant="primary" className="px-6 py-3 text-[10px]">
                                APPLY NOW
                            </Button>
                        </Link>
                    </div>
                </div>


                {/* MOBILE MENU TOGGLE */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white text-2xl focus:outline-none mt-2"
                >
                    <i className={`ph ${isMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <div className={`md:hidden absolute w-full bg-lumen-dark border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${isMenuOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-6 space-y-6 font-montserrat text-xs tracking-widest text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white/70 hover:text-lumen-gold transition-colors"
                        >
                            {link.name.toUpperCase()}
                        </Link>
                    ))}
                    <div className="pt-4">
                        <a href="#apply" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="primary" className="w-full">APPLY NOW</Button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};