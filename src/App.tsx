import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
//import { Stats } from './components/sections/Stats'; 
import { ServicesGrid } from './components/sections/ServicesGrid';
import { Process } from './components/sections/Process';
//import { Portfolio } from './components/sections/Portfolio';
import { Pricing } from './components/sections/Pricing';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/seo/Seo';

function App() {
  return (
    <>
      <SEO
        title="Luxury Property Management & Short-Term Rentals"
        description="Lumen Homes optimizes luxury real estate revenue through high-end property management. We turn chaotic rentals into passive, high-yield assets."
      />
      <div className="bg-lumen-dark font-lato text-lumen-text antialiased overflow-x-hidden selection:bg-lumen-gold selection:text-black">

        <Navbar />

        <main>

          <Hero />
          <ServicesGrid />
          <Pricing />
          {/* <Portfolio /> 
        <Stats /> */}
          <Process />

        </main>


        <Footer />

      </div>
    </>
  );
}

export default App;