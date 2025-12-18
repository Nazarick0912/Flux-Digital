import React from 'react';

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Kyzer Phneh",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/150?img=11", // Placeholder image
      desc: "Visionary leader with 15+ years in IoT ecosystems.",
      borderColor: "border-[#00df9a]"
    },
    {
      id: 2,
      name: "Yap Han Lim",
      role: "Chief Technology Officer",
      image: "https://i.pravatar.cc/150?img=5",
      desc: "Expert in cloud architecture and scalable systems.",
      borderColor: "border-blue-500"
    },
    {
      id: 3,
      name: "Ivan Lim Zheng Xian",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/150?img=13",
      desc: "Full-stack wizard specializing in React and Node.js.",
      borderColor: "border-purple-500"
    },
    {
      id: 4,
      name: "Goo Yong Shen",
      role: "Product Designer",
      image: "https://i.pravatar.cc/150?img=9",
      desc: "Creating intuitive human-centric digital experiences.",
      borderColor: "border-pink-500"
    }
  ];

  return (
    <div id="team" className="w-full py-20 px-4 bg-[#0a192f] text-gray-300">
      <div className="max-w-[1240px] mx-auto">

        {/* Header Section */}
        <div className="text-center pb-12">
          <p className="text-[#00df9a] font-bold text-xl uppercase tracking-widest mb-4">
            Our Team
          </p>
          <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold text-white py-2">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-blue-500">Innovators</span>
          </h2>
          <p className="py-4 text-gray-400 text-lg">
            The minds behind the code.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="relative group bg-[#112240] p-6 rounded-xl shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-800"
            >
              {/* Profile Image with Neon Ring */}
              <div className="w-full flex justify-center mb-6">
                <div className={`p-1 rounded-full border-4 ${member.borderColor} shadow-[0_0_15px_rgba(0,0,0,0.3)]`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className={`text-sm font-bold mt-1 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400`}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              {/* Social Icons (Appear on Hover) */}
              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 {/* LinkedIn Icon */}
                 <div className="p-2 bg-gray-700 rounded-full hover:bg-[#00df9a] hover:text-black cursor-pointer transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248zM6.89 16h2.498V9.76c0-.18.026-.363.091-.497.199-.365.656-.74 1.423-.74 1.004 0 1.406.764 1.406 2.253V16h2.502V9.52c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.498c.033.733 0 7.225 0 7.225z"/>
                    </svg>
                 </div>
                 {/* GitHub Icon */}
                 <div className="p-2 bg-gray-700 rounded-full hover:bg-[#00df9a] hover:text-black cursor-pointer transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;