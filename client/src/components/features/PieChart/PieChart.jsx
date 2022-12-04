import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export default function PieChart({item,info}) {
  const data = {
    labels: [...item.map(item=>item.productName)],
    datasets: [
      {
        label: 'Ware Sold',
        data: [...info.map(item=>item.sold)],
        backgroundColor: [
          'rgb(116, 203, 243)',
          'rgb(220, 116, 243)',
          'rgb(243, 116, 139)',
          ' rgb(116, 243, 190)',
          ' rgb(196, 243, 116)',
          ' rgb(243, 116, 116)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  return <Pie data={data} />;
}
