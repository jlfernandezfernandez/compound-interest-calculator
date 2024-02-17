import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// Registrando los componentes necesarios de Chart.js para el gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface BarChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string | string[];
        }[];
    };
}

export default function BarChart({ data }: BarChartProps) {
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Euros',
                },
            },
        }
    };

    return <Bar data={data} options={options} />;
}
