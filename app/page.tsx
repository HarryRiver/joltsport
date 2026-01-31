import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PromoSection from '@/components/PromoSection';
import Collections from '@/components/Collections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <main className="flex flex-col gap-12 pb-12">
        <Hero />
        <PromoSection />
        <Collections />
      </main>
      <Footer />
    </div>
  );
}
