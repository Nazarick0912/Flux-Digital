const teamData = [
  {
    id: 1,
    name: "Kyzer Phneh",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/300?img=11",
    desc: "Visionary leader driving innovation in IoT ecosystems and digital transformation strategies.",
    color: "#00df9a",
    linkedin: "#",
    github: "#"
  },
  {
    id: 2,
    name: "Yap Han Lim",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/300?img=5",
    desc: "Cloud architecture expert with deep expertise in AWS and scalable distributed systems.",
    color: "#22d3ee",
    linkedin: "#",
    github: "#"
  },
  {
    id: 3,
    name: "Ivan Lim Zheng Xian",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/300?img=13",
    desc: "Full-stack engineer specializing in React, Node.js, and modern web technologies.",
    color: "#a855f7",
    linkedin: "#",
    github: "#"
  },
  {
    id: 4,
    name: "Goo Yong Shen",
    role: "Product Designer",
    image: "https://i.pravatar.cc/300?img=9",
    desc: "UX specialist crafting intuitive, human-centric digital experiences that delight users.",
    color: "#ec4899",
    linkedin: "#",
    github: "#"
  }
];

const Team = () => {
  return (
    <div id="team" className="w-full py-24 px-4 bg-[#0a192f] text-gray-300 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00df9a]/3 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-[1240px] mx-auto relative z-10">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#00df9a]"></div>
            <p className="text-[#00df9a] font-semibold text-sm uppercase tracking-[0.2em]">
              Our Team
            </p>
            <div className="w-12 h-[2px] bg-[#00df9a]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet the <span className="text-gradient-primary">Founders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A team of passionate CS graduates from USM, united by our vision to build innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group premium-border"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col relative">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-16 translate-x-16"
                  style={{ backgroundColor: member.color }}
                ></div>

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>
                  
                  <div 
                    className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: member.color, boxShadow: `0 0 15px ${member.color}` }}
                  ></div>
                </div>
                
                <div className="p-6 -mt-8 relative z-10 flex-1 flex flex-col">
                  <div 
                    className="w-12 h-1 rounded-full mb-4 shadow-sm"
                    style={{ backgroundColor: member.color }}
                  ></div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">{member.name}</h3>
                  <p 
                    className="text-sm font-semibold mb-3 tracking-wide uppercase"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                    {member.desc}
                  </p>
                  
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={member.linkedin}
                      className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-white/5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248zM6.89 16h2.498V9.76c0-.18.026-.363.091-.497.199-.365.656-.74 1.423-.74 1.004 0 1.406.764 1.406 2.253V16h2.502V9.52c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.498c.033.733 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.github}
                      className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 border border-white/5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Want to join our team?</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#00df9a] font-semibold hover:gap-4 transition-all duration-300">
            View Open Positions
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Team;