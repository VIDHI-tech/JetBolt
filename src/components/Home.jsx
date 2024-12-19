
import React from "react";
import { Button, Checkbox, Progress } from "@nextui-org/react";
import hero from "../assets/services/service-3.png";  

const Home = () => {
  return (
    <div className="relative text-white h-[100vh] mb-72 sm:mb-16 flex flex-col lg:flex-row"> 
      <div
        className="bg-cover bg-center flex items-center "
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="p-6 text-center">
          <h1 className="md:text-3xl font-bold mb-4 leading-tight bg-black bg-opacity-60 rounded-lg ">
            THE  <span className="text-[#00CFFF]">NO FEES</span> <br />
            CRYPTO COIN
          </h1>
          <p className="text-lg md:text-xl mb-6">
            JetBolt aims to power the next generation of crypto apps.   Join now
            and be part of the future of crypto.
          </p>
          <div className="flex justify-center gap-4">
            <img
              src="https://via.placeholder.com/100x50"
              alt="Audit"
              className="h-12"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="Grant Recipient"
              className="h-12"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 lg:mt-5 flex justify-center ">
        <div className="absolute p-6  shadow-lg w-full max-w-sm  border-amber-300 border-2 rounded-lg">
          <h2 className="text-4xl mb-4 text-center font-bold  ">
            BUY COIN
          </h2>
          <div className="text-center mb-6">
            <p className="text-lg text-[#00CFFF] text-bold">US$1,820,818 SOLD</p>
            <div className="flex flex-col justify-center gap-2 text-yellow-300 h-32 bg-slate-600 rounded-lg">

              <span className="text-5xl font-bold">00 20 16  59</span>  
              <span className="">DAYS HOURS MINS SECS</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="payment" className="font-medium">
              You Pay:
            </label>
            <input
              type="number"
              id="payment"
              className="p-2 rounded-md bg-gray-700 text-white w-1/2"
              placeholder="250 USD"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label htmlFor="receive" className="font-medium">
              You Receive:
            </label>
            <p className="p-2 rounded-md bg-gray-700 text-white w-1/2">
              25792.25 JBOLT
            </p>
          </div>

          <div className="text-center">
           <span className="text-base"><Checkbox defaultSelected size="lg" className="text-white"/>I agree to the <a href="#term" className="text-white">Terms and Conditions</a> and <a href="#privacy" className="text-white">Privacy Policy</a>
           </span>
            <Button color="warning" size="lg" className="w-full font-bold mt-4">
              BUY NOW
            </Button>
            <p className="text-sm mt-4 text-green-400">
              You get 10% extra free tokens!
            </p>
            <p className="text-xs ">
              Buy over $500 (0.001 ETH) and get 15% extra tokens
            </p>
          </div>
          <Progress isStriped aria-label="Loading..." className="max-w-md py-5" color="warning"  value={80} />
          <p className="text-xs text-center">Full Discount Chart</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
