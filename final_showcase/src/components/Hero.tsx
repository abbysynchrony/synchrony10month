const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Cybersecurity-themed background pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-5">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-cyber-accent"
            style={{
              opacity: Math.random() * 0.5 + 0.1,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My Cybersecurity
            <br />
            <span className="text-cyber-accent">Learning Journey</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
            What I've learned in the last ten months with dae at the Synchrony Skills Academy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#semester-1"
              className="px-6 py-3 border-2 border-cyber-accent text-cyber-accent font-semibold 
                       rounded-lg hover:bg-cyber-accent hover:text-cyber-dark transition-colors"
            >
              Start Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 