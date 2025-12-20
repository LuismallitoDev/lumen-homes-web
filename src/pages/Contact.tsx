import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Input, TextArea } from '../components/ui/FormElements';
import supabase from '../hooks/supabase';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 1. Estado para los campos del formulario
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    // 2. Configuración de WhatsApp
    const whatsappNumber = "+57 3233353753";
    const whatsappMessage = "Hello, I am interested in Lumen Homes management services. I would like to speak with a concierge.";
    // Creamos el link codificado para que funcione en todos los navegadores
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Manejador de cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 3. Envío a Supabase (Tabla 'messages')
            const { error } = await supabase
                .from('messages')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            alert("Message sent successfully. Our concierge team will reach out shortly.");

            // Limpiar formulario
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });

        } catch (error) {
            console.error('Error sending message:', error);
            alert("Error connecting to the server. Please try WhatsApp for immediate assistance.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-lumen-dark font-lato text-lumen-text antialiased selection:bg-lumen-gold selection:text-black">
            <Navbar />

            {/* HEADER SIMPLE */}
            <div className="pt-32 pb-12 px-6 text-center">
                <span className="font-mono text-lumen-gold text-[10px] tracking-[0.3em] uppercase block mb-4">CONCIERGE</span>
                <h1 className="font-playfair text-white text-4xl md:text-5xl">CONTACT US</h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* COLUMNA IZQUIERDA: INFORMACIÓN DIRECTA */}
                <div>
                    <p className="font-lato text-white/60 text-lg mb-12 font-light leading-relaxed">
                        Whether you are a property owner looking for management or a guest seeking a reservation, our team is at your disposal.
                    </p>

                    <div className="space-y-12">
                        {/* WHATSAPP (PRIORITARIO) */}
                        <div className="group">
                            <h3 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                                <i className="ph-fill ph-whatsapp-logo text-lumen-gold text-lg"></i> WhatsApp Priority
                            </h3>
                            <p className="text-white/50 text-sm mb-4">For immediate assistance and booking inquiries.</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-white border-b border-lumen-gold pb-1 hover:text-lumen-gold transition-colors"
                            >
                                Chat with Concierge <i className="ph ph-arrow-right ml-2 text-xs"></i>
                            </a>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <h3 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                                <i className="ph-fill ph-envelope-simple text-lumen-gold text-lg"></i> Direct Email
                            </h3>
                            <a href="mailto:info@lumenhomes.com" className="text-2xl font-playfair text-white hover:text-lumen-gold transition-colors">
                                info@lumenhomes.com
                            </a>
                        </div>

                        {/* OFICINA */}
                        <div>
                            <h3 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                                <i className="ph-fill ph-map-pin text-lumen-gold text-lg"></i> Headquarters
                            </h3>
                            <address className="not-italic text-white/60 font-light">
                                Cra 47D #77 - 111 Laureles, Estadio<br />
                                Medellin, Antioquia 050032<br />
                                Republic of Colombia
                            </address>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: FORMULARIO */}
                <div className="bg-[#161819] p-10 border border-white/5 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-lumen-gold/20"></div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="First Name" placeholder="Jane" required onChange={handleChange} />
                            <Input label="Last Name" placeholder="Doe" required onChange={handleChange} />
                        </div>
                        <Input label="Email Address" type="email" placeholder="jane@example.com" required onChange={handleChange} />
                        <Input label="Phone (Optional)" type="tel" placeholder="+1..." onChange={handleChange} />

                        <TextArea label="How can we help?" placeholder="I'm interested in..." required onChange={handleChange} />

                        <Button variant="primary" className="w-full" disabled={isSubmitting} >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                        </Button>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    );
};