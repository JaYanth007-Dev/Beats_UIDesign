import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import AOS from "aos";
import "aos/dist/aos.css";
import CompanyLogos from "./components/CompanyLogos";
import Specifications from "./components/Specifications";
import CaseSection from "./components/CaseSection";
import BuyNowSection from "./components/BuyNowSection";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import { useEffect } from 'react';
import ProductsPage from './components/ProductPage';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';
import LoginPage from './components/LoginAndSignup';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
      <div className="min-h-screen bg-[#0F0F10] text-white">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CompanyLogos />
                <Specifications />
                <CaseSection />
                <BuyNowSection />
              </>
            }
          />

          <Route path="/products" element={<ProductsPage />} />

          <Route
            path="/cart"
            element={<CartPage/>}
          />

          <Route
            path="/login"
            element={<LoginPage/> }
          />
          <Route
            path="/payments"
            element={ <PaymentPage/> }
          />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
