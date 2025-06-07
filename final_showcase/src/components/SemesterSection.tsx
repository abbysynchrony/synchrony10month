import cybersecurityBasicsImg from '../assets/cybersecurity-basics.png';
import networkSecurityImg from '../assets/network-security.png';
import cyberThreatsSvg from '../assets/cyber-threats.svg';
import ethicalHackingImg from '../assets/ethical-hacking.png';
import penetrationTestingSvg from '../assets/penetration-testing.svg';
import digitalForensicsImg from '../assets/digital-forensics.png';

type SectionId = 'semester-1' | 'semester-2' | 'semester-3' | 'semester-4' | 'semester-5' | 'semester-6';

interface SemesterSectionProps {
  id: SectionId;
  title: string;
  summary: string;
  projects: string[];
  tools: string[];
}

const sectionImages: Record<SectionId, string> = {
  'semester-1': cybersecurityBasicsImg,
  'semester-2': networkSecurityImg,
  'semester-3': cyberThreatsSvg,
  'semester-4': ethicalHackingImg,
  'semester-5': penetrationTestingSvg,
  'semester-6': digitalForensicsImg,
};

const SemesterSection = ({ id, title, summary, projects, tools }: SemesterSectionProps) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="card group p-8 md:p-12" style={{ boxShadow: '0 8px 32px 0 rgba(0, 255, 255, 0.15)' }}>
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
                  {projects.slice(0, 2).map((project, index) => (
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
            <div className="flex items-center justify-center min-h-[400px]">
              {sectionImages[id] ? (
                <img 
                  src={sectionImages[id]} 
                  alt={`${title} illustration`} 
                  className="w-full h-auto max-w-[500px] max-h-[400px] object-contain"
                />
              ) : (
                <div className="aspect-video flex items-center justify-center">
                  <span className="text-gray-500">Visual content placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemesterSection; 