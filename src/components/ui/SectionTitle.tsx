import React from 'react';

interface SectionTitleProps {
    uptitle: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ uptitle, title, subtitle, centered = true }) => {
    return (
        <div className={`mb-20 ${centered ? 'text-center' : 'text-left'}`}>
            <span className="font-mono text-lumen-gold text-[10px] tracking-[0.3em] uppercase block mb-6">{uptitle}</span>
            <h2 className="font-playfair text-white text-4xl md:text-5xl mb-6 tracking-wide leading-tight">{title}</h2>
            {subtitle && <p className="font-lato text-white/50 text-sm tracking-wide max-w-2xl mx-auto">{subtitle}</p>}
        </div>
    );
};