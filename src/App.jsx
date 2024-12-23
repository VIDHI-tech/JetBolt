import Home from "./components/Home";
import Headers from "./components/Header";
import Feature from "./components/Feature";
import DefinJB from "./components/DefinJB";
import Alpha from "./components/Alpha";
import Why from "./components/Why";
import { NextUIProvider } from "@nextui-org/react";
import Tokenomics from "./components/Tokenomics";
import LiveSale from "./components/LiveSale";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Develop from "./components/Develop";

const App = () => {
  return (
    <NextUIProvider className="bg-n-8">
      <Headers />
      <Home />
      <div className="lg:px-[calc(50%-500px)]">
        <Feature />
      </div>
      <DefinJB />
      <div className="lg:px-[calc(50%-500px)]">
        <LiveSale />
        <Why />
      </div>
      <Alpha />
      <div className="lg:px-[calc(50%-500px)]">
        <Tokenomics />
        <Develop />
        <Faq />
      </div>
      <Footer />
    </NextUIProvider>
  );
};
export default App;
