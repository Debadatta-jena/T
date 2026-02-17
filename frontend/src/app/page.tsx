import { Hero } from '@/components/sections/Hero';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CompanyStats } from '@/components/sections/CompanyStats';
import { Testimonials } from '@/components/sections/Testimonials';
import { WebsiteAgeSection } from '@/components/sections/WebsiteAgeSection';
import { IndustriesServed } from '@/components/sections/IndustriesServed';
import { CallToAction } from '@/components/sections/CallToAction';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StructuredData } from '@/components/seo/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <CompanyStats />
        <WhyChooseUs />
        <WebsiteAgeSection />
        <Testimonials />
        <IndustriesServed />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

