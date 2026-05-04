import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import LogoTicker from '@/components/sections/LogoTicker';
import Pricing from '@/components/sections/Pricing';
import ProductShowcase from '@/components/sections/ProductShowcase';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
    </div>
  );
}
