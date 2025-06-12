import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import Footer from './Footer';
import StyleQuiz from './StyleQuiz';
import StyleDay from './StyleDay';
import Luxury from './Luxury';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <StyleQuiz />
    <StyleDay />
    <Luxury />
      <Footer />
    </div>
  );
};

export default Home;

