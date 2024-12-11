"use client"
import React, { useState } from 'react';
import { Link } from 'react-scroll';
export const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
  return (
    <header className="py-4 px-6 flex justify-between items-center">
    <div className="text-2xl font-bold">
      Petro<span className="text-yellow-500">Perú</span>
    </div>
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Contacto
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-300 cursor-pointer"
          >
            Grafica
          </Link>
        </li>
      </ul>
    </nav>
    <button
      className="md:hidden focus:outline-none"
      onClick={toggleMenu}
    >
      Menú
    </button>
    
  </header>

  )
}
