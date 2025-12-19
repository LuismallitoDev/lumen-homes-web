import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const Hero = () => {
    return (
        <header className="relative h-screen min-h-200 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40 animate-ken-burns"></div>
            <div className="absolute inset-0 bg-linear-to-b from-lumen-dark via-lumen-dark/50 to-lumen-dark"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                <div className="inline-block border border-lumen-gold px-4 py-2 mb-8 backdrop-blur-sm">
                    <span className="font-mono text-lumen-gold text-[10px] tracking-widest uppercase">REF. NY-MED-001</span>
                </div>

                <h1 className="font-playfair text-white text-5xl md:text-7xl lg:text-[5.5rem] tracking-wide mb-6 leading-tight drop-shadow-2xl">
                    THE ART OF ORDER.
                </h1>
                <p className="font-playfair italic text-white/80 text-xl md:text-2xl mb-8 font-light">We transform properties into high-yield assets.</p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                    <Link to="/apply"><Button variant="primary">APPLY FOR MANAGEMENT</Button></Link>
                    <Link to="/services"><Button variant="outline">EXPLORE SERVICES</Button></Link>
                </div>
            </div>
        </header>
    );
};