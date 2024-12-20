import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Tokenomics = () => {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        //   title: {
        //     display: true,
        //     text: "Bar Chart Example",
        //   },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    
  return (
   <>
     <div className="bg-gray-800 text-white flex flex-col lg:flex-row justify-center items-center">
        <div className=" ">
            <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-start mb-4">
                Tokenomics
            </h1>
            <p className="text-xl text-center lg:text-start mb-8">
            Explore JetBolt's tokenomics—simple and effective. Our smart contracts are fully audited, enhancing safety and transparency. 
            Dive into our whitepaper to discover more about how JetBolt works.
            </p>
        </div>
        <div>
        <Doughnut data={data} options={options} />
        </div>
       
     </div>
   </>
  )
}

export default Tokenomics
