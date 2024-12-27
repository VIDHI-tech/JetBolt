import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import vector from "/Vector.svg"
import ModalButton from "./design/ModalButton";
import { FaLongArrowAltRight } from "react-icons/fa";

const Develop = () => {
  const codeSnippet = ` import { CatBolt, useCatBolt } from "CatBolt";
import { useEffect } from "react";
import sample_contract from "sample_contract_path";

function Child_Object {
  let { is_authorized, wallet_address, request_authorization, call_contract, register_callback } = useCatBolt();

  function login() {
    request_authorization();
  }

  function call_my_contract(description, contract_address, function_name, parameters) {
    let abi = sample_contract.abi;
    call_contract(description, contract_address, abi, function_name, parameters);
  }

  useEffect(() => {
    register_callback("auth", (status) => {
      console.log("auth_callback", status);
    });

    register_callback("call", (status) => {
      console.log("call_callback", status);
    });
  },[]);

  return (
    { !is_authorized && <button onClick={login}>Login</button> }
    { is_authorized && <p>Wallet Address: {wallet_address}</p>}
    { is_authorized && <button onClick={()=>call_my_contract(...)}>Call Function</button> }
  );
}

function Parent_Object {
  return (
    <CatBolt>
      <Child_Object />
    </CatBolt>
  );
}

export default Parent_Object;`;

  const [animatedCode, setAnimatedCode] = useState("");
  const [highlightedCode, setHighlightedCode] = useState("");
  useEffect(() => {
    const highlighted = Prism.highlight(
      codeSnippet,
      Prism.languages.javascript,
      "javascript"
    );
    setHighlightedCode(highlighted);

    let index = 0;

    const interval = setInterval(() => {
      setAnimatedCode((prev) => prev + highlighted[index]);
      index++;
      if (index === highlighted.length) {
        clearInterval(interval);
      }
    }, 3);

    return () => clearInterval(interval);
  }, [codeSnippet]);

  return (
    <section className="relative flex flex-col lg:flex-row text-white mt-20 border border-color-6">
      {/* Code Block */}
      <div className="w-full lg:w-1/2 text-xs text-center">
        <h1 className="text-4xl font-bold border-b-1 border-color-6 py-7">
          Develop on CatBolt
        </h1>
        <div
          style={{
            backgroundImage: `url(${vector})`,
          }}
        >
          <div className="h-60 lg:h-96 w-full overflow-y-scroll scrollbar-hide  p-4">
            <pre className="language-javascript">
              <code
                className="language-javascript"
                dangerouslySetInnerHTML={{ __html: animatedCode }}
              ></code>
            </pre>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="border-l-1 border-color-6 lg:w-1/2 w-full">
        <div className="bg-[#18232C] p-10 border-b-1 border-color-6 space-y-4">
          <h1 className="text-3xl font-bold text-color-2">
            Get Started in Minutes
          </h1>
          <p>
            Our easy-to-integrate library allows developers to build CatBolt
            dApps in minutes.
          </p>
          <p className="text-gray-400">
            Don’t miss the chance to build the next generation of gas-free
            blockchain applications.
          </p>
          <a href="#" className="underline flex">
            <FaLongArrowAltRight/> Get started now
          </a>
        </div>
        <div className="p-10 space-y-4">
          <h1 className="text-3xl font-bold">
            Join the Growing Community of Developers
          </h1>
          <span className="flex justify-center gap-4 lg:justify-start">
            <ModalButton
              buttonText="BUY NOW"
              buttonStyles="bg-color-1 text-white px-6 py-6 font-bold text-xl"
            />
            <ModalButton
              buttonText="GitHub"
              buttonStyles="bg-transparent hover:bg-gray-700 border border-color-6 text-white px-8 py-6 font-bold text-xl"
              onClick={() =>
                window.open(
                  "https://github.com/CatBolt/CatBolt_React",
                  "_blank"
                )
              }
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Develop;
