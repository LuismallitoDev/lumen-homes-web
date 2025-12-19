import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const Privacy = () => {
  return (
    <div className="bg-lumen-dark font-lato text-lumen-text antialiased selection:bg-lumen-gold selection:text-black">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-playfair text-white text-3xl md:text-5xl mb-4">Privacy Policy</h1>
        <p className="font-mono text-lumen-gold text-xs uppercase tracking-widest mb-12">Last Updated: December 2025</p>

        <div className="space-y-12 text-white/70 font-light leading-relaxed">
            <section>
                <h2 className="text-white font-playfair text-2xl mb-4">1. Information We Collect</h2>
                <p>
                    Lumen Homes collects information to provide better services to our users. We collect information in the following ways: 
                    information you give us (such as name, email, and property details during application), and information we get from your use of our services.
                </p>
            </section>

            <section>
                <h2 className="text-white font-playfair text-2xl mb-4">2. How We Use Information</h2>
                <p className="mb-4">
                    We use the information we collect to provide, maintain, protect and improve our services, to develop new ones, and to protect Lumen Homes and our users.
                </p>
                <p>
                    We may use your email address to inform you about our services, such as letting you know about upcoming changes or improvements.
                </p>
            </section>

            <section>
                <h2 className="text-white font-playfair text-2xl mb-4">3. Information Security</h2>
                <p>
                    We work hard to protect Lumen Homes and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. 
                    We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.
                </p>
            </section>
            
            <section>
                <h2 className="text-white font-playfair text-2xl mb-4">4. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at info@lumenhomes.com.
                </p>
            </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};