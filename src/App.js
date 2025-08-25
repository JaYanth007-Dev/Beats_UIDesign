import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import AOS from "aos";
import "aos/dist/aos.css"; 
import CompanyLogos from "./components/CompanyLogos";
import Specifications from "./components/Specifications";
import CaseSection from "./components/CaseSection";
import BuyNowSection from "./components/BuyNowSection";
import ProductSelection from "./components/ProductSelection";

import Footer from "./components/Footer";
import { useEffect } from 'react';
function App() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // animation duration in ms
       once: true, // whether animation should happen only once
     });
   }, []);
  return (
    <div className="min-h-screen bg-[#0F0F10] text-white">
      <Header />
      <Hero />
      <CompanyLogos />
      <Specifications/>
      <Footer />
    </div>
  );
}

export default App;
