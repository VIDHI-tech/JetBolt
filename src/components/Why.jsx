import React, { useState } from "react";
import { FaBolt, FaWallet, FaWrench, FaRobot, FaCoins, FaGasPump, FaCode, FaLock } from "react-icons/fa";
import ModalButton from "./design/ModalButton";

const Why = () => {
  const [showMore, setShowMore] = useState(false);

  
  const cards = [
    {
      title: "Zero-Gas",
      description:
        "JetBolt is changing the game by pioneering a cryptocurrency with no gas or transaction fees.",
      icon: <div className="bg-black p-4 rounded-lg inline-block"><FaGasPump className="text-4xl text-yellow-300 mb-4" /></div>,
    },
    {
      title: "Lightning Fast",
      description:
        "Tired of waiting for slow transactions? JetBolt leverages Skale network to provide instant finality.",
      icon: <div className="bg-black p-4 rounded-lg inline-block"> <FaBolt className="text-4xl text-yellow-300 mb-4" /></div>,
    },
    {
      title: "Easy To Earn",
      description:
        "Earning crypto has never been this easy. JetBolt rewards the most active community members.",
      icon: <div className="bg-black p-4 rounded-lg inline-block"><FaCoins className="text-4xl text-yellow-300 mb-4" /></div>,
    },
    {
      title: "Finished Product",
      description:
        "JetBolt's ecosystem and features are already completed, audited, and available from day one!",
      icon:<div className="bg-black p-4 rounded-lg inline-block"> <FaWrench className="text-4xl text-yellow-300 mb-4" /></div>,
    },
    {
      title: "Custom Wallet",
      description:
        "JetBolt has its own purpose-built web wallet. It's so easy to use, even your grandma can use it.",
      icon:<div className="bg-black p-4 rounded-lg inline-block"> <FaWallet className="text-4xl text-yellow-300 mb-4" /></div>,
    },
    {
      title: "AI Features",
      description:
        "JetBolt leverages the power of AI to deliver curated news and insights, enhancing the experience.",
      icon:<div className="bg-black p-4 rounded-lg inline-block"> <FaRobot className="text-4xl text-yellow-300 mb-4" /></div>,
    },
    {
      title: "Developer Friendly",
      description:
        "JetBolt has been designed for developers. You can integrate it into your dApp in just a few minutes.",
      icon:<div className="bg-black p-4 rounded-lg inline-block"> <FaCode className="text-4xl text-yellow-300 mb-4" /></div>,
    },
    {
      title: "Self Custody",
      description:
        "There's no TGE and no lockup. You get your JetBolt tokens immediately after purchasing them.",
      icon:<div className="bg-black p-4 rounded-lg inline-block"> <FaLock className="text-4xl text-yellow-300 mb-4" /></div>,
    },
  ];

  return (
    <div className="text-white flex flex-col items-center py-20">
      <h1 className="text-5xl font-bold mb-8">Why JetBolt?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.slice(0, showMore ? cards.length : 4).map((card, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 text-center bg-gray-800"
          >
            {card.icon}
            <h2 className="text-xl font-semibold text-yellow-300 mb-3">
              {card.title}
            </h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-x-4 flex flex-col md:flex-row gap-4">
        <ModalButton
          buttonText="BUY NOW"
          buttonStyles="bg-yellow-300 px-10 py-6 font-bold text-xl"
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
