import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { AccordionItem } from '../components/ui/Accordion';
import { faqs, services } from '../data/faq';
import { Link } from 'react-router-dom';
export const Services = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-lumen-dark font-lato text-lumen-text antialiased overflow-x-hidden selection:bg-lumen-gold selection:text-black">
            <Navbar />

            {/* HERO SECTION */}
            <header className="relative h-[50vh] min-h-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-linear-to-t from-lumen-dark via-lumen-dark/50 to-lumen-dark/80"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <span className="font-mono text-lumen-gold text-[10px] tracking-[0.3em] uppercase block mb-6">SERVICE ARCHITECTURE</span>
                    <h1 className="font-playfair text-white text-4xl md:text-6xl tracking-wide mb-6 leading-tight">
                        ENGINEERED FOR <span className="italic text-lumen-gold">YIELD.</span>
                    </h1>
                    <p className="font-lato text-white/60 text-lg font-light max-w-2xl mx-auto">
                        Choose the level of management that aligns with your investment strategy. From digital setup to full-service hospitality.
                    </p>
                </div>
            </header>

            {/* SERVICES GRID */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`relative flex flex-col p-10 border transition-all duration-500 hover:-translate-y-2 
                        ${service.isPopular ? 'bg-[#161819] border-lumen-gold shadow-2xl shadow-lumen-gold/10' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                            >
                                {service.isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lumen-gold text-black px-4 py-1 font-mono text-[9px] uppercase tracking-widest font-bold">
                                        Architect's Choice
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="font-playfair text-2xl text-white mb-2">{service.name}</h3>
                                    <p className="font-mono text-lumen-gold text-xs uppercase tracking-widest mb-6">{service.tagline}</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-playfair text-4xl text-white">{service.price}</span>
                                        <span className="font-lato text-xs text-white/40">{service.period}</span>
                                    </div>
                                </div>

                                <div className="mb-10 border-t border-white/5 pt-6">
                                    <h4 className="font-montserrat text-white text-[10px] font-bold uppercase tracking-widest mb-4">Ideal For:</h4>
                                    <p className="font-lato text-sm text-white/70 font-light leading-relaxed">
                                        {service.idealFor}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-12 grow">
                                    {service.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-white/60 font-light">
                                            <i className="ph-fill ph-check-circle text-lumen-gold mt-0.5 shrink-0"></i>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <Link to={`/${service.id}`}> {/* service.id es 'blueprint', 'connect', etc. */}
                                        <Button variant={service.isPopular ? 'primary' : 'outline'} className="w-full">
                                            EXPLORE {service.name}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 px-6 bg-[#161819] border-y border-white/5">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-white text-3xl mb-4">COMMON INQUIRIES</h2>
                        <div className="h-px w-20 bg-lumen-gold mx-auto"></div>
                    </div>

                    <div className="border-t border-white/5">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                title={faq.q}
                                isOpen={openIndex === index}
                                onClick={() => toggleAccordion(index)}
                            >
                                {/* Usamos children para el contenido */}
                                {faq.a}
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};