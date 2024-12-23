import React from "react";
import { FaTwitter, FaTelegram, FaGithub, FaEnvelope, FaPaperclip, FaNewspaper, FaLock, FaRegNewspaper, FaEye, FaQuestionCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-4">
      <div className="max-w-7xl mx-auto items-center gap-5 flex flex-col lg:flex-row justify-around"> 
        <div className="my-6 space-y-4 text-center lg:text-start">
          <h2 className="text-4xl font-bold flex gap-4"><img src="/logo.png"/>JetBolt</h2>
          <p className=" text-xl">Powering Next Gen Crypto</p>
          <p className=" text-base">&copy; JetBolt Copyright 2024</p>
          <p className="text-base">All Rights Reserved</p>
        </div>

        <div className="my-6 text-center">
            <h4 className="font-semibold mb-3 bg-color-3 rounded-md py-2">JOIN US</h4>
            <ul className="space-y-4 text-base">
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.org"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaTelegram className="mr-2" /> Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaGithub className="mr-2" /> Github
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaEnvelope className="mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
       
          <div className="-mb-6 text-center lg:text-start ">
            <h4 className="font-semibold mb-3 bg-color-3 rounded-md py-2 text-center">DOCUMENTATION</h4>
            <ul className="space-y-4 text-base">
              <li>
                <a href="/whitepaper" className="hover:text-blue-400 flex items-center">
                  <FaNewspaper className="mr-2"/> Whitepaper
                </a>
              </li>
              <li>
                <a href="/security" className="hover:text-blue-400 flex items-center">
                  <FaLock className="mr-2"/> Security and Audits
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400 flex items-center">
                  <FaRegNewspaper className="mr-2"/> Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-400 flex items-center">
                  <FaEye className="mr-2"/> Privacy Policy
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-blue-400 flex items-center">
                   <FaQuestionCircle className="mr-2"/> Help Docs
                </a>
              </li>
            </ul>
          </div>
         
      </div>
 
      <div className="mt-8 text-xs lg:text-base text-gray-400 max-w-5xl mx-auto">
        <p>
          Disclaimer: By visiting this website, using our services, or buying
          JetBolt, you agree to our{" "}
          <a href="/terms" className="text-blue-400 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-400 underline">
            Privacy Policy
          </a>
          . You also warrant that you have read and fully understood the{" "}
          <a href="/disclaimer" className="text-blue-400 underline">
            Disclaimer
          </a>{" "}
          about the risks of purchasing cryptocurrencies like JetBolt.By completing a purchase, 
          you also declare that you are not a citizen or resident of any banned country, or any other country 
          where the purchase of JetBolt may be prohibited by law. A complete list of banned countries is available here. 
          Our list of blocked countries and terms of service may be subject to updates, so please check the latest version.
        </p>
        <p className="mt-2">
        JetBolt is not an investment; it is created as an experimental new cryptocurrency. JetBolt tokens are not currently resellable. 
        They are only usable as an ecosystem asset. There is no guarantee they will ever be resellable or tradable on any market.
         We do not guarantee or represent that JetBolt holds any intrinsic value, that it will increase in price after the presale, 
         or that it will have any value after the presale. We make no representations or warranties regarding JetBolt and are not liable for any losses or errors that may occur during its use. 
         All users should exercise caution and buy JetBolt entirely at their own risk.
        </p>
        <p className="mt-2">
        By using the JetBolt platform and product, you accept it "as is", acknowledging that we may not update, enhance, or maintain it regularly. 
        The services and interface may be unavailable or discontinued at any time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
