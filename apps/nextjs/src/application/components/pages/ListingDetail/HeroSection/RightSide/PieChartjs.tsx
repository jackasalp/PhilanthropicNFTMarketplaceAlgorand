import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = ['#004A99', '#92A737', '#656565'];
export const data = {
  labels: ['Campaign Name', 'Artist', 'Platform'],
  datasets: [
    {
      label: '# of Votes',
      data: [33, 33, 34],
      backgroundColor: colors,
      offset: 10,
      // weight: 3,
      // spacing: 10,

      borderColor: colors,
      borderWidth: 1,
      fontColor: colors,
    },
  ],
};

const PieChartjsAuction = () => {
  return (
    <Pie
      options={{
        plugins: {
          legend: {
            title: {
              display: true,
              // @ts-ignore
              color: colors,
            },
            position: 'right',
            color: colors,
            labels: {
              padding: 20,
              fontColor: colors,
              font: {
                size: 20,
                weight: 'bold',
                // @ts-ignore
                color: colors,
              },
            },
          },
        },
      }}
      data={data}
    />
  );
};

export default PieChartjsAuction;
