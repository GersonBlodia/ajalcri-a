import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Tipos de datos
type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string | string[];
    borderColor: string | string[];
    borderWidth: number;
  }[];
};

type DataSets = {
  [key: string]: {
    title: string;
    data: ChartData;
  };
};

export const RiskDashboard: React.FC = () => {
  // Datos para los gráficos con tipado
  const dataSets: DataSets = {
    operational: {
      title: "Riesgos Operacionales",
      data: {
        labels: ["Energía", "Producción", "Mantenimiento", "Logística"],
        datasets: [
          {
            label: "Incidentes Operacionales",
            data: [12, 19, 7, 15],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
    },
    financial: {
      title: "Riesgos Financieros",
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril"],
        datasets: [
          {
            label: "Pérdidas Financieras (en miles USD)",
            data: [150, 200, 180, 220],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
    },
    environmental: {
      title: "Impactos Ambientales",
      data: {
        labels: ["Derrames", "Emisiones de CO2", "Residuos Sólidos"],
        datasets: [
          {
            label: "Impacto Ambiental",
            data: [5, 8, 12],
            backgroundColor: [
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 205, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  };

  // Estado para controlar el conjunto de datos seleccionado
  const [selectedDataset, setSelectedDataset] = useState<keyof DataSets>("operational");

  // Opciones del gráfico con tipado
  const chartOptions: ChartJS.ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: dataSets[selectedDataset].title,
      },
    },
  };

  // Función para cambiar el filtro
  const handleFilterChange = (filter: keyof DataSets): void => {
    setSelectedDataset(filter);
  };

  return (
    <div className="container mx-auto py-8" id="grafica">
      <h1 className="text-3xl font-bold text-center mb-8">Panel de Gestión de Riesgos</h1>

      {/* Filtros */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(dataSets).map((key) => (
          <button
            key={key}
            className={`py-2 px-4 rounded ${
              selectedDataset === key ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleFilterChange(key as keyof DataSets)}
          >
            {dataSets[key].title.split(" ")[1]}
          </button>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gráfico de Barras */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Gráfico de Barras</h2>
          <Bar data={dataSets[selectedDataset].data} options={chartOptions} />
        </div>

        {/* Gráfico Circular */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Gráfico Circular</h2>
          <Doughnut data={dataSets[selectedDataset].data} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};
 