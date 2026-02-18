import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto px-6 md:px-20 py-12">
      <div className="flex justify-between items-center text-sm md:text-lg">
        
        <div className="space-y-4">
          <h3 className="text-2xl text-gray-200 font-semibold">
            RANU GAURAV
          </h3>

          <div className="flex gap-6 text-gray-400 text-4xl">
            <a href="https://github.com/RanuGaurav05?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <FaGithubSquare />
            </a>
            <a href="https://www.instagram.com/ranu.gaurav05/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        <p className="text-gray-400">
          © 2026 RANU GAURAV
        </p>
      </div>
    </footer>
  );
};

export default Footer;
