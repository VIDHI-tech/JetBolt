import React, { useState, useEffect } from "react";
import { Checkbox, Progress } from "@nextui-org/react";
import ModalButton from "./design/ModalButton";
import { FaCreditCard } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiSolana, SiTether } from "react-icons/si";
import { LuBitcoin } from "react-icons/lu";
import { RiExchangeDollarFill } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";

const BuyCoin = () => {
  const [selectedCard, setSelectedCard] = useState("card");
  const [youPay, setYouPay] = useState(250);
  const [youReceive, setYouReceive] = useState(25680.88);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 20,
    minutes: 47,
    seconds: 59,
  });

  const rates = {
    card: 93.39,
    eth: 377737.47,
    btc: 11170130.04,
    sol: 18608.74,
    bnb: 74800.12,
    usdt: 93.39,
    usdc: 93.39,
  };

  const cardOptions = [
    {
      id: "card",
      icon: <FaCreditCard className="text-color-1 w-7 h-7" />,
      label: "Card",
    },
    {
      id: "eth",
      icon: <FaEthereum className="bg-purple-500 rounded-2xl w-7 h-7 p-1" />,
      label: "ETH",
    },
    {
      id: "btc",
      icon: <LuBitcoin className="bg-orange-500 rounded-2xl w-7 h-7" />,
      label: "BTC",
    },
    {
      id: "sol",
      icon: <SiSolana className="bg-[#66F9A1] rounded-2xl w-7 h-7 p-1" />,
      label: "SOL",
    },
    {
      id: "bnb",
      icon: <SiBinance className="bg-[#F3BA2F] rounded-2xl w-7 h-7 p-1" />,
      label: "BNB",
    },
    {
      id: "usdt",
      icon: <SiTether className="bg-[#26A178] rounded-2xl w-7 h-7 p-1" />,
      label: "USDT",
    },
    {
      id: "usdc",
      icon: (
        <RiExchangeDollarFill className="bg-[#3E73C4] rounded-2xl w-7 h-7 p-1" />
      ),
      label: "USDC",
    },
  ];

  // Update "You Receive" value based on selected card and input amount
  const updateYouReceive = (payAmount) => {
    const rate = rates[selectedCard] || 0;
    setYouReceive(payAmount * rate);
  };

  // Handle "You Pay" input change
  const handleYouPayChange = (value) => {
    setYouPay(value);
    updateYouReceive(value);
  };

  // Handle card selection
  const handleCardSelection = (cardId) => {
    setSelectedCard(cardId);
    updateYouReceive(youPay); // Recalculate "You Receive" based on the new card's rate
  };

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
    <div className="h-fit flex justify-center border-color-2 border rounded-lg mt-3 mx-1 lg:px-6">
      <div className="py-3 shadow-lg w-full max-w-sm text-center px-3">
        <h2 className="text-3xl font-bold tracking-wider">BUY COIN</h2>
        <p className="text-lg text-[#00CFFF] font-extrabold tracking-wider">
          US$2,006,634 SOLD
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

        <div className="flex justify-between mb-4 gap-3 overflow-y-scroll scrollbar-hide pr-1">
          {cardOptions.map((option) => (
            <button
              key={option.id}
              className={`p-3 rounded-md bg-color-4 hover:bg-color-3 flex justify-center items-center gap-2 ${
                selectedCard === option.id ? "border border-color-2" : ""
              }`}
              onClick={() => handleCardSelection(option.id)}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col justify-between mb-4 text-start gap-2">
          <label htmlFor="payment" className="font-medium">
            You Pay:
          </label>
          <div className="flex p-2 rounded-md text-white w-full border border-color-4 relative">
            <ModalButton 
              buttonText={
                cardOptions.find((card) => card.id === selectedCard)?.icon 
              }
              buttonStyles="flex items-center gap-2 bg-color-4 rounded-md p-1 text-white"
              isOpen={isModalOpen}
              modalTitle="Select Currency"
              onClose={() => setIsModalOpen(false)}
              modalContent={
                <div className="flex flex-col gap-4">
                  {cardOptions.map((option) => (
                    <button
                      key={option.id}
                      className={`p-3 rounded-md bg-color-4 hover:bg-color-3 flex items-center gap-2 ${
                        selectedCard === option.id
                          ? "border border-color-2"
                          : ""
                      }`}
                      onClick={() => {
                        handleCardSelection(option.id);
                        setIsModalOpen(true);
                      }}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              }
              modalFooterCloseText=""
            />
            <input
              type="number"
              id="payment"
              value={youPay}
              onChange={(e) => handleYouPayChange(Number(e.target.value))}
              className="w-full justify-items-end ml-5"
              placeholder="250"
            />
            <span className="text-color-6 text-xl">USD</span>
          </div>
        </div>

        <div className="flex flex-col justify-between mb-6 gap-2">
          <label htmlFor="receive" className="font-medium text-start">
            You Receive:
          </label>
          <div className="flex p-2 rounded-md text-white w-full border border-color-4 justify-between items-center">
            <img src="/logo.png" alt="" className="h-10" />
            <p>
              {youReceive.toFixed(2)}{" "}
              <span className="text-color-6">JBOLT</span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <span className="text-base">
            <Checkbox defaultSelected size="lg" className="text-white" />I agree
            to the{" "}
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
            buttonStyles="bg-color-2 text-black w-full font-bold mt-4 py-8 font-bold text-3xl"
          />
          <p className="text-xs pt-4 text-green-400">
            You get 10% extra free tokens!
          </p>
          <p className="text-xs pt-2">Buy over $500 and get 15% extra tokens</p>
        </div>
        <Progress
          isStriped
          aria-label="Loading..."
          className="max-w-md py-5"
          color="warning"
          value={80}
        />
        <p className="text-sm text-center underline">Full Discount Chart</p>
      </div>
    </div>
  );
};

export default BuyCoin;
