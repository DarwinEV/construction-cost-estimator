import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
// import Testimonials from "@/components/Testimonials";
// import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      {/* <CTA /> */}
      <Footer />
    </>
  );
};

export default HomePage;
