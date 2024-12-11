"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { RiskDashboard } from './Dashboard';
import PetroPeruEngineersCarousel from './PetroPeruEngineersCarousel';
import { ContactUsForm } from './ContactUsForm';
import { FaHome, FaConciergeBell, FaUsers, FaEnvelope, FaChartBar } from 'react-icons/fa';
export const PetroPeruWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white" onClick={handleClickOutside}>
      {/* Header */}
      <header className="py-4 px-6 bg-blue-900 text-white flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <div className="text-3xl font-bold flex items-center gap-2">
        <span>Petro</span><span className="text-yellow-500">Perú</span>
      </div>

      {/* Nav Bar (desktop) */}
      <nav className="hidden md:block">
        <div className="flex gap-8">
          <Link to="hero" spy smooth duration={500} className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 cursor-pointer">
            <FaHome size={20} />
            <span>Inicio</span>
          </Link>
          <Link to="services" spy smooth duration={500} className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 cursor-pointer">
            <FaConciergeBell size={20} />
            <span>Servicios</span>
          </Link>
          <Link to="about" spy smooth duration={500} className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 cursor-pointer">
            <FaUsers size={20} />
            <span>Nosotros</span>
          </Link>
          <Link to="contact" spy smooth duration={500} className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 cursor-pointer">
            <FaEnvelope size={20} />
            <span>Contacto</span>
          </Link>
          <Link to="grafica" spy smooth duration={500} className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 cursor-pointer">
            <FaChartBar size={20} />
            <span>Gráfica</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="text-2xl">☰</div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-gray-700 py-4 px-6 space-y-4 fixed top-0 left-0 w-full h-full z-10"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="block text-gray-300 hover:text-yellow-500 cursor-pointer"
              onClick={toggleMenu}
            >
              <FaHome size={20} /> Inicio
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="block text-gray-300 hover:text-yellow-500 cursor-pointer"
              onClick={toggleMenu}
            >
              <FaConciergeBell size={20} /> Servicios
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="block text-gray-300 hover:text-yellow-500 cursor-pointer"
              onClick={toggleMenu}
            >
              <FaUsers size={20} /> Nosotros
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="block text-gray-300 hover:text-yellow-500 cursor-pointer"
              onClick={toggleMenu}
            >
              <FaEnvelope size={20} /> Contacto
            </Link>
            <Link
              to="grafica"
              spy={true}
              smooth={true}
              duration={500}
              className="block text-gray-300 hover:text-yellow-500 cursor-pointer"
              onClick={toggleMenu}
            >
              <FaChartBar size={20} /> Gráfica
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>

      {/* Hero */}
      <section
        id="hero"
        className="py-10 px-6 bg-gradient-to-r from-blue-800 to-blue-900 flex flex-col gap-6 xl:flex-row items-center w-full xl:w-[80%] mx-auto rounded-lg shadow-2xl"
      >
        <div className="w-full xl:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Bienvenidos a PetroPerú
          </h1>
          <p className="text-lg text-white mb-2">
            Líder en energía y desarrollo sostenible para el Perú.
          </p>
          <p className="text-lg text-white mb-2">
            Nos dedicamos a brindar soluciones energéticas de calidad, promoviendo el bienestar económico y social del país.
          </p>
          <button className="bg-yellow-500 mt-4 text-blue-900 py-3 px-6 rounded-full font-semibold transition-all hover:bg-yellow-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full">
            Conoce Más
          </button>
        </div>

        <div className="w-full xl:w-1/2 flex justify-end mt-6 md:mt-0">
          <Image
            src="/petro-peru.jpg"
            alt="Planta de PetroPerú"
            width={500}
            height={500}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      </section>

      {/*Dashboard */}
     
      {/* Servicios */}
      <section id="services" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="h-[200px] w-full mb-4 overflow-hidden rounded-lg">
              <Image
                src="/product/servicio1.jpg"
                alt="Producción de Hidrocarburos"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Producción de Hidrocarburos</h3>
            <p>Exploración, extracción y refinamiento de petróleo y gas natural.</p>
          </div>

          {/* Servicio 2 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="h-[200px] w-full mb-4 overflow-hidden rounded-lg">
              <Image
                src="/product/servicio2.jpg"
                alt="Distribución"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Distribución</h3>
            <p>Red de estaciones de servicio para abastecimiento eficiente.</p>
          </div>

          {/* Servicio 3 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="h-[200px] w-full mb-4 overflow-hidden rounded-lg">
              <Image
                src="/product/servicio3.avif"
                alt="Sostenibilidad"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Sostenibilidad</h3>
            <p>Programas ambientales y desarrollo comunitario.</p>
          </div>
        </div>
      </div>
    </section>
      <RiskDashboard/>
      {/* formulario */}
      <PetroPeruEngineersCarousel/>


      <section id="contact" className="py-16 px-6 bg-white text-blue-500 transition-all duration-500">
         <ContactUsForm/>
      </section>
    </div>
  );
};
