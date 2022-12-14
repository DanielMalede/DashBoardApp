import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function DoughnutChart({item}) {
  const data = {
  labels: [...item.map(item=>item.productName)],
  datasets: [
    {
      label: 'Quantity',
      data: [...item.map(item=>item.num_in_stock)],
      backgroundColor: [...item.map(item=>item.color)],
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
  return <Doughnut  data={data} />;
}
