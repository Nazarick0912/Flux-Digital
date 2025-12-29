const Footer = () => {
  return (
    <div id="contact" className="w-full bg-[#0a192f] text-gray-300 py-16 px-4 font-sans relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-80"></div>

      <div className="max-w-[1240px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-6 pl-2 border-l-4 border-[#00df9a]">Solutions</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Custom Software', 'Cloud Architecture', 'IoT Integration', 'Cybersecurity'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-[#00df9a] hover:translate-x-2 transition-all duration-300 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6 pl-2 border-l-4 border-blue-500">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 block">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6 pl-2 border-l-4 border-pink-500">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400 mb-6">
              <p>Level 12, Menara Digital Nexus</p>
              <p>Jalan Teknokrat 5</p>
              <p>63000 Cyberjaya</p>
              <p>Selangor, Malaysia</p>
              <p className="mt-2 text-white">contact@fluxdigital.com</p>
            </div>
          </div>

        </div>

        <div className="text-center pt-10 text-xs text-gray-500 mt-8 border-t border-gray-800">
          <p>© 2025 Flux Digital. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;