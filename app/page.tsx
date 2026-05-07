import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Bundles from '@/components/Bundles';
import Testimonials from '@/components/Testimonials';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  return (
    <main className="bg-[#081510] text-white min-h-screen">

      <Navbar />

      {/* Hero */}
      <div id="home">
        <Hero />
      </div>

      {/* Products */}
      <div
        id="shop"
        className="pt-32"
      >
        <Products />
      </div>

      {/* Bundles */}
      <div
        id="bundles"
        className="pt-32"
      >
        <Bundles />
      </div>

      {/* Testimonials */}
      <div
        id="testimonials"
        className="pt-32"
      >
        <Testimonials />
      </div>

      {/* FAQ */}
      <div
        id="faq"
        className="pt-32"
      >
        <FAQ />
      </div>

      <Footer />

      <WhatsAppButton />
      <CartDrawer />

    </main>
  );
}