'use client'

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    TooltipItem,
} from 'chart.js';
import { formatCurrency } from '@/domain/financialCalculations';

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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateMobileStatus = () => {
            setIsMobile(window.innerWidth < 600);
        };

        updateMobileStatus();

        window.addEventListener('resize', updateMobileStatus);

        return () => window.removeEventListener('resize', updateMobileStatus);
    }, []);

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
                            return acc + (tooltipItem.parsed.y ?? 0);
                        }, 0);
                        return '💸 ' + formatCurrency(sum);
                    },
                    label: function (tooltipItem: TooltipItem<"bar">) {
                        let label = tooltipItem.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (typeof tooltipItem.raw === 'number') {
                            label += formatCurrency(tooltipItem.raw);
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
                    callback: (value: string | number) =>
                        typeof value === 'number' ? formatCurrency(value) : value,
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
