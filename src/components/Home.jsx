import hero from "/hero.png";
import BuyCoin from "./BuyCoin";

const Home = () => {
  return (
    <div className="text-white mb-72 sm:mb-16 flex flex-col lg:flex-row lg:px-[calc(67%-870px)]">
      <div className="relative w-full">
        <div
          className="bg-cover bg-center flex items-center h-[88vh]"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="px-3 pt-52 lg:pt-32">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">
              THE <span className="text-[#00CFFF]">AI POWERED</span>
            </h1>
            <br />
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight bg-slate-800 bg-opacity-70 rounded-lg px-5 py-2 inline-block">
              CRYPTO COIN
            </h1>
            <p className="text-md md:text-xl font-semibold bg-slate-800 bg-opacity-70 rounded-lg px-5 py-1 mb-1">
              CatBolt aims to power the next generation of crypto apps. 
              Join now and be part of the future of crypto.
            </p>
            <div className="flex gap-4">
              <img src="/tag.png" alt="Audit" className="h-14" />
              <img src="/tagg.png" alt="Grant Recipient" className="h-14" />
            </div>
          </div>
        </div>

        {/* Gradient Below Hero Image */}
        <div className="absolute bottom-0 left-0 w-full md:h-64 bg-gradient-to-t from-n-8 to-transparent pointer-events-none"></div>
      </div>

      <BuyCoin />
    </div>
  );
};

export default Home;
