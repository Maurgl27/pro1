import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} Mauricio Dev - construido con React &
          TypeScript
        </p>
      </div>
    </footer>
  );
};
export default Footer;
