import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrando los componentes necesarios de Chart.js
Chart.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
            borderColor?: string[];
            borderWidth?: number;
        }[];
    };
}

export default function PieChart({ data }: PieChartProps) {
    // Verifica si hay datos disponibles
    const hasData = data.datasets.some(dataset => dataset.data.length > 0 && dataset.data.some(value => value > 0));

    // Opciones para el gráfico
    const options = {
        plugins: {
            tooltip: {
                enabled: hasData, // Habilita o deshabilita los tooltips basado en la presencia de datos
                callbacks: {
                    label: function (context: { label: string; parsed: number | bigint | undefined; }) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== undefined) {
                            label += new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(context.parsed);
                        }
                        return label;
                    }
                }
            }
        },
        elements: {
            arc: {
                borderWidth: 0 // Opcional: ajusta el estilo de los arcos cuando no hay datos
            }
        }
    };

    // Datos predeterminados para mostrar cuando no hay datos reales
    const defaultData = {
        labels: data.labels,
        datasets: [{
            data: [1, 0, 0], // Un valor predeterminado para mantener la estructura del gráfico
            backgroundColor: data.datasets[0].backgroundColor,
            borderColor: data.datasets[0].borderColor,
            borderWidth: 0.5,
        }],
    };

    return <Pie data={hasData ? data : defaultData} options={options} />;
};
