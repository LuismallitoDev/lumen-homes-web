import { globalStats } from "../../data/portafolio";

export const Stats = () => {
    return (
        <section className="border-y border-white/5 bg-[#161819] py-16 relative z-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
                {globalStats.map((stat, i) => (
                    <div key={i} className="group cursor-default">
                        <div className="font-playfair text-lumen-gold text-4xl mb-2 group-hover:scale-110 transition-transform duration-500">
                            {stat.value}
                        </div>
                        <div className="font-montserrat text-white/60 text-[10px] tracking-[0.2em] uppercase">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};