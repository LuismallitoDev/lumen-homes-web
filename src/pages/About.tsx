import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/Isotype Negative Transparent BG.png';

export const About = () => {
    return (
        <div className="bg-lumen-dark font-lato text-lumen-text antialiased overflow-x-hidden selection:bg-lumen-gold selection:text-black">
            <Navbar />

            {/* HERO SECTION */}
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-linear-to-b from-lumen-dark via-lumen-dark/20 to-lumen-dark"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <span className="font-mono text-lumen-gold text-[10px] tracking-[0.3em] uppercase block mb-6">OUR PHILOSOPHY</span>
                    <h1 className="font-playfair text-white text-5xl md:text-7xl tracking-wide mb-6 leading-tight">
                        BEYOND <span className="italic text-lumen-gold">HOSTING.</span>
                    </h1>
                    <p className="font-lato text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        We don't just manage keys. We engineer experiences and build financial legacies.
                    </p>
                </div>
            </header>

            {/* MANIFESTO SECTION (The Anti-Nomad) */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-lumen-gold border-l"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop"
                                alt="Architectural Detail"
                                className="w-full h-125px object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-lumen-gold border-r"></div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="font-montserrat text-white text-3xl font-bold tracking-widest mb-8 uppercase">
                            The Modern Architect
                        </h2>
                        <div className="space-y-6 text-white/70 font-light leading-relaxed">
                            <p>
                                The era of the chaotic amateur host is over. In a market flooded with mediocrity, <strong>Order is the ultimate luxury.</strong>
                            </p>
                            <p>
                                Lumen Homes was born from a simple observation: Properties are assets, not hobbies. The "Digital Nomad" lifestyle often brings chaos; we bring the antidote. We represent the <strong>"Anti-Nomad"</strong> philosophy—rooted, stable, and meticulously structured.
                            </p>
                            <p>
                                We apply architectural precision to hospitality. Every guest interaction, every pricing adjustment, and every cleaning protocol is designed with the rigor of a blueprint.
                            </p>
                        </div>
                        <div className="mt-10 flex gap-12 font-mono text-xs text-lumen-gold">
                            <div>
                                <span className="block text-2xl text-white font-playfair mb-1">100%</span>
                                DATA DRIVEN
                            </div>
                            <div>
                                <span className="block text-2xl text-white font-playfair mb-1">Zero</span>
                                GUESSWORK
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES GRID */}
            <section className="py-32 px-6 bg-[#161819]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="font-mono text-lumen-gold text-[10px] tracking-[0.3em] uppercase">OUR CORE</span>
                        <h2 className="font-playfair text-white text-4xl mt-4">THE LUMEN STANDARD</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                        {[
                            { title: 'PRECISION', desc: 'We do not believe in "approximately". Metrics, revenue, and cleanliness are exact sciences.' },
                            { title: 'TRANSPARENCY', desc: 'You own the asset; you deserve the data. No hidden fees, no obscured calendars.' },
                            { title: 'STATUS', desc: 'A Lumen property is a mark of quality. We elevate the perception of your real estate.' }
                        ].map((val, i) => (
                            <div key={i} className="bg-lumen-dark p-12 hover:bg-[#1A1A1A] transition-colors">
                                <div className="font-mono text-lumen-gold/50 text-xs mb-6">0{i + 1}</div>
                                <h3 className="font-montserrat text-white font-bold tracking-widest mb-4">{val.title}</h3>
                                <p className="text-white/50 text-sm font-light leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM / FOUNDER */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <img
                        src={logoImage}
                        alt="Lumen Seal"
                        className="h-24 w-auto mx-auto mb-8 invert sepia saturate-600 hue-rotate-30 brightness-75"
                    />
                    <h2 className="font-playfair text-white text-3xl md:text-4xl mb-8 leading-tight">
                        "We are not here to compete. <br />We are here to set the standard."
                    </h2>
                    <div className="font-mono text-lumen-gold text-xs uppercase tracking-widest">
                        — The Lumen Team
                    </div>
                    <div className="mt-12">
                        <Link to="/apply">
                            <Button variant="primary">JOIN THE PORTFOLIO</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};