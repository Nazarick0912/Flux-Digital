import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={logo} alt="Flux Digital" className="w-40 sm:w-52" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#about" className='cursor-pointer hover:text-[#00df9a] transition-colors'>About</a>
          <a href="#services" className='cursor-pointer hover:text-[#00df9a] transition-colors'>Services</a>
          <a href="#team" className='cursor-pointer hover:text-[#00df9a] transition-colors'>Team</a>
        </ul>
        <Menu onClick={() => setShowMobileMenu(true)} className='md:hidden w-8 h-8 text-white cursor-pointer' />
      </div>

      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-[#0a192f]/95 backdrop-blur-md transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <X onClick={() => setShowMobileMenu(false)} className='w-8 h-8 text-white' />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-white'>
          <a onClick={() => setShowMobileMenu(false)} href="#about" className='px-4 py-2 rounded-full inline-block hover:text-[#00df9a] transition-colors'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#services" className='px-4 py-2 rounded-full inline-block hover:text-[#00df9a] transition-colors'>Services</a>
          <a onClick={() => setShowMobileMenu(false)} href="#team" className='px-4 py-2 rounded-full inline-block hover:text-[#00df9a] transition-colors'>Team</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar