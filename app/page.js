import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col items-center font-sans text-gray-800 scroll-smooth">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
