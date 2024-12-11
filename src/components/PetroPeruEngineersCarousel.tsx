"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const PetroPeruEngineersCarousel: React.FC = () => {
  const engineers = [
    {
      name: "Ing. María Quispe",
      specialty: "Ingeniería Petrolera",
      university: "Universidad Nacional de Ingeniería (UNI)",
      certification: "Certificado en Gestión de Hidrocarburos",
      image: "/ingenieros/perfil-web-petroperu.webp",
    },
    {
      name: "Ing. Juan Pérez",
      specialty: "Ingeniería Ambiental",
      university: "Pontificia Universidad Católica del Perú (PUCP)",
      certification: "Certificado en Gestión Ambiental",
      image: "/ingenieros/ingeniero-petrolero.webp",
    },
    {
      name: "Ing. Rosa Medina",
      specialty: "Ingeniería Química",
      university: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      certification: "Certificado en Procesos de Refinación",
      image: "/ingenieros/miguel-ingneiero.jpg",
    },
    {
      name: "Ing. Carlos Huamán",
      specialty: "Ingeniería Mecánica",
      university: "Universidad de Piura (UDEP)",
      certification: "Certificado en Mantenimiento Industrial",
      image: "/ingenieros/minero.webp",
    },
    {
      name: "Ing. Diana López",
      specialty: "Ingeniería Civil",
      university: "Universidad de Ingeniería y Tecnología (UTEC)",
      certification: "Certificado en Diseño de Oleoductos",
      image: "/ingenieros/ingeniero-ajalcriña.jpg",
    },
  ];

  return (
    <div
      id="about"
      className="bg-white text-gray-900 w-[100%] mx-auto py-8 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Nuestros Ingenieros</h2>
      <p className="text-center text-gray-700 mb-8">
        Conoce a los expertos que lideran la optimización y sostenibilidad en Petroperú.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {engineers.map((engineer, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F8FAFD] p-4 rounded-lg shadow-md">
              {/* Imagen */}
              <div className="h-[450px] w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  width={450}
                  height={450}
                  src={engineer.image}
                  alt={engineer.name}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Información del ingeniero */}
              <h3 className="text-xl font-bold text-[#2B4364] mb-2">{engineer.name}</h3>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Especialidad:</span> {engineer.specialty}
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Universidad:</span> {engineer.university}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Certificación:</span> {engineer.certification}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PetroPeruEngineersCarousel;
