 
const Feature = () => {
  const logos = [
    { id: 1, name: "Captain Altcoin", src: "/captain_altcoin.png" },
    { id: 2, name: "Techpoint Africa", src: "/techpoint_africa.png" },
    { id: 3, name: "Analytics Insight", src: "/analytics_insight.png" },
    { id: 4, name: "Finbold", src: "/finbold.png" },
    { id: 5, name: "Crypto News Flash", src: "/crypto_news_flash.png" },
    { id: 6, name: "Disrupt Africa", src: "/disrupt_africa.png" },
    { id: 7, name: "CAPTA", src: "/capta.png" },
  ];

  return (
    <div className="w-full text-white overflow-hidden"> 
      <h2 className="text-3xl font-bold text-center uppercase pb-6">
        Featured In
      </h2>
 
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {logos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.name}
              className="h-16 mx-8 opacity-75 hover:opacity-100 transition duration-300"
            />
          ))} 
          {logos.map((logo) => (
            <img
              key={`duplicate-${logo.id}`}
              src={logo.src}
              alt={logo.name}
              className="h-16 mx-8 opacity-75 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature ;
