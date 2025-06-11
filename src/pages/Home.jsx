import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      
      <Footer />
    </div>
  );
};

export default Home;

