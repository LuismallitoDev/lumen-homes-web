import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
    const baseStyles = "px-8 py-3 font-montserrat text-[11px] font-bold tracking-[0.15em] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer inline-flex items-center justify-center";
    const variants = {
        primary: "bg-lumen-gold text-black hover:bg-white",
        outline: "border border-white/20 text-white hover:border-lumen-gold hover:text-lumen-gold"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};