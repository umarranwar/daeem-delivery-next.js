import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import Ecommerce from "../components/Ecommerce";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Login from "@/components/Login";

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Section />
      <Ecommerce />
      <Services />
      <Footer />
    </div>
  );
}