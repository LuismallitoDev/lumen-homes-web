import { Helmet } from 'react-helmet-async';
import logoImage from '../../assets/images/Logo Negative Transparent BG.png';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

export const SEO = ({ title, description, canonical }: SEOProps) => {
    const currentUrl = window.location.href;
    return (
        <Helmet>
            {/* 1. LABELS */}
            <title>{`${title} | Lumen Homes`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical || currentUrl} />

            {/* 2. OPEN GRAPH  */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="Lumen Homes" />
            <meta property="og:image" content={logoImage} /> 
            {/* 3. TWITTER CARDS */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};