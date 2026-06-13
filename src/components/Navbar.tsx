'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
 
const navLinks = ['About', 'Services', 'Work', 'Stats', 'Contact'];
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 glass border-b border-[rgba(245,200,66,0.1)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f5c842] to-[#ff6b35] flex items-center justify-center font-bold text-black text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
            DM
          </div>
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Your<span className="gradient-text">Name</span>
          </span>
        </div>
 
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[#7a7a90] hover:text-[#f5c842] transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f5c842] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
 
        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium rounded-full border border-[rgba(245,200,66,0.3)] text-[#f5c842] hover:bg-[rgba(245,200,66,0.08)] transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>
 
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#f0ede8] hover:text-[#f5c842] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
 
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-[rgba(245,200,66,0.1)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base text-[#7a7a90] hover:text-[#f5c842] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2.5 text-sm font-medium rounded-full border border-[rgba(245,200,66,0.3)] text-[#f5c842] text-center"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}
