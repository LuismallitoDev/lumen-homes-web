import { pricingTiers } from "../../data/pricing";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

export const Pricing = () => {
    return (
        <section id="apply" className="py-32 px-6 bg-lumen-dark">
            <div className="max-w-7xl mx-auto">
                <SectionTitle uptitle="The 3 Pillars" title="CHOOSE YOUR PATH" subtitle="Select the service tier that aligns with your investment goals." />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {pricingTiers.map((tier) => (
                        <div key={tier.id} className={`border p-10 flex flex-col h-full bg-lumen-card transition-all relative ${tier.isPopular ? 'border-lumen-gold shadow-2xl shadow-black/50 transform lg:-translate-y-4' : 'border-white/10 hover:border-white/20'}`}>
                            {tier.isPopular && (
                                <div className="absolute -top-3 right-8 bg-lumen-gold text-black font-montserrat text-[9px] font-bold px-3 py-1 uppercase tracking-widest">Most Popular</div>
                            )}
                            <div className="font-mono text-lumen-gold text-[10px] mb-6">TIER {tier.id}</div>
                            <h3 className="font-playfair text-white text-2xl mb-2">{tier.title}</h3>
                            <p className="font-lato italic text-white/50 text-sm mb-8">{tier.subtitle}</p>

                            <ul className="space-y-4 mb-12 font-lato text-sm text-white/70 font-light grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start"><i className="ph ph-check text-lumen-gold mr-3 mt-0.5"></i> {feature}</li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-white/10 mt-auto">
                                <div className="font-playfair font-bold text-3xl text-white">{tier.price}</div>
                                <div className="font-mono text-[10px] text-white/40 mt-1 uppercase">{tier.period}</div>
                                <div className="mt-8 w-full"><Link to={tier.href}><Button variant={tier.isPopular ? 'primary' : 'outline'} className="w-full">{tier.cta}</Button></Link></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};