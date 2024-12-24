// import React, { useState, useEffect } from "react";
// import { Checkbox, Progress } from "@nextui-org/react";
// import hero from "../assets/services/service-3.png";
// import ModalButton from "./design/ModalButton";

// const Home = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 20,
//     minutes: 47,
//     seconds: 59,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         let { days, hours, minutes, seconds } = prevTime;

//         if (seconds > 0) {
//           seconds -= 1;
//         } else if (minutes > 0) {
//           seconds = 59;
//           minutes -= 1;
//         } else if (hours > 0) {
//           seconds = 59;
//           minutes = 59;
//           hours -= 1;
//         } else if (days > 0) {
//           seconds = 59;
//           minutes = 59;
//           hours = 23;
//           days -= 1;
//         } else {
//           clearInterval(timer);
//         }

//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);
//   return (
//     <div className="text-white h-[85vh] mb-72 sm:mb-16 flex flex-col lg:flex-row lg:px-[calc(40%-500px)] ">
//       <div
//         className="bg-cover bg-center flex items-center justify-center w-1/2"
//         style={{
//           backgroundImage: `url(${hero})`,
//         }}
//       >
//         <div className="pl-10">
//           <h1 className="lg:text-5xl font-bold mb-4 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">
//             THE  <span className="text-[#00CFFF]">AI POWERED</span>
//           </h1>
//           <h1 className="lg:text-5xl font-bold mb-4 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">CRYPTO COIN</h1>
//           <p className="text-lg lg:text-2xl mb-6 font-bold">
//             JetBolt aims to power the next generation of crypto apps. Join now
//             and be part of the future of crypto.
//           </p>
//           <div className="flex gap-4">
//             <img
//               src="/public/tag.png"
//               alt="Audit"
//               className="h-14"
//             />
//             <img
//               src="/public/tagg.png"
//               alt="Grant Recipient"
//               className="h-14"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="lg:w-1/3 lg:mt-11 flex justify-center border-color-2 border-2 rounded-lg">
//         <div className="absolute py-3 shadow-lg w-full max-w-sm text-center px-3">
//           <h2 className="text-4xl font-bold  ">
//             BUY COIN
//           </h2>
//             <p className="text-lg text-[#00CFFF] font-extrabold">US$1,820,818 SOLD</p>

//             <div className="flex flex-col justify-center items-center my-4 gap-2 h-32 bg-color-4 rounded-lg">
//             <span className="text-lg text-white">Price Increase In</span>
//             <div className="flex justify-center items-center gap-7 text-center">
//               <div>
//                 <p className="text-5xl font-bold text-color-2 ">
//                   {String(timeLeft.days).padStart(2, "0")}
//                 </p>
//                 <p className="text-sm">DAYS</p>
//               </div>
//               <div>
//                 <p className="text-5xl font-bold text-color-2">
//                   {String(timeLeft.hours).padStart(2, "0")}
//                 </p>
//                 <p className="text-sm">HOURS</p>
//               </div>
//               <div>
//                 <p className="text-5xl font-bold text-color-2">
//                   {String(timeLeft.minutes).padStart(2, "0")}
//                 </p>
//                 <p className="text-sm">MINS</p>
//               </div>
//               <div>
//                 <p className="text-5xl font-bold text-color-2">
//                   {String(timeLeft.seconds).padStart(2, "0")}
//                 </p>
//                 <p className="text-sm">SECS</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between mb-4">
//             <label htmlFor="payment" className="font-medium">
//               You Pay:
//             </label>
//             <input
//               type="number"
//               id="payment"
//               className="p-2 rounded-md bg-gray-700 text-white w-1/2"
//               placeholder="250 USD"
//             />
//           </div>
//           <div className="flex items-center justify-between mb-6">
//             <label htmlFor="receive" className="font-medium">
//               You Receive:
//             </label>
//             <p className="p-2 rounded-md bg-gray-700 text-white w-1/2">
//               25792.25 JBOLT
//             </p>
//           </div>

//           <div className="text-center">
//            <span className="text-base"><Checkbox defaultSelected size="lg" className="text-white"/>I agree to the <a href="#term" className="text-white">Terms and Conditions</a> and <a href="#privacy" className="text-white">Privacy Policy</a>
//            </span>
//             <ModalButton buttonText="BUY NOW" buttonStyles="bg-color-2 text-black w-full font-bold mt-4 py-7 font-bold text-2xl" />
//             <p className="text-sm mt-4 text-green-400">
//               You get 10% extra free tokens!
//             </p>
//             <p className="text-xs ">
//               Buy over $500 (0.001 ETH) and get 15% extra tokens
//             </p>
//           </div>
//           <Progress isStriped aria-label="Loading..." className="max-w-md py-5" color="warning"  value={80} />
//           <p className="text-xs text-center">Full Discount Chart</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
 
import hero from "../assets/services/service-3.png"; 
import BuyCoin from "./BuyCoin";

const Home = () => {
 
  return (
    <div className="text-white mb-72 sm:mb-16 flex flex-col lg:flex-row lg:px-[calc(40%-500px)] ">
      <div
        className="bg-cover bg-center flex items-center h-[85vh]"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="px-6">
          {/* <div className="pl-10"> */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">
            THE <span className="text-[#00CFFF]">AI POWERED</span>
          </h1>
          <br />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">
            CRYPTO COIN
          </h1>
          <p className="text-lg lg:text-2xl  font-semibold"> 
            JetBolt aims to power the next generation of crypto apps. 
          </p>
          <p className="text-lg lg:text-2xl mb-6 font-semibold">Join now and be part of the future of crypto.</p>
          <div className="flex gap-4">
            <img src="/tag.png" alt="Audit" className="h-14" />
            <img src="/tagg.png" alt="Grant Recipient" className="h-14" />
          </div>
        </div>
      </div>

      <BuyCoin />
    </div>
  );
};

export default Home;
