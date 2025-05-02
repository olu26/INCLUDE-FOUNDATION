
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, BookOpen, Layers, Contact, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About Us', path: '/about', icon: <Info size={18} /> },
    { name: 'E-LAB Challenges', path: '/challenges', icon: <Layers size={18} /> },
    { name: 'Programs', path: '/programs', icon: <BookOpen size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Contact size={18} /> },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center" 
          aria-label="INCLUDE Foundation Homepage"
        >
          <div className="font-bold text-2xl text-include-yellow">
            <span className="sr-only">INCLUDE FOUNDATION</span>
            INCLUDE <span className="text-include-yellow">FOUNDATION</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "nav-link",
                location.pathname === link.path && "active"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="ml-4 bg-include-blue hover:bg-include-dark text-white">
            <Heart size={16} className="mr-1" />
            Donate
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-include-blue" />
          ) : (
            <Menu className="h-6 w-6 text-include-blue" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg py-2 border-b border-gray-100 flex items-center",
                  location.pathname === link.path
                    ? "font-semibold text-include-blue"
                    : "text-gray-800"
                )}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-include-blue hover:bg-include-dark text-white mt-4">
              <Heart size={16} className="mr-1" />
              Donate
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
