import { Linkedin, Github } from "lucide-react";
import kyzerImg from '../assets/kyzer.jpg';
import hanlimImg from '../assets/hanlim.png';
import ivanImg from '../assets/ivan.jpg';
import yongshenImg from '../assets/yongshen.jpg';

const teamData = [
    {
        id: 1,
        name: "Kyzer Phneh",
        role: "CEO & Founder",
        image: kyzerImg,
        desc: "Visionary leader with 15+ years in IoT ecosystems.",
        borderColor: "border-white",
        linkedin: "https://www.linkedin.com/in/kyzer-phneh/",
        github: "https://github.com/kyzer1023"
    },
    {
        id: 2,
        name: "Yap Han Lim",
        role: "Chief Technology Officer",
        image: hanlimImg,
        desc: "Expert in cloud architecture and scalable systems.",
        borderColor: "border-white",
        linkedin: "https://www.linkedin.com/in/yap-han-lim-5962a6244",
        github: "https://github.com/HanLim-415"
    },
    {
        id: 3,
        name: "Ivan Lim Zheng Xian",
        role: "Lead Developer",
        image: ivanImg,
        desc: "Full-stack wizard specializing in React and Node.js.",
        borderColor: "border-white",
        linkedin: "https://www.linkedin.com/in/ivan-lim-zheng-xian-5199b6295",
        github: "https://github.com/Ivan1048"
    },
    {
        id: 4,
        name: "Goo Yong Shen",
        role: "Product Designer",
        image: yongshenImg,
        desc: "Creating intuitive human-centric digital experiences.",
        borderColor: "border-white",
        linkedin: "https://www.linkedin.com/in/gooys0912",
        github: "https://github.com/Nazarick0912"
    }
];

const Team = () => {
    return (
        <div id="team" className="w-full py-20 px-4 bg-[#0a192f] text-gray-300">
            <div className="max-w-[1240px] mx-auto">

                {/* Section Header */}
                <div className="text-center pb-12">
                    <p className="text-[#00df9a] font-bold text-xl uppercase tracking-widest mb-4">
                        Our Team
                    </p>
                    <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold text-white py-2">
                        Meet the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 drop-shadow-lg">
                            Innovators
                        </span>
                    </h2>
                    <p className="py-4 text-gray-400 text-lg">
                        The minds behind the code.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamData.map((member) => (
                        <div
                            key={member.id}
                            className="group bg-[#112240] p-6 rounded-xl shadow-xl
                                       border border-gray-800
                                       transition-all duration-300
                                       hover:-translate-y-2"
                        >
                            {/* Avatar */}
                            <div className="w-full flex justify-center mb-6">
                                <div
                                    className={`p-1 rounded-full border-4 ${member.borderColor}
                                                shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-bold mt-1 mb-3
                                              text-transparent bg-clip-text
                                              bg-gradient-to-r from-gray-200 to-gray-400">
                                    {member.role}
                                </p>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {member.desc}
                                </p>
                            </div>

                            {/* Social Icons (NORMAL FLOW, BELOW TEXT) */}
                            <div
                                className="
                                mt-6 flex justify-center gap-4
                                opacity-100 translate-y-0
                                md:mt-0 md:opacity-0 md:translate-y-2
                                md:group-hover:mt-6 md:group-hover:opacity-100 md:group-hover:translate-y-0
                                transition-all duration-300
                                "
                            >

                            <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${member.name} LinkedIn`}
                                    className="p-2 bg-gray-700 rounded-full
                                               hover:bg-[#00df9a] hover:text-black
                                               transition-all hover:scale-110"
                                >
                                    <Linkedin size={18} strokeWidth={2} />
                                </a>

                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${member.name} GitHub`}
                                    className="p-2 bg-gray-700 rounded-full
                                               hover:bg-[#00df9a] hover:text-black
                                               transition-all hover:scale-110"
                                >
                                    <Github size={18} strokeWidth={2} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
