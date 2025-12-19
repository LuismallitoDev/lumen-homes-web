import { portfolioItems } from "../../data/portafolio";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

export const Portfolio = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-[#0F1112]">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    uptitle="PORTFOLIO"
                    title="PRECISION IN PRACTICE"
                    subtitle="Every property we manage becomes a testament to architectural excellence and revenue optimization."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer">

                            <div className="overflow-hidden mb-6 h-100 relative border border-white/5">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt={item.title}
                                />
                            </div>


                            <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
                                <div>
                                    <h3 className="font-playfair text-white text-2xl mb-2 group-hover:text-lumen-gold transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <span className="font-montserrat text-white/40 text-[10px] tracking-widest uppercase">
                                        {item.location}
                                    </span>
                                </div>
                                <span className="font-mono text-lumen-gold text-xs border border-lumen-gold/30 px-2 py-1">
                                    {item.ref}
                                </span>
                            </div>


                            <div className="flex justify-between text-center bg-[#161819] p-4 border border-white/5">
                                {item.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-white font-bold font-playfair text-lg">{stat.value}</div>
                                        <div className="text-white/30 text-[9px] font-mono uppercase mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/projects">
                        <Button variant="primary">VIEW ALL PROJECTS</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};