// src/data/services.ts

// 1. Añadimos 'icon' a la interfaz
export interface ServiceScopeItem {
    title: string;
    desc: string;
    icon: string; // Nombre del icono de Phosphor (ej: 'ph-camera')
}

export interface ServiceDetailData {
    title: string;
    subtitle: string;
    description: string;
    price: string;
    period: string;
    heroImage: string;
    thesis: string;
    scope: ServiceScopeItem[];
}

export const serviceData: Record<string, ServiceDetailData> = {
    'blueprint': {
        title: "LUMEN BLUEPRINT",
        subtitle: "THE FOUNDATION",
        description: "For owners who desire the Lumen aesthetic and revenue strategy, but wish to manage the day-to-day operations themselves.",
        price: "$2,500",
        period: "One-time investment",
        heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        thesis: "A property without a strategy is just a building. The Blueprint is an architectural plan for your revenue. We build the digital asset, you run the show.",
        scope: [
            {
                title: "Architectural Photography",
                desc: "We deploy a specialized interior photographer...",
                icon: "ph-fill ph-camera"
            },
            {
                title: "Copywriting & Storytelling",
                desc: "We craft a compelling narrative...",
                icon: "ph-fill ph-pen-nib"
            },
            {
                title: "Multi-Channel Distribution",
                desc: "Complete setup on Airbnb...",
                icon: "ph-fill ph-share-network"
            },
            {
                title: "Dynamic Pricing Engine",
                desc: "Implementation and calibration...",
                icon: "ph-fill ph-chart-line-up"
            },
            {
                title: "Digital Guest Guidebook",
                desc: "Creation of a custom app-based guidebook...",
                icon: "ph-fill ph-book-open-text"
            },
            {
                title: "Operational Playbook",
                desc: "A comprehensive PDF manual...",
                icon: "ph-fill ph-clipboard-text"
            }
        ]
    },
    'connect': {
        title: "LUMEN CONNECT",
        subtitle: "THE CONTROL CENTER",
        description: "For investors who view their property purely as a financial asset. We handle the digital guest experience; you handle the physical asset.",
        price: "15%",
        period: "of Gross Revenue",
        heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
        thesis: "Distance should not be a barrier to revenue. Lumen Connect acts as your remote headquarters, handling 100% of the guest communication and revenue management.",
        scope: [
            {
                title: "24/7 Guest Communication",
                desc: "Our team handles all pre-booking inquiries...",
                icon: "ph-fill ph-chats-circle"
            },
            {
                title: "Revenue Management",
                desc: "Daily human review and adjustment...",
                icon: "ph-fill ph-currency-dollar"
            },
            {
                title: "Review Management",
                desc: "We write strategic, professional reviews...",
                icon: "ph-fill ph-star-half"
            },
            {
                title: "SEO Optimization",
                desc: "Monthly refreshment of listing titles...",
                icon: "ph-fill ph-magnifying-glass"
            },
            {
                title: "Dispute Resolution",
                desc: "Full handling of AirCover claims...",
                icon: "ph-fill ph-gavel"
            },
            {
                title: "Financial Reporting",
                desc: "A detailed profit and loss statement...",
                icon: "ph-fill ph-chart-line"
            }
        ]
    },
    'signature': {
        title: "LUMEN SIGNATURE",
        subtitle: "THE PASSIVE ASSET",
        description: "The complete hospitality experience. We take the keys, and you receive the wire transfers. Hotel-grade management for luxury estates.",
        price: "25%",
        period: "of Gross Revenue",
        heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop",
        thesis: "True luxury is the absence of worry. Lumen Signature transforms your real estate into a hands-off, high-yield financial instrument.",
        scope: [
            {
                title: "5-Star Housekeeping",
                desc: "End-to-end management of our vetted cleaning teams...",
                icon: "ph-fill ph-sparkle"
            },
            {
                title: "Inventory Management",
                desc: "Automatic tracking and restocking...",
                icon: "ph-fill ph-package"
            },
            {
                title: "Maintenance Coordination",
                desc: "From changing lightbulbs to complex HVAC repairs...",
                icon: "ph-fill ph-wrench"
            },
            {
                title: "In-Person Inspections",
                desc: "Regular, detailed asset audits...",
                icon: "ph-fill ph-clipboard-text"
            },
            {
                title: "Guest Concierge",
                desc: "Arranging luxury services...",
                icon: "ph-fill ph-call-bell"
            },
            {
                title: "Emergency Response",
                desc: "We act as the primary local contact point...",
                icon: "ph-fill ph-siren"
            }
        ]
    }
};