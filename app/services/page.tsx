import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/services/Hero';
import ServicesAbout from '@/components/services/About';
import ServicesHowItWorks from '@/components/services/HowItWorks';
import ServicesContact from '@/components/services/Contact';

export default function Services() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <ServicesHero />
      </div>
      <div className="border-t border-black w-full" />
      <div className="bg-cream">
      <div className="max-w-6xl mx-auto">
        <ServicesAbout />
      </div>
      </div>
      <div className="border-t border-black w-full" />
      <div className="max-w-6xl mx-auto">
        <ServicesHowItWorks />
        </div>
      <div className="border-t border-black w-full" />
      <div className="bg-cream">
      <div className="max-w-6xl mx-auto">
        <ServicesContact />
      </div>
      </div>
    </main>
  );
} 