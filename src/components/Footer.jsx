import {
  FaTwitter,
  FaTelegram,
  FaGithub,
  FaEnvelope,
  FaPaperclip,
  FaNewspaper,
  FaLock,
  FaRegNewspaper,
  FaEye,
  FaQuestionCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-4">
      <div className="max-w-7xl mx-auto items-center gap-5 flex flex-col lg:flex-row justify-around">
        <div className="my-6 space-y-4 text-center lg:text-start">
          <h2 className="text-4xl font-bold flex gap-4">
            <img src="/logo.png" />
            JetBolt
          </h2>
          <p className=" text-xl">Powering Next Gen Crypto</p>
          <p className=" text-base">&copy; JetBolt Copyright 2024</p>
          <p className="text-base">All Rights Reserved</p>
        </div>

        <div className="flex space-x-7 lg:space-x-40">
          <div className="text-center ">
            <h4 className="font-semibold mb-3 bg-color-3 rounded-md py-2">
              JOIN US
            </h4>
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

          <div>
            <h4 className="font-semibold mb-3 bg-color-3 rounded-md py-2 text-center">
              DOCUMENTATION
            </h4>
            <ul className="space-y-4 text-base">
              <li>
                <a
                  href="/whitepaper"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaNewspaper className="mr-2" /> Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaLock className="mr-2" /> Security and Audits
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaRegNewspaper className="mr-2" /> Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaEye className="mr-2" /> Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="hover:text-blue-400 flex items-center"
                >
                  <FaQuestionCircle className="mr-2" /> Help Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:text-2xl text-gray-400 max-w-5xl mx-auto text-center">
        <h1>
          CREATED BY{" "}
          <a
            href="https://palnesto.com/"
            target="_blank"
            rel="noreferrer"
            className="text-color-1 font-extrabold"
          >
            PALNESTO
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
