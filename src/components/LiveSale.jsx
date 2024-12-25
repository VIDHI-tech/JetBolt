  
import ModalButton from "./design/ModalButton";
import { Image } from "@nextui-org/react";
import { FaCreditCard } from "react-icons/fa";

const LiveSale = () => {
    const saleList = [
        { amount: "25.00 USD" },
        { amount: "125.00 USD" },
        { amount: "25.00 USD" },
        { amount: "100.00 USD" },
        { amount: "0.0590 ETH" },
        { amount: "0.002700 BTC" },
        { amount: "105.00 USD" },
        { amount: "250.00 USD" },
        { amount: "0.16 SOL" },
      ];

  return (
    <section className="bg-color-4">
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center py-10">
        {/* Left Content */}
        <div className="px-3 lg:px-8 lg:py-20 items-center lg:w-full">
          <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-start pb-4">
            Live Sales
          </h1>
          <p className="text-xl text-center lg:text-start pb-8 justify-center">
            You can purchase JetBolt tokens with a wide range of payment
            options. Join the growing number of early adopters on the JetBolt
            ecosystem.
          </p>
          <span className="flex justify-center gap-4 lg:justify-start">
            <ModalButton
              buttonText="BUY NOW"
              buttonStyles="bg-color-1 text-white px-8 py-6 font-bold text-xl"
            />
            <ModalButton
              buttonText="Refresh"
              buttonStyles="bg-black border border-white text-white px-7 py-6 font-bold text-xl"
            />
          </span>
        </div>
  
          <div className="mt-16 lg:py-0 lg:border-l-1 border-black w-full flex flex-col gap-2 px-5 lg:px-10 overflow-y-scroll scrollbar-hide h-96">
            {saleList.map((sale, index) => (
              <div
                key={index}
                className="flex bg-black pl-5 py-3 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-3">
                  <FaCreditCard className="bg-blue-500 h-6 w-6 rounded"/>
                  <p className="text-lg">{sale.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div> 
       
      <div className="text-white flex flex-col lg:flex-row justify-center items-center py-14 border-t-1 border-black">
        <div className="lg:w-full flex justify-center items-center">
          <Image
            src="/coin.png" 
            alt="hero"
            className="px-5"
            loading="lazy"
          />
        </div>

        <div className="lg:border-l-1 border-black px-3 lg:px-10 lg:ml-9 lg:py-20 items-center pt-20 lg:w-full">
          <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-start pb-4">
            JetBolt Staking
          </h1>
          <p className="text-xl text-center lg:text-start pb-8 justify-center">
            JetBolt has created an awesome new staking system that rewards users
            who participate the most.
          </p>
          <span className="flex justify-center gap-4 lg:justify-start">
            <ModalButton
              buttonText="BUY NOW"
              buttonStyles="bg-color-1 text-white px-8 py-6 font-bold text-xl"
            />
            <ModalButton
              buttonText="Launch App"
              buttonStyles="bg-black border border-white text-white px-7 py-6 font-bold text-xl"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default LiveSale;
