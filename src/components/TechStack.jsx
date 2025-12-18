const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "MongoDB", color: "#47A248" },
];

const TechStack = () => {
  const allTechs = [...technologies, ...technologies];
  
  return (
    <div className="w-full bg-[#112240]/30 py-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a192f] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a192f] to-transparent z-10"></div>

      <div className="flex animate-marquee">
        {allTechs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 group"
          >
            <div 
              className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}50` }}
            ></div>
            <span className="text-gray-400 font-semibold text-lg whitespace-nowrap group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechStack;