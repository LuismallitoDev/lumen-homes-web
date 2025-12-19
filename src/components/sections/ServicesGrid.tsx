import { services } from "../../data/services";
import { SectionTitle } from "../ui/SectionTitle";

export const ServicesGrid = () => {
    return (
        <section id="services" className="py-32 px-6 bg-lumen-dark">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    uptitle="The Lumen Grid"
                    title="ARCHITECTURE OF SUCCESS"
                    subtitle="Precision-engineered systems that transform property management into a science."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((item) => (
                        <div key={item.id} className="bg-lumen-card p-10 border border-white/5 hover:border-lumen-gold/30 transition-all group relative hover:-translate-y-2 duration-500">
                            <span className="absolute top-6 right-6 font-mono text-white/10 text-xs group-hover:text-lumen-gold/50">{item.id}</span>
                            <i className={`ph ${item.icon} text-3xl text-lumen-gold mb-8`}></i>
                            <h3 className="font-montserrat text-white font-bold text-xs tracking-[0.15em] mb-4 uppercase group-hover:text-lumen-gold transition-colors">{item.title}</h3>
                            <p className="font-lato text-white/60 text-sm leading-relaxed mb-6 font-light h-24">{item.desc}</p>
                            <span className="font-mono text-lumen-gold text-[10px] block pt-6 border-t border-white/5">{item.stat}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};