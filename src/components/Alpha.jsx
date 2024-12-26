import vector from "/Vector.svg";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cardsData = [
  {
    title: "Token Vault",
    description: ["US$ 500", "US$ 575", "Get 15% Extra Tokens"],
    image: "/services/service-1.png",
  },
  {
    title: "Decentralized Finance",
    description: ["US$ 500", "US$ 575", "Get 15% Extra Tokens"],
    image: "https://nextui.org/images/card-example-2.jpeg",
  },
  {
    title: "NFT Marketplace",
    description: ["US$ 500", "US$ 575", "Get 15% Extra Tokens"],
    image: "/services/service-3.png",
  },
  {
    title: "Crypto Wallet",
    description: ["US$ 500", "US$ 575", "Get 15% Extra Tokens"],
    image: "/services/service-1.png",
  },
  {
    title: "Staking Rewards",
    description: ["US$ 500", "US$ 575", "Get 15% Extra Tokens"],
    image: "/services/service-2.png",
  },
  {
    title: "Cross-Chain Trading",
    description: ["US$ 500", "US$ 575", "Get 15% Extra Tokens"],
    image: "https://nextui.org/images/card-example-4.jpeg",
  },
  {
    title: "Blockchain Explorer",
    description: ["US$ 500", "US$ 575", "Get 15% Extra Tokens"],
    image: "https://nextui.org/images/card-example-6.jpeg",
  },
];

const Alpha = () => {
  // modal next ui
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(3);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="bg-cover bg-center mt-10"
      style={{
        backgroundImage: `url(${vector})`,
      }}
    >
      <div className="container mx-auto py-12 px-6 lg:px-[calc(50%-780px)]">
        <h1 className="text-white text-3xl lg:text-5xl font-bold text-center lg:text-start mb-4">
          Alpha Boxes
        </h1>
        <p className="text-white text-xl lg:text-2xl text-center lg:text-start mb-8">
          Benefit from our discounted pricing by purchasing an Alpha Box. Each Alpha Box has discounted pricing, ensuring you get more bang for your buck.
        </p>

        {/* Cards Section */}
        <div className="relative items-center mb-10">
          <div className="flex items-center gap-3 overflow-hidden w-full justify-center">
            {cardsData.map((card, index) => {
              const isFocused = index === currentIndex;
              const isSideCard = Math.abs(currentIndex - index) === 1;

              return (
                <div
                  key={index}
                  className={`bg-[#18232C] text-center flex-shrink-0 w-60 rounded-xl transition-all duration-300 shadow-lg pt-8 ${
                    isFocused
                      ? "border-2 border-yellow-500"
                      : isSideCard
                      ? "bg-[#142029] opacity-80 scale-90"
                      : "opacity-0 scale-95 hidden"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover my-3"
                  />
                  <ul className="flex flex-col items-center">
                    {card.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className={`h-9 w-[95%] bg-black flex items-center justify-center ${
                          idx === 1 ? "text-red-500 line-through rounded-b-xl" : idx === 2 ? "text-green-500 font-bold my-3 rounded-t-xl rounded-b-xl" : "text-white font-bold text-3xl rounded-t-xl"
                        }`}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="absolute flex justify-between w-full top-40">
            <button
              className="bg-color-2 px-3 py-3 rounded-lg shadow-md hover:bg-yellow-500"
              onClick={handlePrev}
            >
              <FaArrowLeft/>
            </button>
            <button
              className="bg-color-2 px-3 py-3 rounded-lg shadow-md hover:bg-yellow-500"
              onClick={handleNext}
            >
              <FaArrowRight/>
            </button>
          </div>
        </div>

        <Button className="bg-color-2 -ml-28 -right-1/2 px-10 py-6 font-bold text-xl" onPress={onOpen}>
          BUY ALPHA BOX 
        </Button>
        <Modal
          backdrop="blur"
          classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
            header: "border-b-[1px] border-[#292f46]",
            footer: "border-t-[1px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
          isOpen={isOpen}
          radius="lg"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="foreground"
                    variant="light"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-color-2 shadow-lg shadow-indigo-500/20"
                    onPress={onClose}
                  >
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Alpha;
