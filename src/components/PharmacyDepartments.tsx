import { FaPills, FaHeartbeat, FaSpa, FaBrush } from 'react-icons/fa';

export const DepartamentosFarmacia = () => {
  return (
    <div className="mt-2 bg-white text-gray-900 w-[100%] mx-auto py-8 px-4 sm:px-6">
      <h2 className="text-2xl font-bold mb-4">Diferentes servicios</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Departamento de Farmacia */}
        <div className="bg-[#EFFCF5] p-4 rounded-lg shadow-sm">
          <FaPills className="text-3xl text-[#4F8076] mb-2" />
          <h3 className="text-lg font-medium mb-1">Farmacia</h3>
          <p className="text-[#4F8076] text-sm">Accede a nuestra amplia gama de medicamentos.</p>
        </div>
        
        {/* Departamento de Bienestar */}
        <div className="bg-[#EFFCF5] p-4 rounded-lg shadow-sm">
          <FaHeartbeat className="text-3xl text-[#4F8076] mb-2" />
          <h3 className="text-lg font-medium mb-1">Bienestar</h3>
          <p className="text-[#4F8076] text-sm">Explora nuestros productos de salud y bienestar.</p>
        </div>
        
        {/* Departamento de Belleza */}
        <div className="bg-[#EFFCF5] p-4 rounded-lg shadow-sm">
          <FaSpa className="text-3xl text-[#4F8076] mb-2" />
          <h3 className="text-lg font-medium mb-1">Belleza</h3>
          <p className="text-[#4F8076] text-sm">Descubre nuestros productos de cuidado personal y belleza.</p>
        </div>
        
        {/* Departamento de Cosmética */}
        <div className="bg-[#EFFCF5] p-4 rounded-lg shadow-sm">
          <FaBrush className="text-3xl text-[#4F8076] mb-2" />
          <h3 className="text-lg font-medium mb-1">Cosmética</h3>
          <p className="text-[#4F8076] text-sm">Encuentra productos para el cuidado de la piel y el maquillaje.</p>
        </div>
      </div>
    </div>
  );
};
