import React from 'react';

const TechStack = () => {
  // 1. The Core Data
  const logos = [
    {
      name: "React.js",
      icon: <path d="M12,2c-5.52,0-10,4.48-10,10s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6 s6,2.69,6,6S15.31,18,12,18z M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z"/>,
      color: "text-cyan-400"
    },
    {
      name: "Node.js",
      icon: <path d="M12 2l9 5v10l-9 5-9-5V7z" />,
      color: "text-green-500"
    },
    {
      name: "Python",
      icon: <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z M11 7h2v2h-2zm0 8h2v2h-2z"/>,
      color: "text-yellow-400"
    },
    {
      name: "AWS Cloud",
      icon: <path d="M17.5,19c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C19,18.33,18.33,19,17.5,19z M19,6.5C19,4.01,16.99,2,14.5,2c-2.03,0-3.75,1.35-4.31,3.2C9.74,5.07,9.26,5,8.75,5C5.58,5,3,7.58,3,10.75c0,2.67,1.82,4.92,4.3,5.56C7.45,15.75,7.74,15.17,8,14.63c-1.92-0.58-3.3-2.38-3.3-4.48c0-2.56,2.02-4.65,4.55-4.65c0.47,0,0.92,0.08,1.34,0.22c0.47,0.16,0.98-0.08,1.15-0.54C12.16,3.87,13.25,3.1,14.5,3.1c1.88,0,3.4,1.52,3.4,3.4c0,0.3,0.24,0.55,0.55,0.55c1.9,0,3.45,1.54,3.45,3.45c0,1.9-1.54,3.45-3.45,3.45H17.5c-0.28,0-0.5-0.22-0.5-0.5v-1c0-0.28,0.22-0.5,0.5-0.5h0.95c1.08,0,1.95-0.87,1.95-1.95S19.53,8.05,18.45,8.05C18.16,8.05,17.9,8.21,17.78,8.47C17.43,9.25,16.66,9.8,15.75,9.8C14.1,9.8,12.72,8.68,12.33,7.15c-0.07-0.27-0.34-0.45-0.62-0.4l-1.01,0.18C10.45,6.97,10.28,7.2,10.33,7.46C10.86,9.58,12.78,11.15,15,11.15c0.23,0,0.45-0.02,0.67-0.06c0.5-0.1,0.99,0.23,1.08,0.73c0.09,0.5-0.23,0.99-0.73,1.08C15.69,12.97,15.35,13,15,13c-0.35,0-0.69-0.03-1.02-0.09c-1.39-0.25-2.61-0.96-3.54-1.99"/>,
      color: "text-orange-500"
    },
    {
      name: "Docker",
      icon: <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z M12 12h-2v-2h2v2z M14 12h-2v-2h2v2z M14 14h-2v-2h2v2z"/>,
      color: "text-blue-500"
    },
    {
      name: "PostgreSQL",
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M12 6c-3.31 0-6 1.34-6 3s2.69 3 6 3 6-1.34 6-3-2.69-3-6-3zm0 4c-1.86 0-3.41-.56-4.28-1.35.87-.79 2.42-1.35 4.28-1.35s3.41.56 4.28 1.35C15.41 9.44 13.86 10 12 10z"/>,
      color: "text-indigo-400"
    },
  ];

  // 2. Define the Separator Object
  const separator = { type: 'separator' };

  // 3. Create a Single Cycle (Logos + Separator at the end)
  const singleCycle = [...logos, separator];

  // 4. Duplicate the cycle 4 times
  const infiniteTechs = [...singleCycle, ...singleCycle, ...singleCycle, ...singleCycle];

  return (
    <div className="w-full bg-[#0a192f] py-16 border-y border-gray-800 overflow-hidden relative">

      {/* Title & Description */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-[#00df9a] text-lg md:text-2xl uppercase tracking-[0.2em] font-bold mb-3">
          Our Technology Stack
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          We leverage the latest frameworks and scalable cloud infrastructure to build
          robust, high-performance digital solutions.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full flex">

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0a192f] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0a192f] to-transparent z-10"></div>

        {/* The Moving Track */}
        <div className="flex animate-scroll whitespace-nowrap gap-12 hover:pause items-center">
          {infiniteTechs.map((item, index) => {

            // --- LOGIC TO RENDER SEPARATOR (LIGHTNING BOLT) OR CARD ---
            if (item.type === 'separator') {
              return (
                <div key={index} className="flex items-center justify-center opacity-50 px-8">
                    {/* The "Lightning Bolt" Separator */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#00df9a] drop-shadow-[0_0_8px_rgba(0,223,154,0.8)] animate-pulse">
                      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                    </svg>
                </div>
              );
            }

            // Normal Card Render
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-[#112240] px-6 py-3 rounded-full border border-gray-700 hover:border-[#00df9a] transition-colors duration-300 shadow-lg group min-w-[160px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 ${item.color} group-hover:scale-110 transition duration-300 flex-shrink-0`}
                >
                  {item.icon}
                </svg>

                <span className="text-gray-300 font-bold tracking-wide group-hover:text-white leading-none pt-[2px]">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechStack;