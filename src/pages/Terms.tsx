import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const Terms = () => {
    return (
        <div className="bg-lumen-dark font-lato text-lumen-text antialiased selection:bg-lumen-gold selection:text-black">
            <Navbar />

            <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
                <h1 className="font-playfair text-white text-3xl md:text-5xl mb-4">Terms of Service</h1>
                <p className="font-mono text-lumen-gold text-xs uppercase tracking-widest mb-12">Last Updated: December 2025</p>

                <div className="space-y-12 text-white/70 font-light leading-relaxed">
                    <section>
                        <h2 className="text-white font-playfair text-2xl mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Lumen Homes website and services, you accept and agree to be bound by the terms and provision of this agreement.
                            In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-playfair text-2xl mb-4">2. Service Description</h2>
                        <p>
                            Lumen Homes provides luxury property management services. The detailed scope of work for each service tier (Blueprint, Connect, Signature)
                            is governed by the specific management agreement signed by the property owner.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-playfair text-2xl mb-4">3. Intellectual Property</h2>
                        <p>
                            All content on this site, including text, graphics, logos, and images, is the property of Lumen Homes and protected by international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-playfair text-2xl mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall Lumen Homes be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption)
                            arising out of the use or inability to use the materials on Lumen Homes' website.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};