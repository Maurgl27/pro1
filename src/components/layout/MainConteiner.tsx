import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
const MainConteiner = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* Contenedor para el contenido dinámico (blog, etc.) */}
      {children}
    </>
  );
};
export default MainConteiner;
