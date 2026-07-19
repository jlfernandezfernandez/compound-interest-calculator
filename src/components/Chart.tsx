import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { formatCurrency } from "@/domain/financialCalculations";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  variant: "pie" | "doughnut";
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

export default function Chart({ variant, data }: ChartProps) {
  const hasData = data.datasets.some((dataset) =>
    dataset.data.some((value) => value > 0)
  );

  const options = {
    plugins: {
      tooltip: {
        enabled: hasData,
        callbacks: {
          label: (context: { label: string; parsed?: number }) =>
            `${context.label}: ${formatCurrency(context.parsed ?? 0)}`,
        },
      },
    },
    elements: { arc: { borderWidth: 0 } },
  };

  const chartData = hasData
    ? data
    : {
        labels: data.labels,
        datasets: [{ ...data.datasets[0], data: [1, 0, 0], borderWidth: 0.5 }],
      };

  const Component = variant === "pie" ? Pie : Doughnut;
  return <Component data={chartData} options={options} />;
}
