import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    TooltipItem
} from 'chart.js';

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
    const isMobile = window.innerWidth < 600;

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Desactiva la relación de aspecto fija
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        plugins: {
            tooltip: {
                callbacks: {
                    footer: (tooltipItems: TooltipItem<"bar">[]) => {
                        const sum = tooltipItems.reduce((acc, tooltipItem) => {
                            return acc + tooltipItem.parsed.y;
                        }, 0);
                        return '💸 ' + new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(sum);
                    },
                    label: function (tooltipItem: TooltipItem<"bar">) {
                        let label = tooltipItem.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (typeof tooltipItem.raw === 'number') {
                            label += new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(tooltipItem.raw);
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                display: !isMobile,
                stacked: true,
                beginAtZero: true,
                ticks: {
                    callback: function (value: string | number) {
                        if (typeof value === 'number') {
                            return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
                        }
                        return value;
                    }
                }
            },
            x: {
                stacked: true,
                beginAtZero: true
            },
        }
    };

    return <Bar data={data} options={options} />;
}