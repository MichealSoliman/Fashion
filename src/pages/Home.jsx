import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import Footer from './Footer';
import StyleQuiz from './StyleQuiz';
import StyleDay from './StyleDay';
import Luxury from './Luxury';
import FashionShow from './FashionShow';
import FashionStories from './FashionStories';
import NewArrivals from './NewArrivals';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <StyleQuiz />
    <StyleDay />
    <FashionStories />
    <Luxury />
    <NewArrivals />
    <FashionShow />
      <Footer />
    </div>
  );
};

export default Home;

