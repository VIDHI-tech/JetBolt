
import hero from "/services/service-3.png" 
import BuyCoin from "./BuyCoin";

const Home = () => {
 
  return (
    <div className="text-white mb-72 sm:mb-16 flex flex-col lg:flex-row lg:px-[calc(50%-700px)] ">
      <div
        className="bg-cover bg-center flex items-center h-[85vh]"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="px-6">
          {/* <div className="pl-10"> */}
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">
            THE <span className="text-[#00CFFF]">AI POWERED</span>
          </h1>
          <br />
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">
            CRYPTO COIN
          </h1>
          <p className="text-lg lg:text-2xl font-semibold"> 
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
