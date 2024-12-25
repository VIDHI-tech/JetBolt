 
const Feature = () => {
  const logos = [
    { id: 1, name: "Captain Altcoin", src: "/f1.png" },
    { id: 2, name: "Techpoint Africa", src: "/f2.png" },
    { id: 3, name: "Analytics Insight", src: "/f3.png" },
    { id: 4, name: "Finbold", src: "/f4.png" },
    { id: 5, name: "Crypto News Flash", src: "/f5.png" },
    { id: 6, name: "Disrupt Africa", src: "/f6.png" },
  ];

  return (
    <div className="w-full text-white overflow-hidden"> 
      <h2 className="text-3xl font-bold text-center pb-6">
        Featured In
      </h2>
 
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
        
          {logos.map((logo) => (
            <img
              key={`duplicate-${logo.id}`}
              src={logo.src}
              alt={logo.name}
              className="h-14 mx-8 opacity-75 hover:opacity-50 transition duration-100000"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature ;
