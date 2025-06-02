import Header from './components/Header';
import Hero from './components/Hero';
import SemesterSection from './components/SemesterSection';
import Footer from './components/Footer';

const App = () => {
  const semesters = [
    {
      id: 'semester-1',
      title: 'Semester 1: Cybersecurity Basics',
      summary: 'In this course, I developed a foundational understanding of how to protect user data and respond to security incidents. I created a security policy that focused on the CIA triad (Confidentiality, Integrity, Availability), wrote an incident response plan based on a real-world Spotify breach scenario, and applied encryption and hashing techniques to protect sensitive information. I also explored how password reuse and poor practices can lead to breaches, and how tools like 2FA, password hashing, and risk classification support a secure system.',
      projects: [
        'Security Policy Development',
        'Incident Response Plan',
        'Applying Encryption Techniques'
      ],
      tools: ['Tool 1', 'Tool 2', 'Tool 3']
    },
    {
      id: 'semester-2',
      title: 'Semester 2: Network Security',
      summary: 'Your summary for Semester 2 goes here',
      projects: [
        'Project 1 for Semester 2',
        'Project 2 for Semester 2',
        'Project 3 for Semester 2'
      ],
      tools: ['Tool 1', 'Tool 2', 'Tool 3']
    },
    {
      id: 'semester-3',
      title: 'Semester 3: Cyber Threats and Vulnerabilities',
      summary: 'Your summary for Semester 3 goes here',
      projects: [
        'Project 1 for Semester 3',
        'Project 2 for Semester 3',
        'Project 3 for Semester 3'
      ],
      tools: ['Tool 1', 'Tool 2', 'Tool 3']
    },
    {
      id: 'semester-4',
      title: 'Semester 4: Ethical Hacking',
      summary: 'Your summary for Semester 4 goes here',
      projects: [
        'Project 1 for Semester 4',
        'Project 2 for Semester 4',
        'Project 3 for Semester 4'
      ],
      tools: ['Tool 1', 'Tool 2', 'Tool 3']
    },
    {
      id: 'semester-5',
      title: 'Semester 5: Penetration Testing',
      summary: 'Your summary for Semester 5 goes here',
      projects: [
        'Project 1 for Semester 5',
        'Project 2 for Semester 5',
        'Project 3 for Semester 5'
      ],
      tools: ['Tool 1', 'Tool 2', 'Tool 3']
    },
    {
      id: 'semester-6',
      title: 'Semester 6: Digital Forensics',
      summary: 'Your summary for Semester 6 goes here',
      projects: [
        'Project 1 for Semester 6',
        'Project 2 for Semester 6',
        'Project 3 for Semester 6'
      ],
      tools: ['Tool 1', 'Tool 2', 'Tool 3']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <div className="space-y-16 py-16">
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