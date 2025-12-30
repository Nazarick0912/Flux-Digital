import { Code2, Cloud, Wifi, ShieldCheck } from "lucide-react";

const servicesData = [
    {
        id: 1,
        title: "Custom Software",
        desc: "Tailored applications built with Node.js and React to solve your unique business challenges.",
        iconColor: "bg-blue-500/10 text-blue-500",
        icon: Code2
    },
    {
        id: 2,
        title: "Cloud Infrastructure",
        desc: "Secure and scalable cloud solutions that grow with your company, ensuring 99.9% uptime.",
        iconColor: "bg-blue-500/10 text-blue-500",
        icon: Cloud
    },
    {
        id: 3,
        title: "IoT Solutions",
        desc: "Connecting your physical assets to the digital world with smart sensors and real-time analytics.",
        iconColor: "bg-blue-500/10 text-blue-500",
        icon: Wifi
    },
    {
        id: 4,
        title: "Cybersecurity",
        desc: "Advanced threat protection to safeguard your data integrity and client trust.",
        iconColor: "bg-blue-500/10 text-blue-500",
        icon: ShieldCheck
    }
];

const Services = () => {
    return (
        <div id="services" className="w-full py-20 px-4 bg-[#0a192f] text-gray-300">
            <div className="max-w-[1240px] mx-auto">

                {/* Section Header */}
                <div className="text-center pb-12">
                    <h2 className="text-4xl font-bold text-white py-4">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-[#00df9a] mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {servicesData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="group relative bg-[#112240] p-6 rounded-xl
                           overflow-hidden hover:-translate-y-2
                           transition-all duration-300 shadow-xl"
                            >
                                {/* Top gradient bar */}
                                <div className="absolute top-0 left-0 w-full h-1
                                bg-gradient-to-r from-[#00df9a] to-blue-500
                                transform scale-x-0 group-hover:scale-x-100
                                transition-transform duration-500 origin-left">
                                </div>

                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 rounded-lg ${item.iconColor}
                              flex items-center justify-center mb-6
                              group-hover:scale-110 transition-transform`}
                                >
                                    <Icon className="w-8 h-8" strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Bar */}
                <div className="bg-[#112240]/50 border border-gray-700 p-8 rounded-2xl">
                    <div className="grid md:grid-cols-3 gap-8
                          divide-y md:divide-y-0 md:divide-x
                          divide-gray-700">

                        <div className="text-center p-4">
                            <p className="text-[#00df9a] font-bold text-lg">
                                Global Reach
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                Serving 15+ Countries
                            </p>
                        </div>

                        <div className="text-center p-4">
                            <p className="text-[#00df9a] font-bold text-lg">
                                24/7 Support
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                Always Online Teams
                            </p>
                        </div>

                        <div className="text-center p-4">
                            <p className="text-[#00df9a] font-bold text-lg">
                                Agile Speed
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                Rapid Deployment
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;