import ScrollReveal from '@/components/ScrollReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechBand from '@/components/TechBand';
import ParaQuien from '@/components/ParaQuien';
import Incluye from '@/components/Incluye';
import Rendimiento from '@/components/Rendimiento';
import Comparativa from '@/components/Comparativa';
import Planes from '@/components/Planes';
import Garantia from '@/components/Garantia';
import Casos from '@/components/Casos';
import Proceso from '@/components/Proceso';
import Faq from '@/components/Faq';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import BotonWhatsApp from '@/components/BotonWhatsApp';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="inicio">
        <Hero />
        <TechBand />
        <Casos />
        <ParaQuien />
        <Incluye />
        <Rendimiento />
        <Comparativa />
        <Planes />
        <Garantia />
        {/* TODO: reactivar <Testimonios /> cuando haya testimonios reales. */}
        <Proceso />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <BotonWhatsApp />
    </>
  );
}
