import React, { useState, useEffect } from "react";
import { Checkbox, Progress } from "@nextui-org/react"; 
import ModalButton from "./design/ModalButton";
import { FaCreditCard } from "react-icons/fa";
const BuyCoin = () => {
      const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 20,
        minutes: 47,
        seconds: 59,
      });
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prevTime) => {
            let { days, hours, minutes, seconds } = prevTime;
    
            if (seconds > 0) {
              seconds -= 1;
            } else if (minutes > 0) {
              seconds = 59;
              minutes -= 1;
            } else if (hours > 0) {
              seconds = 59;
              minutes = 59;
              hours -= 1;
            } else if (days > 0) {
              seconds = 59;
              minutes = 59;
              hours = 23;
              days -= 1;
            } else {
              clearInterval(timer);
            }
    
            return { days, hours, minutes, seconds };
          });
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
  return ( 
      <div className="w-fit lg:w-1/3 h-fit lg:mt-11 flex justify-center border-color-2 border-2 rounded-lg mx-2 md:mx-auto">
        <div className="py-3 shadow-lg w-full max-w-sm text-center px-3 xl:px-0">
          <h2 className="text-4xl font-bold  ">BUY COIN</h2>
          <p className="text-lg text-[#00CFFF] font-extrabold">
            US$1,820,818 SOLD
          </p>

          <div className="flex flex-col justify-center items-center my-7 gap-2 h-32 bg-color-4 rounded-lg">
            <span className="text-lg text-white">Price Increase In</span>
            <div className="flex justify-center items-center gap-7 text-center">
              <div>
                <p className="text-5xl font-bold text-color-2">
                  {String(timeLeft.days).padStart(2, "0")}
                </p>
                <p className="text-xs py-3">DAYS</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-color-2">
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>
                <p className="text-xs py-3">HOURS</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-color-2">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>
                <p className="text-xs py-3">MINS</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-color-2">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
                <p className="text-xs py-3">SECS</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between mb-4 text-start">
            <label htmlFor="payment" className="font-medium">
              You Pay:
            </label>
            {/* <input
              type="number"
              id="payment"
              className="p-2 rounded-md text-white w-full border border-color-4"
              placeholder="250 USD"
            /> */}
            <div className="flex p-2 rounded-md text-white w-full border border-color-4">
               <FaCreditCard className="bg-color-4 h-10 w-10 rounded"/>
                  <input
              type="number"
              id="payment"
              className="w-full justify-items-end"
              placeholder="                                      250 USD"
            />
            </div>
          </div>
          <div className="flex flex-col justify-between mb-6">
            <label htmlFor="receive" className="font-medium text-start">
              You Receive:
            </label>
             <div className="flex p-2 rounded-md text-white w-full border border-color-4 justify-between items-center">
                <img src="/public/logo.png" alt="" className="h-10"/>
             <p className="">
              25792.25 JBOLT
            </p>
             </div>
          </div>

          <div className="text-center">
            <span className="text-base">
              <Checkbox defaultSelected size="lg" className="text-white" />I
              agree to the{" "}
              <a href="#term" className="text-white">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#privacy" className="text-white">
                Privacy Policy
              </a>
            </span>
            <ModalButton
              buttonText="BUY NOW"
              buttonStyles="bg-color-2 text-black w-full font-bold mt-4 py-7 font-bold text-2xl"
            />
            <p className="text-sm mt-4 text-green-400">
              You get 10% extra free tokens!
            </p>
            <p className="text-xs ">
              Buy over $500 (0.001 ETH) and get 15% extra tokens
            </p>
          </div>
          <Progress
            isStriped
            aria-label="Loading..."
            className="max-w-md py-5"
            color="warning"
            value={80}
          />
          <p className="text-xs text-center">Full Discount Chart</p>
        </div>
      </div>
  )
}

export default BuyCoin
