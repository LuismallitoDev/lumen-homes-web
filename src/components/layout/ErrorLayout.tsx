import React from "react";
import { Button } from "../ui/Button";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

interface ErrorLayoutProps {
    code: string;
    title: string;
    description: string;
    techDetails?: string;
    actionLabel?: string;
    onAction?: () => void;
}

export const ErrorLayout: React.FC<ErrorLayoutProps> = ({
    code,
    title,
    description,
    techDetails,
    actionLabel = "RETURN TO LOBBY",
    onAction,
}) => {
    return (
        <div className="bg-lumen-dark min-h-screen flex flex-col font-lato text-lumen-text antialiased ">
            <Navbar />
            <main className="grow flex items-center justify-center relative overflow-hidden px-6">
                {/* Background Texture (Abstract Blueprint feel) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="absolute inset-0 bg-linear-to-b from-lumen-dark via-transparent to-lumen-dark"></div>

                <div className="relative z-10 max-w-2xl w-full text-center">
                    {/* Decorative Top Line */}
                    <div className="h-16 w-px bg-lumen-gold mx-auto mb-8"></div>

                    {/* Error Code */}
                    <h1 className="font-playfair text-[8rem] md:text-[10rem] leading-none text-lumen-gold/20 select-none">
                        {code}
                    </h1>

                    {/* The Content Card */}
                    <div className="bg-lumen-card/80 backdrop-blur-sm border border-white/10 p-10 md:p-16 -mt-12 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lumen-dark px-4 py-1 border border-lumen-gold/30">
                            <span className="font-mono text-lumen-gold text-[10px] tracking-[0.3em] uppercase">SYSTEM ALERT</span>
                        </div>

                        <h2 className="font-montserrat text-white text-2xl md:text-3xl font-bold tracking-[0.2em] mb-6 uppercase">
                            {title}
                        </h2>

                        <p className="font-lato text-white/60 text-lg font-light leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* Technical Detail (The "Architect" touch) */}
                        {techDetails && (
                            <div className="font-mono text-xs text-white/30 border-t border-white/5 pt-4 mb-8">
                                ERR_REF: {techDetails}
                            </div>
                        )}

                        <Link to="/">
                            <Button variant="primary" onClick={onAction}>
                                {actionLabel}
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}