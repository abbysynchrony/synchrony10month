import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Semester 1', href: '#semester-1' },
    { name: 'Semester 2', href: '#semester-2' },
    { name: 'Semester 3', href: '#semester-3' },
    { name: 'Semester 4', href: '#semester-4' },
    { name: 'Semester 5', href: '#semester-5' },
    { name: 'Semester 6', href: '#semester-6' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cyber-dark/80 backdrop-blur border-b border-gray-800/50">
      <div className="container">
        <nav className="h-16 flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold text-cyber-accent"
          >
            Cybersecurity Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyber-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50">
            <nav className="py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyber-accent transition-colors px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 