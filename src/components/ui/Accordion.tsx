import React from 'react';

interface AccordionItemProps {
    title: string;
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick, children }) => {
    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
                <span className={`font-montserrat text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-lumen-gold' : 'text-white group-hover:text-lumen-gold'}`}>
                    {title}
                </span>
                <i className={`ph ph-caret-down text-lumen-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <div className="font-lato text-white/50 text-sm leading-relaxed pr-8">
                    {children}
                </div>
            </div>
        </div>
    );
};