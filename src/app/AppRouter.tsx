import React from "react";
import { Routes, Route } from "react-router-dom";
/*aqui importamos las paginas o vistas que vamos a usar */
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
const AppRouter = () => {
  return (
    <Routes>
      {/*<Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />*/}
      {/*Aqui ponemos una ruta comodin por si ponene otra ruta que no esta */}
      {/*<Route
        path="*"
        element={
          <h1 className="text-center mt-10">404-Pagina No Encontrada</h1>
        }
      />*/}
    </Routes>
  );
};
export default AppRouter;
