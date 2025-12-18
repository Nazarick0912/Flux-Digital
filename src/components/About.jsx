const About = () => {
  return (
    <div id="about" className="w-full bg-[#0a192f] text-gray-300 py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00df9a]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1240px] mx-auto relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#00df9a]"></div>
              <p className="text-[#00df9a] font-semibold text-sm uppercase tracking-[0.2em]">
                About Us
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We Are <br/>
              <span className="text-gradient-primary">Flux Digital</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Founded by a team of passionate CS graduates from USM, Flux Digital bridges 
              the gap between innovative technology and real-world business needs. We specialize 
              in IoT ecosystems, cloud architecture, and custom software solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#112240] rounded-lg border border-gray-700">
                <div className="w-2 h-2 bg-[#00df9a] rounded-full"></div>
                <span className="text-sm text-gray-300">Est. 2024</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#112240] rounded-lg border border-gray-700">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Penang, Malaysia</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#112240] rounded-lg border border-gray-700">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-300">4 Founders</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="group premium-border">
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00df9a]/5 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-[#00df9a]/10 transition-colors"></div>
                <div className="w-14 h-14 bg-[#00df9a]/10 rounded-xl flex items-center justify-center mb-5 border border-[#00df9a]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#00df9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To empower businesses through innovative digital solutions, making cutting-edge 
                  technology accessible and transformative for organizations of all sizes.
                </p>
              </div>
            </div>

            <div className="group premium-border">
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-purple-500/10 transition-colors"></div>
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-5 border border-purple-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To become Malaysia's leading digital transformation partner, pioneering 
                  IoT innovation and setting new standards in software excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100+", label: "Projects Delivered", color: "from-[#00df9a] to-cyan-400" },
            { value: "50+", label: "Happy Clients", color: "from-cyan-400 to-blue-500" },
            { value: "99%", label: "Success Rate", color: "from-purple-400 to-pink-500" },
            { value: "24/7", label: "Support Available", color: "from-pink-500 to-orange-400" }
          ].map((stat, index) => (
            <div key={index} className="group premium-border">
              <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;