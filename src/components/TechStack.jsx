import { Atom, Server, Cloud, Database, Container, Code, Zap} from "lucide-react";

const logos = [
    {
        name: "React.js",
        icon: Atom,
        color: "text-cyan-400"
    },
    {
        name: "Node.js",
        icon: Server,
        color: "text-green-500"
    },
    {
        name: "Python",
        icon: Code,
        color: "text-yellow-400"
    },
    {
        name: "AWS Cloud",
        icon: Cloud,
        color: "text-orange-500"
    },
    {
        name: "Docker",
        icon: Container,
        color: "text-blue-500"
    },
    {
        name: "PostgreSQL",
        icon: Database,
        color: "text-indigo-400"
    }
];

const separator = { type: 'separator' };
const singleCycle = [...logos, separator];
const infiniteTechs = [...singleCycle, ...singleCycle, ...singleCycle, ...singleCycle];

const TechStack = () => {
    return (
        <div className="w-full bg-[#0a192f] py-16 border-y border-gray-800 overflow-hidden relative">

            {/* Section Header */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-[#00df9a] text-lg md:text-2xl uppercase tracking-[0.2em] font-bold mb-3">
                    Our Technology Stack
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    We leverage the latest frameworks and scalable cloud infrastructure to build
                    robust, high-performance digital solutions.
                </p>
            </div>

            {/* Scrolling Container */}
            <div className="relative w-full flex">

                {/* Left fade */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0a192f] to-transparent z-10"></div>

                {/* Right fade */}
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0a192f] to-transparent z-10"></div>

                {/* Infinite scroll row */}
                <div className="flex animate-scroll whitespace-nowrap gap-12 hover:pause items-center">

                    {infiniteTechs.map((item, index) => {
                        if (item.type === "separator") {
                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-center opacity-50 px-8"
                                >
                                    <Zap
                                        className="w-8 h-8 text-[#00df9a]
                             drop-shadow-[0_0_8px_rgba(0,223,154,0.8)]
                             animate-pulse"
                                        strokeWidth={1.8}
                                    />
                                </div>
                            );
                        }

                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-3
                         bg-[#112240] px-6 py-3 rounded-full
                         border border-gray-700 hover:border-[#00df9a]
                         transition-colors duration-300
                         shadow-lg group min-w-[160px]"
                            >
                                <Icon
                                    className={`w-6 h-6 ${item.color}
                            group-hover:scale-110
                            transition duration-300 flex-shrink-0`}
                                    strokeWidth={1.8}
                                />

                                <span className="text-gray-300 font-bold tracking-wide
                               group-hover:text-white
                               leading-none pt-[2px]">
                {item.name}
              </span>
                            </div>
                        );
                    })}

                </div>
            </div>

            {/* Animation styles */}
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