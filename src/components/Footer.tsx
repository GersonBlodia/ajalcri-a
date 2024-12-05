"use client";

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo y Descripción */}
        <div className="text-center md:text-left">
          <div className="text-3xl font-bold mb-4">Pharmacy</div>
          <p className="text-gray-400 text-sm">La farmacia de confianza con productos de salud de alta calidad.</p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="hero" spy={true} smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="products" spy={true} smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © 2024 Jhohannes. Todos los derechos reservados.
      </div>
    </footer>
  );
};
