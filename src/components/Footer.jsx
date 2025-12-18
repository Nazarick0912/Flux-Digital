import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0a192f] text-gray-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00df9a]/50 to-transparent"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00df9a]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-4 py-20 relative z-10">

        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your <span className="text-gradient-primary">Digital Journey?</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Let's discuss how Flux Digital can transform your business with innovative technology solutions.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-[#0a192f] border border-gray-700 text-white rounded-xl focus:outline-none focus:border-[#00df9a] focus:ring-1 focus:ring-[#00df9a] transition placeholder-gray-500"
              />
              <button className="px-8 py-4 bg-[#00df9a] text-black font-bold rounded-xl transition-all duration-300 hover:bg-[#00c489] hover:translate-y-[-2px] hover:shadow-[0_10px_20px_-10px_rgba(0,223,154,0.5)] whitespace-nowrap active:scale-95">
                Get in Touch
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <img src={assets.logo} alt="Flux Digital" className="w-32 mb-4"/>
            <p className="text-sm text-gray-500 mb-4">
              Building innovative digital solutions for tomorrow's challenges.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248z", hoverBg: "hover:bg-blue-600" },
                { icon: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z", hoverBg: "hover:bg-gray-700" },
                { icon: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z", hoverBg: "hover:bg-gray-700" }
              ].map((social, idx) => (
                <a key={idx} href="#" className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white ${social.hoverBg} transition-all duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d={social.icon}/></svg>
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Solutions", color: "#00df9a", items: ["Custom Software", "Cloud Architecture", "IoT Integration", "Cybersecurity"] },
            { title: "Company", color: "#3b82f6", items: ["About Us", "Our Team", "Careers", "Blog"] },
            { title: "Resources", color: "#a855f7", items: ["Documentation", "Case Studies", "API Reference", "Support"] },
          ].map((column, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 h-[1px] group-hover:w-2 transition-all duration-300" style={{ backgroundColor: column.color }}></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 text-[#00df9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Penang, Malaysia
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00df9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@fluxdigital.my
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50 gap-4">
          <p className="text-xs text-gray-500">
            © 2024 Flux Digital. All rights reserved. Built with ❤️ by USM CS Graduates.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;