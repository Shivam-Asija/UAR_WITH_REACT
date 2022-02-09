import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const DoughnutChart = () => {
  return (
        <div>
          <Doughnut
          
            data={{
              labels: ["Approved", "ChangeRequests", "Pending"],
              datasets: [
                {
                  data: [2,4,10],
                  backgroundColor: ["#198754", "#00629B", "#787878"],
                  font: {
                    size: 30,
                  },
                },
              ],
            }}
            options={{
              cutout: 80,
              animation: {
                animateScale: true,
              },
              // maintainAspectRatio: false,
            }}
          />
        </div>
  )
}

export default DoughnutChart;
