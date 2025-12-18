import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header2.png')"}} id='Header'>
        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Building the Digital Future</h2>
            <div className='space-x-6 mt-12'>
                <a href="#services" className='border border-white px-8 py-3 rounded hover:bg-white/10 transition-colors'>Services</a>
                <a href="#about" className='bg-[#00df9a] text-black px-8 py-3 rounded font-medium hover:bg-[#00c489] transition-colors'>About</a>
            </div>
        </div>
    </div>
  )
}

export default Header