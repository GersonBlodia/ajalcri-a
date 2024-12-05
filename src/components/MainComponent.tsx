"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { DepartamentosFarmacia } from './PharmacyDepartments';
import PharmacyDoctorsCarousel from './PharmacyDoctorsCarousel';
import { ContactUsForm } from './ContactUsForm';
import { Footer } from './Footer';
 
export const PharmacyWebsite = () => {
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
    <div className="bg-gradient-to-r from-purple-800 to-purple-800 text-white" onClick={handleClickOutside}>
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Romy <span className='text-gray-800'>Lu</span></div>
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
                Home
              </Link>
            </li>
            <li>
              <Link
                to="products"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer"
              >
                Products
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
                About
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
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
           Menu
        </button>
      </header>

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
              className="block hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="block hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="block hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="block hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
      id="hero"
      className="py-10 px-6 bg-gradient-to-r from-purple-800 to-purple-800 flex flex-col gap-6 xl:flex-row items-center w-full xl:w-[80%] mx-auto rounded-lg shadow-2xl"
    >
      <div className="w-full xl:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
          Bienvenidos a Nuestra Farmacia
        </h1>
        <p className="text-lg text-white mb-2">
          Ofrecemos productos farmacéuticos de alta calidad, cuidado personalizado y servicios para tu salud y bienestar.
        </p>
        <p className="text-lg text-white mb-2">
          Contamos con un equipo de expertos en salud para brindarte el mejor consejo y atención.
        </p>
        <button className="bg-white mt-4 text-blue-600 py-3 px-6 rounded-full font-semibold transition-all hover:bg-gray-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
          Comprar Ahora
        </button>
        <div className="mt-6 text-white text-sm">
          <p>Visítanos para conocer nuestros servicios de entrega a domicilio y consultas personalizadas.</p>
        </div>

        {/* Redes Sociales */}
        <div className="mt-6 flex justify-center gap-6 text-white">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaFacebook size={30} />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram size={30} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTwitter size={30} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0  flex  justify-end">
        <div className='w-full xl:w-[450px] xl:h-[450px] rounded-full'>
        <Image
          src="/tecnico_farmacia_certificado_sise_5f6e96bff3.jpg"
          alt="Certificado de técnico farmacéutico"
          width={500}
          height={500}
          className="object-cover rounded object-center  xl:rounded-full w-full h-full"
        />
        </div>
       
      </div>
    </section>


       
      
      <div id="products" className="bg-white text-gray-900 w-full  xl:w-[90%] mt-4  mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex-1 mr-8">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3 text-center xl:text-left">
           
            Hacemos que la atención médica sea comprensible, accesible y asequible.  
          </h1>
          <div className='xl:w-[90%] mx-0'>
          <p className="text-gray-600 mb-6 text-center xl:text-left">
            Nuestra misión es proporcionar productos y servicios de atención médica de la más alta calidad, pensados para ser fáciles de entender y accesibles para todas las personas. Nos comprometemos a mejorar tu bienestar y el de tu familia, brindándote soluciones efectivas y con la mejor atención posible. 
          </p>
          <p className="text-gray-600 mb-6 text-center xl:text-left">
            Ya sea que necesites medicamentos, productos de salud o asesoramiento experto, estamos aquí para ayudarte con un servicio cercano y personalizado. 
          </p>
          </div>
          
        </div>
        <div className="flex-1">
            <div className='w-full xl:w-[550px] h-full'>
            <Image
            src="/doctor-jimmy-two.jpg"
            alt="Doctors"
            width={400}
            height={400}
            className="rounded w-full h-full object-cover object-center"
          />
            </div>

         
        </div>
      </div>
      {/*departamentos */}
    </div>
    <div className="mt-8 w-[90%] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Producto 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/product/monitor-de-signos-vitales.jpg"
              alt="Monitor de salud"
              width={350}
              height={200}
              className="mb-4 rounded-md object-cover"
            />
            <h3 className="text-lg font-medium mb-2 text-gray-500">Monitor de Salud</h3>
            <p className="text-gray-600 text-sm mb-4">Controla tus datos de salud</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm">
              Ver Producto
            </button>
          </div>

          {/* Producto 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/product/termometro.webp"
              alt="Termómetro Digital"
              width={350}
              height={200}
              className="mb-4 rounded-md object-cover"
            />
            <h3 className="text-lg font-medium mb-2 text-gray-500">Termómetro Digital</h3>
            <p className="text-gray-600 text-sm mb-4">Medición precisa de temperatura</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm">
              Ver Producto
            </button>
          </div>

          {/* Producto 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/product/desinfectanete.jpg"
              alt="Desinfectante"
              width={350}
              height={200}
              className="mb-4 rounded-md object-cover"
            />
            <h3 className="text-lg font-medium mb-2 text-gray-500">Desinfectante</h3>
            <p className="text-gray-600 text-sm mb-4">Ideal para la limpieza de superficies</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm">
              Ver Producto
            </button>
          </div>

          {/* Producto 4 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/product/botiquin-800x532.jpg"
              alt="Botiquín de primeros auxilios"
              width={350}
              height={200}
              className="mb-4 rounded-md object-cover"
            />
            <h3 className="text-lg font-medium mb-2 text-gray-500">Botiquín de Primeros Auxilios</h3>
            <p className="text-gray-600 text-sm mb-4">Todo lo necesario para emergencias</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm">
              Ver Producto
            </button>
          </div>
        </div>
      </div>


    <DepartamentosFarmacia/>


      {/* Doctores */}
      <PharmacyDoctorsCarousel/>
      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white text-blue-500 transition-all duration-500">
         <ContactUsForm/>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};
 