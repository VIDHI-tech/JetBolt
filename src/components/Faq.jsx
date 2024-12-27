import {Accordion, AccordionItem, Image} from "@nextui-org/react";
import ModalButton from "./design/ModalButton";
const Faq = () => {
  const defaultContent =
  "CatBolt is a component that allows you to quickly   create responsive web pages. It is built on top of the popular React framework and is completely free and open source.It is also available at https://github.com/ especially responsive components such as CatBolt and Jet Engine are available at https://github.com/. For more information about CatBolt, please visit https://CatBolt.io/.";

  return (
    <>
        <h1 className="text-5xl font-bold pb-8 pt-28 text-center lg:text-left text-white">FAQ</h1>
        <section className="flex flex-col-reverse items-center lg:items-start lg:flex-row gap-4 lg:justify-between text-white">
          <Accordion variant="bordered" className="bg-n-8 rounded-none text-xl px-0">
            <AccordionItem key="1" aria-label="Accordion 1" title={<span className="text-white text-xl">What is the CatBolt token at presale?</span>} className="hover:bg-sky-950 border-b-1 border-color-6 border-r-1 border-l-1 border-t-1 px-4">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title={<span className="text-white text-xl">When will the CatBolt presale end?</span>} className="hover:bg-sky-950 border-b-1 border-color-6 border-r-1 border-l-1 px-4">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title={<span className="text-white text-xl">I purchased CatBolt tokens but I don't see them in my wallet</span>} className="hover:bg-sky-950 border-b-1 border-color-6 border-r-1 border-l-1 px-4">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 1" title={<span className="text-white text-xl">Someone claiming to be from the CatBolt team has contacted me out of the blue</span>} className="hover:bg-sky-950 border-b-1 border-color-6 border-r-1 border-l-1 px-4">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 1" title={<span className="text-white text-xl">Is CatBolt a good and safe investment?</span>} className="hover:bg-sky-950 border-color-6 border-r-1 border-b-1 border-l-1 px-4">
              {defaultContent}
            </AccordionItem>
          </Accordion>
          <Image src="/faq.png" alt="hero" className="h-96 lg:w-[35vw] xl:w-[25vw]"/>
        </section>
        <span className="flex flex-col justify-center gap-4 lg:justify-start lg:flex-row pb-28 pt-5 items-center">
            <ModalButton buttonText="Contact Us" buttonStyles="bg-color-1 text-white py-6 font-extrabold text-xl"/>
            <ModalButton buttonText="Help Docs" buttonStyles="bg-transparent hover:bg-gray-700 border border-color-6 text-white py-6 font-bold text-xl"
                             onClick={() => window.open("https://CatBolt.gitbook.io/CatBolt-terms-risks-and-privacy-policy/guidelines","_blank")}
            />
        </span>
    </>
  );
};

export default Faq;
