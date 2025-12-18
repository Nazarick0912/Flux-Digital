const reviews = [
  {
    id: 1,
    name: "James Wilson",
    company: "TechNova Solutions",
    role: "CTO",
    comment: "Flux Digital transformed our legacy systems into a modern cloud architecture. The transition was seamless and improved our efficiency by 40%.",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    company: "GreenEarth IoT",
    role: "Operations Director",
    comment: "Their IoT integration skills are unmatched. We can now monitor our field sensors in real-time with zero latency. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Chen",
    company: "FinTech Global",
    role: "Security Lead",
    comment: "Security was our top priority, and Flux delivered. Their cybersecurity team identified vulnerabilities we didn't even know existed.",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full bg-[#0a192f] py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjM0NTUiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="max-w-[1240px] mx-auto relative z-10">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#00df9a]"></div>
            <p className="text-[#00df9a] font-semibold text-sm uppercase tracking-[0.2em]">
              Testimonials
            </p>
            <div className="w-12 h-[2px] bg-[#00df9a]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`group premium-border ${index === 1 ? 'md:-translate-y-4' : ''}`}
            >
              <div className="relative glass-card p-8 rounded-2xl h-full flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00df9a]/5 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-[#00df9a]/10 transition-colors"></div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00df9a]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed flex-1 mb-6 italic">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-700/50">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00df9a]/30"
                  />
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.role} at {review.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 glass-card px-8 py-4 rounded-full">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-xs text-gray-400">Average Rating</p>
            </div>
            <div className="w-[1px] h-10 bg-gray-700"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-gray-400">Happy Clients</p>
            </div>
            <div className="w-[1px] h-10 bg-gray-700"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-gray-400">Would Recommend</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;