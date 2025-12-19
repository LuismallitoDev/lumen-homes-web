import React from 'react';

// --- INPUT DE TEXTO ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className="font-mono text-[10px] text-lumen-gold uppercase tracking-[0.2em]">
                {label}
            </label>
            <input
                className={`bg-none  border-b border-white/10 py-3 text-white font-lato focus:outline-none focus:border-lumen-gold  transition-placeholder-colors transition-colors transition-border placeholder-white/20 ${className} hover:border-lumen-gold `}
                {...props}
            />
        </div>
    );
};

// --- SELECTOR (DROPDOWN) ---
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className="font-mono text-[10px] text-lumen-gold uppercase tracking-[0.2em]">
                {label}
            </label>
            <div className="relative">
                <select
                    className={`w-full bg-transparent border-b border-white/10 py-3 text-white font-lato focus:outline-none focus:border-lumen-gold transition-colors appearance-none cursor-pointer ${className}`}
                    {...props}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-lumen-card text-white">
                            {opt.label}
                        </option>
                    ))}
                </select>
                {/* Icono de flecha custom */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                    <i className="ph ph-caret-down"></i>
                </div>
            </div>
        </div>
    );
};

// --- TEXTAREA ---
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className="font-mono text-[10px] text-lumen-gold uppercase tracking-[0.2em]">
                {label}
            </label>
            <textarea
                className={`bg-transparent border-b border-white/10 py-3 text-white font-lato focus:outline-none focus:border-lumen-gold transition-colors placeholder-white/20 min-h-25 resize-none ${className}`}
                {...props}
            />
        </div>
    );
};