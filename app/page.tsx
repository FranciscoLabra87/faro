import ScrollReveal from '@/components/ScrollReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechBand from '@/components/TechBand';
import ParaQuien from '@/components/ParaQuien';
import Incluye from '@/components/Incluye';
import Ficha from '@/components/Ficha';
import Rendimiento from '@/components/Rendimiento';
import Comparativa from '@/components/Comparativa';
import Planes from '@/components/Planes';
import Garantia from '@/components/Garantia';
import Casos from '@/components/Casos';
import Testimonios from '@/components/Testimonios';
import Proceso from '@/components/Proceso';
import Promesa from '@/components/Promesa';
import Faq from '@/components/Faq';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main id="inicio">
        <Hero />
        <TechBand />
        <ParaQuien />
        <Incluye />
        <Ficha />
        <Rendimiento />
        <Comparativa />
        <Planes />
        <Garantia />
        <Casos />
        <Testimonios />
        <Proceso />
        <Promesa />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
