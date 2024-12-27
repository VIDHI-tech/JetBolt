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
    title: "Token Swap",
    description: ["Instant Conversion", "Low Fees", "Fast Transactions"],
    image: "/c1.png",
  },
  {
    title: "Stake & Earn",
    description: ["Instant Staking", "Share And Earn More", "Easy To Use"],
    image: "/defcard/d2.mp4",
  },
  {
    title: "The Presale",
    description: ["Instant Self-Custody", "Audited Contract", "Finished Product"],
    image: "/defcard/d3.mp4",
  },
  {
    title: "Built-In Wallet",
    description: ["Easiest Web3 Wallet", "Fully Client Side", "Audited Code"],
    image: "/defcard/d4.mp4",
  },
  {
    title: "Develop",
    description: ["Integrate in Seconds", "Plug and Play", "Sample code Available"],
    image: "/defcard/d5.mp4",
  },
  {
    title: "CatBolt Token",
    description: ["Zero Gas", "Instant Finality", "Lightning Fast"],
    image: "/card6.png",
  },
];

const DefinJB = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(2);

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
      <div className="container mx-auto py-12 px-6 lg:px-[calc(50%-780px)] overflow-hidden">
        <h1 className="text-white text-3xl lg:text-5xl font-bold text-center lg:text-start mb-4">
          What is CatBolt?
        </h1>
        <p className="text-white text-xl lg:text-2xl text-center lg:text-start mb-8">
          CatBolt provides an invisible layer between applications and the blockchain. Discover some of the amazing features packed into this lightning-fast new token.
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
                  className={`bg-[#18232C] text-white text-center flex-shrink-0 w-72 rounded-xl transition-all duration-300 shadow-lg pt-8 ${
                    isFocused
                      ? "border-2 border-color-2"
                      : isSideCard
                      ? "bg-[#142029] opacity-80 scale-90"
                      : "opacity-0 scale-95 hidden"
                  }`}
                >
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  {card.image.endsWith(".mp4") ? (
                    <video
                      src={card.image}
                      autoPlay
                      loop
                      muted
                      className="w-full h-72 object-cover my-3"
                    />
                  ) : (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-72 object-cover my-3"
                    />
                  )}
                  <ul className="flex flex-col items-center">
                    {card.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-base mb-2 h-9 w-[95%] bg-black rounded-lg"
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
              <FaArrowLeft />
            </button>
            <button
              className="isIconOnly bg-color-2 px-3 py-3 rounded-lg shadow-md hover:bg-yellow-500"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <Button className="bg-color-2 -ml-24 -right-1/2 px-14 py-6 font-bold text-xl" onPress={onOpen}>
          BUY NOW
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

export default DefinJB;
