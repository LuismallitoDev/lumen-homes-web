import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { serviceData } from '../data/offers';

export const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const service = slug ? serviceData[slug] : null;

    if (!service) return <Navigate to="/services" />;

    return (
        <div className="bg-lumen-dark font-lato text-lumen-text antialiased selection:bg-lumen-gold selection:text-black">
            <Navbar />

            {/* HERO SECTION */}
            <header className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                    style={{ backgroundImage: `url('${service.heroImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-lumen-dark via-lumen-dark/60 to-transparent"></div>

                <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
                    <Link to="/services" className="inline-flex items-center text-lumen-gold text-xs uppercase tracking-widest mb-6 hover:text-white transition-colors">
                        <i className="ph ph-arrow-left mr-2"></i> Back to Menu
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="font-mono text-white/50 text-[10px] tracking-[0.3em] uppercase block mb-4">{service.subtitle}</span>
                            <h1 className="font-playfair text-white text-5xl md:text-7xl leading-none uppercase">
                                {service.title}
                            </h1>
                        </div>
                        <div className="text-right md:text-left">
                            <div className="font-playfair text-4xl text-lumen-gold">{service.price}</div>
                            <div className="font-lato text-xs text-white/40 uppercase tracking-widest">{service.period}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* THESIS SECTION */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <i className="ph ph-quotes text-4xl text-lumen-gold/30 mb-8"></i>
                    <h2 className="font-playfair text-white text-2xl md:text-4xl leading-relaxed mb-8">
                        "{service.thesis}"
                    </h2>
                    <p className="font-lato text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* SCOPE OF WORK GRID */}
            <section className="py-24 px-6 bg-[#161819]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h3 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Technical Specifications</h3>
                        <div className="h-px w-full bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {/* Ahora TypeScript sabe que 'item' tiene title y desc */}
                        {service.scope.map((item, index) => (
                            <div key={index} className="group">
                                <div className="font-mono text-lumen-gold/40 text-xs mb-4">0{index + 1}</div>
                                <div className="mb-6">
                                    <i className={`${item.icon} text-4xl text-lumen-gold/80 group-hover:text-lumen-gold transition-colors duration-300`}></i>
                                </div>
                                <h4 className="font-playfair text-white text-xl mb-3 group-hover:text-lumen-gold transition-colors">
                                    {item.title}
                                </h4>
                                <p className="font-lato text-white/50 text-sm leading-relaxed border-l border-white/10 pl-4">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 p-12 md:p-20 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lumen-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="font-playfair text-white text-4xl mb-6 relative z-10">Ready to Upgrade?</h2>
                    <p className="text-white/60 mb-10 font-light relative z-10">
                        Begin the audit process for {service.title}.
                    </p>
                    <div className="relative z-10">
                        <Link to="/apply">
                            <Button variant="primary" className="px-12 py-4">
                                START APPLICATION
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};