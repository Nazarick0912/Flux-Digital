import aboutVideo from "../assets/about-video.mp4";

const About = () => {
  return (
    <div id="about" className="w-full bg-[#0a192f] text-gray-300 py-20 px-4">
      <div className="max-w-[1240px] mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">

              {/* LEFT COLUMN */}
              <div className="flex flex-col">
                  <p className="text-[#00df9a] font-bold text-xl md:text-2xl uppercase tracking-widest mb-4">
                      About Us
                  </p>

                  <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold py-4 text-white leading-tight">
                      We Architect the <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-cyan-400 drop-shadow-[0_0_5px_rgba(0,223,154,0.5)]">
        Digital Future
      </span>
                  </h1>

                  <p className="pb-6 text-lg text-gray-400">
                      Flux Digital bridges the gap between complex algorithms and human potential.
                      We are a collective of forward-thinking engineers dedicated to building
                      scalable, secure, and intelligent ecosystems.
                  </p>

                  {/* VIDEO */}
                  <div className="mt-6 max-w-[520px]">
                      <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                          <video
                              src={aboutVideo}
                              controls
                              className="w-full aspect-video object-cover"
                          />
                      </div>
                  </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="grid grid-cols-1 gap-8 self-center">
                  {/* Mission */}
                  <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#00df9a] to-cyan-400 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative bg-[#112240] p-8 rounded-xl border border-gray-700">
                          <h3 className="font-bold text-xl text-white mb-3 flex items-center">
                              <span className="text-[#00df9a] mr-2">✦</span> Our Mission
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                              To empower businesses by seamlessly integrating scalable digital solutions,
                              ensuring they thrive in an ever-evolving technological landscape.
                          </p>
                      </div>
                  </div>

                  {/* Vision */}
                  <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative bg-[#112240] p-8 rounded-xl border border-gray-700">
                          <h3 className="font-bold text-xl text-white mb-3 flex items-center">
                              <span className="text-pink-400 mr-2">✦</span> Our Vision
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                              To be the global catalyst for digital transformation, creating a future where
                              technology amplifies human potential without compromise.
                          </p>
                      </div>
                  </div>
              </div>

          </div>

          <div className="relative bg-[#112240]/80 backdrop-blur-md border border-gray-700 p-10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-wrap justify-between text-center transform hover:-translate-y-1 duration-500">
          <div className="w-1/2 md:w-1/4 p-4">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-cyan-400 drop-shadow-lg">100+</h2>
            <p className="text-white font-medium mt-2">Projects Delivered</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-cyan-400 drop-shadow-lg">50+</h2>
            <p className="text-white font-medium mt-2">Enterprise Clients</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-cyan-400 drop-shadow-lg">99%</h2>
            <p className="text-white font-medium mt-2">Satisfaction Rate</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-cyan-400 drop-shadow-lg">24/7</h2>
            <p className="text-white font-medium mt-2">Support Active</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;