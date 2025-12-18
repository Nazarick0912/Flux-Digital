import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [showMobileMenu])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "#Header", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
            <a href="#Header" className="flex items-center gap-2">
              <img src={assets.logo} alt="Flux Digital" className="w-36 sm:w-44"/>
            </a>
            
            <ul className='hidden md:flex items-center gap-8'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className='relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group'
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00df9a] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact"
              className='hidden md:flex items-center gap-2 bg-[#00df9a] text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-[#00c489] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,223,154,0.4)]'
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <button 
              onClick={() => setShowMobileMenu(true)} 
              className='md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10'
            >
              <img src={assets.menu_icon} className='w-5' alt="Menu" />
            </button>
        </div>

        <div className={`md:hidden fixed inset-0 bg-[#0a192f]/98 backdrop-blur-xl transition-all duration-300 ${showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className='flex justify-between items-center p-6'>
            <img src={assets.logo} alt="Flux Digital" className="w-32"/>
            <button 
              onClick={() => setShowMobileMenu(false)} 
              className='w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10'
            >
              <img src={assets.cross_icon} className='w-5' alt="Close" />
            </button>
          </div>
          
          <ul className='flex flex-col items-center gap-6 mt-12 px-5'>
            {navLinks.map((link, idx) => (
              <li key={link.href} style={{ animationDelay: `${idx * 50}ms` }} className={`${showMobileMenu ? 'animate-slide-up' : ''}`}>
                <a 
                  onClick={() => setShowMobileMenu(false)} 
                  href={link.href} 
                  className='text-2xl font-semibold text-white hover:text-[#00df9a] transition-colors'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-12 left-0 right-0 px-6">
            <a 
              href="#contact"
              onClick={() => setShowMobileMenu(false)}
              className='flex items-center justify-center gap-2 w-full bg-[#00df9a] text-black font-semibold py-4 rounded-xl'
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar