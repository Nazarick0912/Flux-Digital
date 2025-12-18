import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden relative' style={{backgroundImage: "url('/header2.png')"}} id='Header'>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/80 via-[#0a192f]/50 to-[#0a192f]"></div>
        
        <Navbar/>
        
        <div className='container text-center mx-auto pt-32 pb-12 px-6 md:px-20 lg:px-32 text-white relative z-10'>
            <div className="animate-slide-up">
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest uppercase bg-[#00df9a]/10 text-[#00df9a] rounded-full border border-[#00df9a]/30">
                    IoT • Cloud • Software
                </span>
            </div>
            
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto font-bold leading-[1.1] animate-slide-up delay-100'>
                <span className="block">Building the</span>
                <span className="text-gradient-primary">Digital Future</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up delay-200">
                We are a team of CS graduates transforming ideas into scalable digital solutions through innovative IoT, cloud infrastructure, and custom software development.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up delay-300'>
                <a href="#services" className='group relative px-8 py-4 rounded-lg font-semibold overflow-hidden border-2 border-[#00df9a] text-[#00df9a] hover:text-black transition-colors duration-300'>
                    <span className="absolute inset-0 bg-[#00df9a] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                        Explore Services
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </a>
                <a href="#about" className='px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg font-semibold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300'>
                    Learn More
                </a>
            </div>
            
            <div className="mt-16 animate-fade-in delay-500">
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">Trusted Technologies</p>
                <div className="flex justify-center gap-8 opacity-60">
                    <span className="text-gray-400 font-medium">React</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 font-medium">Node.js</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 font-medium">AWS</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 font-medium">IoT</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header