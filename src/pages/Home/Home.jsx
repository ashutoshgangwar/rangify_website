import React from 'react';


import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTASection from '../../components/CTASection/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection fullWidth />
      <WhyChooseUs fullWidth />
      <Testimonials fullWidth />
      <CTASection fullWidth />
    </>
  );
};

export default Home;
