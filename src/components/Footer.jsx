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
              <p>123 Tech Avenue</p>
              <p>Silicon Valley, CA 94025</p>
              <p className="mt-2 text-white">contact@fluxdigital.com</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.358 1.248z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500 transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" /></svg>
              </a>
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