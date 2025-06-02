interface SemesterSectionProps {
  id: string;
  title: string;
  summary: string;
  projects: string[];
  tools: string[];
}

const SemesterSection = ({ id, title, summary, projects, tools }: SemesterSectionProps) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="card group">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-cyber-accent">
              {title}
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Summary */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-200">
                  Summary
                </h3>
                <p className="text-gray-400">
                  {summary}
                </p>
              </div>

              {/* Key Projects */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-200">
                  Key Projects
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-200">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="space-y-6">
              <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700/50">
                <span className="text-gray-500">Visual content placeholder</span>
              </div>
              
              {/* Download Section */}
              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 border border-cyber-accent text-cyber-accent rounded-lg 
                                 hover:bg-cyber-accent hover:text-cyber-dark transition-colors">
                  Download Resources
                </button>
                <button className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg 
                                 hover:bg-gray-600 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemesterSection; 