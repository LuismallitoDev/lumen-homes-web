import React, { useState, useRef, useEffect } from 'react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    error?: string; // Para mostrar errores de validación
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, value, onChange, error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Cerrar el dropdown si se hace click fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedLabel = options.find((opt) => opt.value === value)?.label || "Select an option";

    return (
        <div className="flex flex-col space-y-2 relative" ref={dropdownRef}>
            <label className="font-mono text-[10px] text-lumen-gold uppercase tracking-[0.2em]">
                {label}
            </label>

            {/* Botón Principal (Trigger) */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-transparent border-b ${error ? 'border-red-500' : 'border-white/10'} py-3 text-white font-lato cursor-pointer flex justify-between items-center transition-colors hover:border-lumen-gold`}
            >
                <span className={value ? "text-white" : "text-white/30"}>{selectedLabel}</span>
                <i className={`ph ph-caret-down text-lumen-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </div>

            {/* Lista Desplegable */}
            <div className={`absolute top-full left-0 w-full bg-lumen-card border border-white/10 z-50 transition-all duration-300 origin-top shadow-2xl ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => {
                            onChange(option.value);
                            setIsOpen(false);
                        }}
                        className={`px-4 py-3 text-sm cursor-pointer transition-colors border-l-2 ${value === option.value ? 'border-lumen-gold bg-white/5 text-white' : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'}`}
                    >
                        {option.label}
                    </div>
                ))}
            </div>

            {/* Mensaje de Error */}
            {error && <span className="text-red-400 text-[10px] font-mono mt-1">{error}</span>}
        </div>
    );
};