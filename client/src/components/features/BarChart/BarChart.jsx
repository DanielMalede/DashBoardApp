import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function BarChart({item}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Orders Per Day',
      },
    },
  };
  
  const labels = ['Sunday ','Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday '];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data: [...item.map(item=>item.order_per_day)],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };
  return <Bar options={options} data={data} />;
}
