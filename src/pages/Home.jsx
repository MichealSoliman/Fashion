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
import BrandStories from './BrandStories';
import ScrollToTop from './ScrollToTop';
import FAQSection from './FAQ';
import ContactUs from './Contact-Us';



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
      <BrandStories />
      <FAQSection />
      <FashionShow />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;

