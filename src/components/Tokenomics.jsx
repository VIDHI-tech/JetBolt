import { useState } from "react";
import Chart from "react-apexcharts";
import ModalButton from "./design/ModalButton";
import {Image} from "@nextui-org/react";

const Tokenomics = () => {
  const [chartData, setChartData] = useState({
    series: [40.3, 8.1, 40.3, 8.1, 3.2],
    options: {
      chart: {
        type: "donut",
        customScale: 0.8,
      },
      labels: [
        "Pre-Sale",
        "Liquidity & Reserve",
        "Staking Rewards",
        "Team",
        "Incentives & Rewards",
      ],
      legend: {
        position: "bottom",
        verticalAlign: true,
        labels: {
          colors: "#FFFFFF",
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",  
          },
          expandOnClick: false, 
        },
      },
      dataLabels: {
        enabled: false,  
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      colors: ["#8C874F", "#0C6C93", "#0C6F62", "#563D92", "#8C3226"],  
    },
  });

  return (
    <>
      <div className="bg-gray-800 text-white flex flex-col lg:flex-row justify-center items-center py-14">
        {/* Left Content */}
        <div className="px-3 lg:px-8 lg:py-20 items-center lg:w-full">
          <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-start pb-4">
            Tokenomics
          </h1>
          <p className="text-xl text-center lg:text-start pb-8 justify-center">
            Explore CatBolt's tokenomics—simple and effective. Our smart
            contracts are fully audited, enhancing safety and transparency. Dive
            into our whitepaper to discover more about how CatBolt works.
          </p>
          <span className="flex justify-center gap-4 lg:justify-start">
            <ModalButton buttonText="BUY NOW" buttonStyles="bg-color-1 text-white px-8 py-6 font-bold text-xl" />
            <ModalButton buttonText="Whitepaper" buttonStyles="bg-transparent hover:bg-gray-700 border border-color-6 text-white px-7 py-6 font-bold text-xl" />
          </span>
        </div>
 
        <div className="pt-20 lg:py-0 lg:border-l-1 border-black lg:w-full">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="500"
          />
        </div>
      </div>
      <div className="bg-gray-800 text-white flex flex-col lg:flex-row justify-center items-center py-14 border-t-1 border-black"> 
        <div className=" lg:w-full">
        <Image
            src="/card5.png" 
            alt="hero" 
            className="px-5"
            loading="lazy"
          />
        </div>

        <div className="lg:border-l-1 border-black px-3 lg:px-10 lg:ml-9 lg:py-20 items-center pt-20 lg:w-full">
          <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-start pb-4">
            How to Buy
          </h1>
          <p className="text-xl text-center lg:text-start pb-8 justify-center">
            Explore CatBolt's tokenomics—simple and effective. Our smart
            contracts are fully audited, enhancing safety and transparency. Dive
            into our whitepaper to discover more about how CatBolt works.
          </p>
          <span className="flex justify-center gap-4 lg:justify-start">
            <ModalButton buttonText="BUY NOW" buttonStyles="bg-color-1 text-white px-8 py-6 font-bold text-xl" />
            <ModalButton buttonText="Full Guide" buttonStyles="bg-transparent hover:bg-gray-700 border border-color-6 text-white px-7 py-6 font-bold text-xl" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
