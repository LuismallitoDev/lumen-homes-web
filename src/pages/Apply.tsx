import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Input, TextArea } from '../components/ui/FormElements';
import { CustomSelect } from '../components/ui/CustomSelect';
import supabase from '../hooks/supabase';

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    city?: string;
    service?: string;
    url?: string;
}

export const Apply = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formDataDefault = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        url: '',
        city: '',
        service: '',
        notes: ''
    }
    // Estado del Formulario
    const [formData, setFormData] = useState(formDataDefault);

    // Estado de Errores
    const [errors, setErrors] = useState<FormErrors>({});

    // Función para manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpiar error cuando el usuario escribe
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    // Función para manejar cambios en el CustomSelect
    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, service: value }));
        if (errors.service) setErrors(prev => ({ ...prev, service: undefined }));
    };

    // Lógica de Validación
    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!formData.firstName.trim()) { newErrors.firstName = "First name is required"; isValid = false; }
        if (!formData.lastName.trim()) { newErrors.lastName = "Last name is required"; isValid = false; }

        // Validación básica de Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Valid email address is required"; isValid = false;
        }

        if (!formData.phone.trim()) { newErrors.phone = "Phone number is required"; isValid = false; }
        if (!formData.city.trim()) { newErrors.city = "Location is required"; isValid = false; }
        if (!formData.service) { newErrors.service = "Please select a service tier"; isValid = false; }
        if (!formData.url.trim()) { newErrors.url = "Please paste a property URL"; isValid = false; }


        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);

            try {
                // 2. ENVÍO DE DATOS REAL A SUPABASE
                // La tabla se llama 'applications'
                const { error } = await supabase
                    .from('applications')
                    .insert([
                        {
                            first_name: formData.firstName,
                            last_name: formData.lastName,
                            email: formData.email,
                            phone: formData.phone,
                            city: formData.city,
                            service: formData.service,
                            url: formData.url,
                            notes: formData.notes
                        }
                    ]);

                if (error) throw error;

                // 3. ÉXITO
                alert(`Application Received! We have stored your audit request securely.`);

                //Limpiar el formulario
                setFormData(formDataDefault);

            } catch (error) {
                // 4. MANEJO DE ERRORES REAL
                console.error('Error submitting:', error);
                alert("There was a structural error submitting your application. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="bg-lumen-dark font-lato text-lumen-text antialiased overflow-x-hidden selection:bg-lumen-gold selection:text-black">
            <Navbar />

            {/* FONDO ANIMADO DE LUJO  */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-ken-burns opacity-30"></div>
                {/* Degradado oscuro para que el texto sea legible */}
                <div className="absolute inset-0 bg-linear-to-r from-lumen-dark via-lumen-dark/90 to-lumen-dark/40"></div>
            </div>

            {/* Contenedor Principal */}
            <div className="relative z-10 min-h-screen pt-32 pb-24 px-6 flex items-center">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* COLUMNA 1: EL PITCH */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-block border border-lumen-gold px-4 py-2 mb-8 w-fit backdrop-blur-sm">
                            <span className="font-mono text-lumen-gold text-[10px] tracking-widest uppercase">MEMBERSHIP APPLICATION</span>
                        </div>

                        <h1 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight drop-shadow-lg wrap-break-words">
                            BEGIN THE <br /> <span className="text-lumen-gold italic">TRANSFORMATION.</span>
                        </h1>

                        <p className="font-lato text-white/80 text-lg mb-12 font-light leading-relaxed max-w-md drop-shadow-md">
                            We are selective with the properties we manage. Submit your details for a comprehensive asset audit. If your property meets the Lumen Standard, we will contact you within 48 hours.
                        </p>
                        <div className="mt-20 flex items-center gap-6 p-6 bg-white/5 border border-white/5 backdrop-blur-sm rounded-sm">
                            <div className="w-12 h-12 rounded-full bg-lumen-gold/10 flex items-center justify-center text-lumen-gold">
                                <i className="ph-fill ph-shield-check text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="font-playfair text-white text-lg mb-1">Asset Protection</h4>
                                <p className="font-lato text-xs text-white/50 leading-relaxed">
                                    Your application is encrypted. We maintain strict confidentiality regarding all our managed assets and owners' identities.
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-white/20 pt-8 mt-auto">
                            <div className="flex gap-12">
                                <div>
                                    <div className="font-playfair text-2xl text-white mb-1">48h</div>
                                    <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Response Time</div>
                                </div>
                                <div>
                                    <div className="font-playfair text-2xl text-white mb-1">Free</div>
                                    <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Revenue Audit</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 2: FORMULARIO */}
                    <div className="bg-[#161819]/90 backdrop-blur-md p-10 md:p-14 border border-white/10 relative shadow-2xl">
                        {/* Esquina Dorada Decorativa */}
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-lumen-gold/30"></div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-1">
                                    <Input name="firstName" label="First Name" placeholder="John" value={formData.firstName} onChange={handleChange} />
                                    {errors.firstName && <span className="text-red-400 text-[10px] font-mono">{errors.firstName}</span>}
                                </div>
                                <div className="space-y-1">
                                    <Input name="lastName" label="Last Name" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                                    {errors.lastName && <span className="text-red-400 text-[10px] font-mono">{errors.lastName}</span>}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Input name="email" label="Email Address" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                                {errors.email && <span className="text-red-400 text-[10px] font-mono">{errors.email}</span>}
                            </div>

                            <div className="space-y-1">
                                <Input name="phone" label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                                {errors.phone && <span className="text-red-400 text-[10px] font-mono">{errors.phone}</span>}
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <h3 className="font-montserrat text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Property Details</h3>

                                <div className="space-y-8">
                                    <div className="space-y-1">
                                        <Input name="url" label="Property URL (Airbnb/Zillow)" placeholder="https://..." value={formData.url} onChange={handleChange} />
                                        {errors.url && <span className="text-red-400 text-[10px] font-mono">{errors.url}</span>}

                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-1">
                                            <Input name="city" label="City / Location" placeholder="e.g. Miami, FL" value={formData.city} onChange={handleChange} />
                                            {errors.city && <span className="text-red-400 text-[10px] font-mono">{errors.city}</span>}
                                        </div>

                                        {/* CUSTOM SELECT */}
                                        <CustomSelect
                                            label="Service of Interest"
                                            value={formData.service}
                                            onChange={handleSelectChange}
                                            error={errors.service}
                                            options={[
                                                { value: 'blueprint', label: 'Lumen Blueprint (Setup)' },
                                                { value: 'connect', label: 'Lumen Connect (Remote)' },
                                                { value: 'signature', label: 'Lumen Signature (Full)' },
                                                { value: 'unsure', label: 'Not sure yet' }
                                            ]}
                                        />
                                    </div>

                                    <TextArea name="notes" label="Additional Notes" placeholder="Tell us about your goals..." value={formData.notes} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button variant="primary" className="w-full py-4" disabled={isSubmitting}>
                                    {isSubmitting ? 'VALIDATING...' : 'SUBMIT APPLICATION'}
                                </Button>
                                <p className="text-center font-mono text-[9px] text-white/30 mt-4 uppercase">
                                    By clicking submit, you agree to our privacy policy.
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};