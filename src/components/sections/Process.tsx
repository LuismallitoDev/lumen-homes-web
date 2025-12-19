import { processSteps } from "../../data/process";
import { Button } from "../ui/Button";

export const Process = () => {
    return (
        <section className="py-32 px-6 bg-lumen-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

                
                <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-fit">
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 border border-white/5" alt="Luxury Interior" />
                    <img src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover mt-12 opacity-80 hover:opacity-100 transition-opacity duration-500 border border-white/5" alt="Bedroom" />
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover -mt-12 opacity-80 hover:opacity-100 transition-opacity duration-500 border border-white/5" alt="Pool" />
                    <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 border border-white/5" alt="Detail" />
                </div>

                
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <span className="font-mono text-lumen-gold text-[10px] tracking-[0.3em] uppercase mb-6">THE PROCESS</span>
                    <h2 className="font-playfair text-white text-4xl md:text-5xl mb-6 leading-tight">
                        FROM APPLICATION <br />TO PASSIVE INCOME
                    </h2>
                    <p className="font-playfair italic text-white/60 text-lg mb-12">"A systematic approach to luxury management."</p>

                    <div className="space-y-10">
                        {processSteps.map((step) => (
                            <div key={step.id} className="flex gap-6 group">
                                
                                <div className="font-mono text-lumen-gold/50 text-xs border border-lumen-gold/30 h-8 w-8 flex items-center justify-center shrink-0 group-hover:bg-lumen-gold group-hover:text-black transition-all duration-300 cursor-default">
                                    {step.id}
                                </div>
                                <div>
                                    <h4 className="font-montserrat text-white text-xs font-bold tracking-widest uppercase mb-2 group-hover:text-lumen-gold transition-colors duration-300">
                                        {step.title}
                                    </h4>
                                    <p className="font-lato text-white/50 text-sm font-light leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <a href="/apply">
                            <Button variant="primary">START YOUR APPLICATION</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};