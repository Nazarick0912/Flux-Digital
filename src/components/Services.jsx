const servicesData = [
  {
    id: 1,
    title: "Custom Software Development",
    desc: "Tailored web and mobile applications built with React, Node.js, and modern frameworks to solve your unique business challenges.",
    color: "#3b82f6",
    features: ["Web Apps", "Mobile Apps", "APIs"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 18" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    desc: "Secure and scalable AWS/Azure cloud solutions that grow with your company, ensuring 99.9% uptime and optimal performance.",
    color: "#00df9a",
    features: ["AWS", "Azure", "DevOps"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "IoT Solutions",
    desc: "Connect physical assets to the digital world with smart sensors, edge computing, and real-time analytics dashboards.",
    color: "#a855f7",
    features: ["Sensors", "Edge Computing", "Analytics"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Cybersecurity",
    desc: "Advanced threat protection, security audits, and compliance solutions to safeguard your data integrity and client trust.",
    color: "#ec4899",
    features: ["Audits", "Compliance", "Monitoring"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full py-24 px-4 bg-[#0a192f] text-gray-300 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjM0NTUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="max-w-[1240px] mx-auto relative z-10">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#00df9a]"></div>
            <p className="text-[#00df9a] font-semibold text-sm uppercase tracking-[0.2em]">
              What We Do
            </p>
            <div className="w-12 h-[2px] bg-[#00df9a]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end digital solutions tailored to transform your business and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="group premium-border"
            >
              <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-16 translate-x-16"
                  style={{ backgroundColor: item.color }}
                ></div>
                
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border"
                    style={{ backgroundColor: `${item.color}15`, color: item.color, borderColor: `${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex gap-2">
                    {item.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full border"
                        style={{ backgroundColor: `${item.color}10`, color: item.color, borderColor: `${item.color}20` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 group/link"
                  style={{ color: item.color }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🌏", title: "Global Reach", desc: "Serving clients across 15+ countries" },
              { icon: "⚡", title: "Fast Delivery", desc: "Agile methodology for rapid deployment" },
              { icon: "🛡️", title: "24/7 Support", desc: "Round-the-clock technical assistance" },
              { icon: "🎯", title: "Results Driven", desc: "Focus on measurable business outcomes" }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;