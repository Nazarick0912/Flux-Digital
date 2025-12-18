import React from 'react';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Custom Software",
      desc: "Tailored applications built with Node.js and React to solve your unique business challenges.",
      // Using a wrapper div for the icon to add color
      iconColor: "bg-blue-500/10 text-blue-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 18" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      desc: "Secure and scalable cloud solutions that grow with your company, ensuring 99.9% uptime.",
      iconColor: "bg-[#00df9a]/10 text-[#00df9a]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "IoT Solutions",
      desc: "Connecting your physical assets to the digital world with smart sensors and real-time analytics.",
      iconColor: "bg-purple-500/10 text-purple-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Cybersecurity",
      desc: "Advanced threat protection to safeguard your data integrity and client trust.",
      iconColor: "bg-pink-500/10 text-pink-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a37.45 37.45 0 0 1-1.043 3.296 37.45 37.45 0 0 1-2.104 6.648 3.621 3.621 0 0 1-3.039 2.108 3.622 3.622 0 0 1-3.032-2.108 37.468 37.468 0 0 1-2.104-6.648 37.463 37.463 0 0 1-1.038-3.296A3.748 3.748 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a37.45 37.45 0 0 1 1.043-3.296 37.45 37.45 0 0 1 2.104-6.648 3.621 3.621 0 0 1 3.039-2.108 3.622 3.622 0 0 1 3.032 2.108 37.468 37.468 0 0 1 2.104 6.648 37.463 37.463 0 0 1 1.038 3.296A3.748 3.748 0 0 1 21 12Z" />
        </svg>
      )
    },
  ];

  return (
    <div id="services" className="w-full py-20 px-4 bg-[#0a192f] text-gray-300">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="text-center pb-12">
          <h2 className="text-4xl font-bold text-white py-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#00df9a] mx-auto rounded-full"></div>
        </div>

        {/* Modern Hover Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#112240] p-6 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              {/* Subtle Gradient Background Effect on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00df9a] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon Bubble */}
              <div className={`w-16 h-16 rounded-lg ${item.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Simplified "Why Choose Us" (Clean Layout) */}
        <div className="bg-[#112240]/50 border border-gray-700 p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700">
             <div className="text-center p-4">
                <p className="text-[#00df9a] font-bold text-lg">Global Reach</p>
                <p className="text-sm text-gray-400 mt-2">Serving 15+ Countries</p>
             </div>
             <div className="text-center p-4">
                <p className="text-[#00df9a] font-bold text-lg">24/7 Support</p>
                <p className="text-sm text-gray-400 mt-2">Always Online Teams</p>
             </div>
             <div className="text-center p-4">
                <p className="text-[#00df9a] font-bold text-lg">Agile Speed</p>
                <p className="text-sm text-gray-400 mt-2">Rapid Deployment</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;