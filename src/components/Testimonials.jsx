const reviews = [
  {
    id: 1,
    name: "Ahmad Firdaus",
    company: "TechNova Solutions",
    comment: "Flux Digital transformed our legacy systems into a modern cloud architecture. The transition was seamless and improved our efficiency by 40%.",
    image: "https://i.pravatar.cc/150?img=15"
  },
    {
      id: 2,
      name: "Nur Aisyah Zulkifli",
      company: "GreenEarth IoT",
      comment: "Their IoT integration skills are unmatched. We can now monitor our field sensors in real-time with zero latency. Highly recommended!",
      image: "https://ui-avatars.com/api/?name=Nur+Aisyah&background=0D9488&color=fff"
    },
    {
      id: 3,
      name: "Jennie Ruby",
      company: "FinTech Global",
      comment: "Security was our top priority, and Flux delivered. Their cybersecurity team identified vulnerabilities we didn't even know existed.",
      image: "https://i.pravatar.cc/150?img=32"
    }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full bg-[#0a192f] py-20 px-4">
      <div className="max-w-[1240px] mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#00df9a] font-bold uppercase tracking-widest">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white py-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-blue-500">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#112240] p-8 rounded-xl shadow-xl hover:scale-105 duration-300 border border-gray-700 relative">
              <div className="absolute top-4 right-6 text-6xl text-[#00df9a] opacity-20 font-serif">"</div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-[#00df9a]"
                />
                <div>
                  <h3 className="text-white font-bold">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.company}</p>
                </div>
              </div>

              <p className="text-gray-300 italic relative z-10">
                "{review.comment}"
              </p>

              <div className="flex mt-4 text-[#00df9a]">
                {'★'.repeat(5)}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;