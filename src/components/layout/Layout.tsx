import React from "react";
import Navbar from "./Navbar";
import MainConteiner from "./MainConteiner";
import Footer from "./Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/*Aqui entra el contenido de la pagina osea lo que pasamos al layout */}
      <MainConteiner>{children}</MainConteiner>
      <Footer />
    </div>
  );
};
export default Layout;
