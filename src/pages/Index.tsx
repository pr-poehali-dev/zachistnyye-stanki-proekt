import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import DeliverySection from '@/components/DeliverySection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('catalog');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'main' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'catalog' && <ProductCatalog setActiveSection={setActiveSection} />}
      {activeSection === 'delivery' && <DeliverySection />}
      {activeSection === 'contacts' && <ContactsSection />}
      
      <Footer />
    </div>
  );
}