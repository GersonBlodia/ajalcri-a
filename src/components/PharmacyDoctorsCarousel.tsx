"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Importación correcta para la última versión
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const PharmacyDoctorsCarousel: React.FC = () => {
  const doctors = [
    { name: 'Dr. Jimmy Huasaquiche', specialty: 'Farmacia', image: '/doctores/bruno.jpg' },
    { name: 'Dr. Ricardo Medina', specialty: 'General Pediatra', image: '/doctores/federico.jpg' },
    { name: 'Dr. Valentino Oriundo Flores', specialty: 'Pediatra', image: '/doctores/jimmy.jpg' },
    { name: 'Dr. Jhohannes Hernandez', specialty: 'Cardiologo', image: '/doctores/gonzalo.webp' },
    { name: 'Dr. Gonzalos Rodriguez', specialty: 'Dermatologo', image: '/doctores/jhon.webp' },
    { name: 'Dr. Melendez', specialty: 'Neurogolo', image: '/doctores/richi.webp' },
  ];

  return (
    <div 
    id='about'
    className="bg-white  text-gray-900 w-[100%] mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Nuestros Doctores</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true} // Navegación habilitada
        modules={[Navigation]} // Se pasa el módulo Navigation
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#EFFCF5] p-4 rounded-lg shadow-md">
              {/* Imagen que cubre todo el tamaño del div */}
              <div className="h-[450px] w-full mb-4 overflow-hidden rounded-lg">
                <Image
                width={450}
                height={450}
                  src={doctor.image}
                  alt={doctor.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="underline text-lg font-medium mb-1">{doctor.name}</h3>
              <p className="text-[#4F8076] text-sm">{doctor.specialty}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PharmacyDoctorsCarousel;
