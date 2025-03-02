import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingCart from "../components/Cart/FloatingCart"; 

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingCart /> 
    </>
  );
};

export default Layout;
