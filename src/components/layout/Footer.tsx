import { Link } from "react-router-dom";
import logoImage from '../../assets/images/Logo Negative Transparent BG.png';

export const Footer = () => {

    // Data for the columns to keep JSX clean
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Services', href: '/services' },
    ];

    const servicesLinks = [
        { name: 'Lumen Blueprint', href: 'blueprint' },
        { name: 'Lumen Connect', href: 'connect' },
        { name: 'Lumen Signature', href: 'signature' },
        { name: 'Apply for Management', href: 'apply' },
    ];

    const contactInfo = [
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'info@lumenhomes.com', href: 'mailto:info@lumenhomes.com' },
        { label: '+1 (234) 567-890', href: 'tel:+1234567890' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
    ];
    const icons = [
        { label: 'Instagram', href: 'https://www.instagram.com/lumenhomesco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'instagram-logo' },
        { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook-logo' },
        { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin-logo' },
    ];
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/5 pt-12 md:pt-24 pb-8 md:pb-12 px-6 z-100 relative">
            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION: 4 COLUMNS */}
                {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-24 text-center md:text-left">

                    {/* COLUMN 1: BRANDING */}
                    <div className="flex flex-col items-center md:items-start">
                        {/* Logo */}
                        <div className="flex flex-col items-center md:items-start mb-8">
                            <Link to="/" className="flex items-center cursor-pointer transition-opacity hover:opacity-80 shrink-0">
                                <img
                                    src={logoImage}
                                    alt="Lumen Homes Logo"
                                    // Fixed width classes: w-32 on mobile, w-48 on desktop
                                    className="w-32 md:w-48 h-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Tagline */}
                        <p className="font-playfair italic text-white/60 text-sm mb-8 leading-relaxed max-w-xs mx-auto md:mx-0">
                            The Art of Order in Luxury Property Management.
                        </p>

                        {/* Social Icons */}
                        {/* Centered on mobile (justify-center), left on desktop (md:justify-start) */}
                        <div className="flex justify-center md:justify-start space-x-4">
                            {icons.map((icon) => (

                                <a
                                    key={icon.label}
                                    href={icon.href}
                                    target="_BLANK"
                                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/60 hover:border-lumen-gold hover:text-lumen-gold transition-all duration-300"
                                >
                                    <i className={`ph ph-${icon.icon} text-lg`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: QUICK LINKS */}
                    <div>
                        <h4 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="font-lato text-sm text-white/50 hover:text-lumen-gold transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: SERVICES */}
                    <div>
                        <h4 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">Services</h4>
                        <ul className="space-y-4">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={`/${link.href}/`} className="font-lato text-sm text-white/50 hover:text-lumen-gold transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4: CONTACT */}
                    <div>
                        <h4 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">Contact</h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item) => (
                                <li key={item.label}>
                                    <Link to={item.href} className="font-lato text-sm text-white/50 hover:text-lumen-gold transition-colors duration-300">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION: COPYRIGHT */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-widest text-center md:text-left">
                    <p>LUMEN HOMES © 2025. REF: NY-MED.</p>
                    <p className="mt-4 md:mt-0">Crafted with precision and order.</p>
                </div>

            </div>
        </footer>
    );
};