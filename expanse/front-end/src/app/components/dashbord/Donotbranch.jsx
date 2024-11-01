import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
export const DonotChard = () => {

    const data = {
    
        datasets: [{
          data: [15, 15, 15, 15, 15],
          backgroundColor: [
            'rgba(255, 205, 86, 4)',
            'rgba(255, 99, 132, 4)',
            'rgba(255, 159, 64, 4)',
            'rgba(54, 162, 235, 4)',  
           'rgba(144, 238, 144, 4)' 
         
         
          ],
     
        
          borderWidth: 1
        }]
      };const config = {
        type: 'doughnut',
        data: data
      };

    return (
        <div className="  w-[170px] h-[170px]">
        <Doughnut data={config.data} />
    </div>
    );
};
