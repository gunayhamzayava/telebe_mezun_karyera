import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import WhatsappFloatingButton from "../WhatsappFloatingButton";
import AiButton from "../AiButton";

const Layout = () => {
  return (
    <div className="page">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsappFloatingButton/>
      <AiButton/>
    </div>
  );
};

export default Layout;
