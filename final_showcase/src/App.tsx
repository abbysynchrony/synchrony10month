import Header from './components/Header';
import Hero from './components/Hero';
import SemesterSection from './components/SemesterSection';
import Footer from './components/Footer';

const App = () => {
  const semesters = [
    {
      id: 'semester-1',
      title: 'Semester 1: Cybersecurity Basics',
      summary: 'In this course, I learned the essential building blocks of cybersecurity like how to protect sensitive data, create secure systems, and respond when something goes wrong. I explored how strong passwords, encryption, and planning can defend against real threats. I also learned how companies respond to attacks by detecting them early, limiting the damage, and improving their systems afterward.',
      projects: [
        'Security Policy Design',
        'Encryption and Hashing Demo'
      ],
      tools: [
        'Password Hashing',
        'Encryption'
      ]
    },
    {
      id: 'semester-2',
      title: 'Semester 2: Network Security',
      summary: 'In this course, I explored how computer networks work and how to protect them from threats. I learned to build network security from the ground up by setting up secure network structures, monitoring for suspicious activity, and reacting quickly when something goes wrong. I also practiced using real tools to test and secure networks.',
      projects: [
        'Network Event Monitoring and Incident Response',
        'Network Tool Exploration and Testing'
      ],
      tools: [
        'Wireshark',
        'Nmap'
      ]
    },
    {
      id: 'semester-3',
      title: 'Semester 3: Cyber Threats and Vulnerabilities',
      summary: 'In this course, I studied how cyber attackers find weaknesses in systems and how defenders can stop them. I learned to identify threats, scan for vulnerabilities, and respond quickly to attacks. I also practiced using threat intelligence (information about real-world attackers) to improve defenses. The course taught me how to think like both an attacker and a defender, and how to prepare systems to handle threats before they become serious problems.',
      projects: [
        'Threat Intelligence with OpenCTI',
        'Vulnerability and Risk Assessment'
      ],
      tools: [
        'Nmap',
        'OpenCTI'
      ]
    },
    {
      id: 'semester-4',
      title: 'Semester 4: Ethical Hacking',
      summary: 'In this course, I learned how ethical hackers think and work. I explored the techniques attackers use to find weak spots in systems and how to safely test those systems in a controlled environment. The course covered everything from researching targets, scanning for open doors (called "ports"), finding security holes (vulnerabilities), and even attempting to exploit those weaknesses.',
      projects: [
        'Ethical Hacking Lab Setup with Parrot OS',
        'Web App and Exploitation Testing'
      ],
      tools: [
        'Nmap',
        'OWASP ZAP'
      ]
    },
    {
      id: 'semester-5',
      title: 'Semester 5: Penetration Testing',
      summary: 'In this course, I learned how to simulate real cyberattacks in a safe and controlled environment. The goal was to think like a hacker in order to discover and fix weaknesses before they can be used by actual attackers. I followed a professional process used in the cybersecurity industry—starting with planning, then scanning systems for vulnerabilities, attempting exploitation, and finally documenting everything in a clear and ethical way.',
      projects: [
        'Penetration Testing Methodology Plan',
        'Initial Exploitation and Reporting'
      ],
      tools: [
        'Nmap',
        'Metasploit'
      ]
    },
    {
      id: 'semester-6',
      title: 'Semester 6: Digital Forensics',
      summary: 'In this course, I learned how to investigate digital evidence after a security incident. I practiced collecting data from devices (like hard drives and memory), preserving that data without changing it, and analyzing it to find clues—just like a digital detective. I used real forensic tools to recover deleted files, examine login records, and build timelines to figure out what happened and when.',
      projects: [
        'Forensic Case Investigation: Unauthorized File Access',
        'USB Drive and Disk Image Analysis'
      ],
      tools: [
        'FTK Imager'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <div className="space-y-12 py-16">
          {semesters.map((semester) => (
            <SemesterSection
              key={semester.id}
              id={semester.id}
              title={semester.title}
              summary={semester.summary}
              projects={semester.projects}
              tools={semester.tools}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App; 