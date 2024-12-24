import vector from "../assets/Vector.svg";
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
    title: "Stake & Earn",
    description: ["Instant Staking", "Share And Earn More", "Easy To Use"],
    image: "https://nextui.org/images/card-example-1.jpeg",
  },
  {
    title: "The Presale",
    description: ["Instant Self-Custody", "Audited Contract", "Finished Product"],
    image: "https://nextui.org/images/card-example-2.jpeg",
  },
  {
    title: "Built-In Wallet",
    description: ["Easiest Web3 Wallet", "Fully Client Side", "Audited Code"],
    image: "https://nextui.org/images/card-example-3.jpeg",
  },
  {
    title: "Token Swap",
    description: ["Instant Conversion", "Low Fees", "Fast Transactions"],
    image: "https://nextui.org/images/hero-card-complete.jpeg",
  },
  {
    title: "Stake & Earn",
    description: ["Instant Staking", "Share And Earn More", "Easy To Use"],
    image: "https://nextui.org/images/album-cover.png",
  },
  {
    title: "Stake & Earn",
    description: ["Instant Staking", "Share And Earn More", "Easy To Use"],
    image: "https://nextui.org/images/card-example-4.jpeg",
  },
  {
    title: "Stake & Earn",
    description: ["Instant Staking", "Share And Earn More", "Easy To Use"],
    image: "https://nextui.org/images/card-example-6.jpeg",
  },
];

const DefinJB = () => {
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
      <div className="container mx-auto py-12 px-6 lg:px-60 overflow-hidden">
        <h1 className="text-white text-3xl lg:text-5xl font-bold text-center lg:text-start mb-4">
          What is JetBolt?
        </h1>
        <p className="text-white text-xl text-center lg:text-start mb-8">
        JetBolt provides an invisible layer between applications and the blockchain. Discover some of the amazing features packed into this lightning fast new token.
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
                  className={`bg-[#18232C] text-white text-center flex-shrink-0 w-60 rounded-xl transition-all duration-300 shadow-lg pt-8 ${
                    isFocused
                      ? "border-2 border-color-2"
                      : isSideCard
                      ? "bg-[#142029] opacity-80 scale-90"
                      : "opacity-0 scale-95 hidden"
                  }`}
                >
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-52 object-cover my-3"
                  />
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
              <FaArrowLeft/>
            </button>
            <button
              className="isIconOnly bg-color-2 px-3 py-3 rounded-lg shadow-md hover:bg-yellow-500"
              onClick={handleNext}
            >
              <FaArrowRight/>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
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
