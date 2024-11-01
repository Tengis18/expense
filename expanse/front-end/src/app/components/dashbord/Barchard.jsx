import React from 'react';
import { Bar } from 'react-chartjs-2';
import * as untils from '@/lib/until'

export const BarChard = () => {
    const labels = untils.months({ count: 7 });
    const data = {
        labels: labels,
        datasets: [{
         
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 4)',
                'rgba(255, 159, 64, 4)',
                'rgba(255, 205, 86, 4)',
                'rgba(75, 192, 192, 4)',
                'rgba(54, 162, 235, 4)',
                'rgba(153, 102, 255, 4)',
                'rgba(201, 203, 207, 4)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    return (
        <div className='w-[500px] h-[200px]'>
            <Bar data={data} options={{ responsive: true }} />
        </div>
    );
};
