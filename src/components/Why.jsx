import React, { useState } from "react";
import { FaBolt, FaWallet, FaRobot, FaGasPump, FaCode, FaLock } from "react-icons/fa";
import { FaScrewdriverWrench, FaSackDollar } from "react-icons/fa6";
import ModalButton from "./design/ModalButton";

const Why = () => {
  const [showMore, setShowMore] = useState(false);

  
  const cards = [
    {
      title: "Zero-Gas",
      description:
        "CatBolt is changing the game by pioneering a cryptocurrency with no gas or transaction fees.",
      icon: <div className="bg-black p-5 rounded-lg inline-block"><FaGasPump className="text-4xl text-color-2 mb-4" /></div>,
    },
    {
      title: "Lightning Fast",
      description:
        "Tired of waiting for slow transactions? CatBolt leverages Skale network to provide instant finality.",
      icon: <div className="bg-black p-5 rounded-lg inline-block"> <FaBolt className="text-4xl text-color-2 mb-4" /></div>,
    },
    {
      title: "Easy To Earn",
      description:
        "Earning crypto has never been this easy. CatBolt rewards the most active community members.",
      icon: <div className="bg-black p-5 rounded-lg inline-block"><FaSackDollar className="text-4xl text-color-2 mb-4" /></div>,
    },
    {
      title: "Finished Product",
      description:
        "CatBolt's ecosystem and features are already completed, audited, and available from day one!",
      icon:<div className="bg-black p-5 rounded-lg inline-block"> <FaScrewdriverWrench className="text-4xl text-color-2 mb-4" /></div>,
    },
    {
      title: "Custom Wallet",
      description:
        "CatBolt has its own purpose-built web wallet. It's so easy to use, even your grandma can use it.",
      icon:<div className="bg-black p-5 rounded-lg inline-block"> <FaWallet className="text-4xl text-color-2 mb-4" /></div>,
    },
    {
      title: "AI Features",
      description:
        "CatBolt leverages the power of AI to deliver curated news and insights, enhancing the experience.",
      icon:<div className="bg-black p-5 rounded-lg inline-block"> <FaRobot className="text-4xl text-color-2 mb-4" /></div>,
    },
    {
      title: "Developer Friendly",
      description:
        "CatBolt has been designed for developers. You can integrate it into your dApp in just a few minutes.",
      icon:<div className="bg-black p-4 rounded-lg inline-block"> <FaCode className="text-4xl text-color-2 mb-4" /></div>,
    },
    {
      title: "Self Custody",
      description:
        "There's no TGE and no lockup. You get your CatBolt tokens immediately after purchasing them.",
      icon:<div className="bg-black p-4 rounded-lg inline-block"> <FaLock className="text-4xl text-color-2 mb-4" /></div>,
    },
  ];

  return (
    <div className="text-white flex flex-col items-center py-20">
      <h1 className="text-5xl font-bold mb-8">Why CatBolt?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.slice(0, showMore ? cards.length : 4).map((card, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg py-6 transform transition-transform hover:-translate-y-2 text-center"
          >
            {card.icon}
            <h2 className="text-xl lg:text-2xl font-bold text-color-2 mb-3">
              {card.title}
            </h2>
            <p className="text-xl">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-x-4 flex flex-col md:flex-row gap-4">
        <ModalButton
          buttonText="BUY NOW"
          buttonStyles="bg-color-2 px-10 py-6 font-bold text-xl"
        />
        <button
          className="px-10 py-2.5 hover:bg-gray-800 transition border border-spacing-0 rounded-xl font-bold text-xl"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Why;
