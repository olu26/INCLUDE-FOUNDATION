import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-include-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">INCLUDE Foundation</h2>
            <p className="text-white/80 mb-4">
              Enhancing access to education and employment for the deaf and blind through improved communication tools and technology.
            </p>
            <div className="flex space-x-4 mt-4">
              
              <a href="https://www.instagram.com/afrix_gen?igsh=eG4zZWRhaW5tdTA1&utm_source=qr" aria-label="Instagram" className="hover:text-include-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@afrix_gen?si=vzSIFGwpUy-Wd7-m" aria-label="LinkedIn" className="hover:text-include-yellow transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-include-yellow transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-include-yellow transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/challenges" className="hover:text-include-yellow transition-colors">
                    E-LAB Challenges
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="hover:text-include-yellow transition-colors">
                    Programs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-include-yellow transition-colors">
                    Accessibility Statement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-include-yellow transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-include-yellow transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-white/80">
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@includefoundation.org" className="hover:text-include-yellow transition-colors">
                  info@includefoundation.org
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+2348000000000" className="hover:text-include-yellow transition-colors">
                  +234 800 000 0000
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
          <p>© {new Date().getFullYear()} INCLUDE Foundation. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This website is designed to be accessible for all users, including those who are blind or deaf.
          </p>
        </div>
      </div>
    </footer>
  );
}
