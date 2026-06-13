'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const links = ['About','Services','Work','Stats','Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="navbar" style={{ boxShadow: scrolled ? 'var(--shadow)' : 'none' }}>
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:64 }}>
          {/* Logo */}
          <a href="#" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
            <div style={{
              width:36, height:36, borderRadius:10,
              background:'linear-gradient(135deg,#f5c842,#e05a1a)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:13, color:'#000', flexShrink:0
            }}>DM</div>
            <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:16, color:'var(--text)', letterSpacing:'-0.3px' }}>
              Your<span className="gradient-text">Name</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display:'flex', gap:32, listStyle:'none', margin:0, padding:0 }} className="desktop-nav">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} style={{
                  color:'var(--text-muted)', fontSize:14, fontWeight:500,
                  textDecoration:'none', transition:'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color='var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color='var(--text-muted)')}
                >{l}</a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            {/* Theme toggle */}
            <button onClick={toggle} style={{
              width:40, height:40, borderRadius:10, border:'1.5px solid var(--border)',
              background:'var(--input-bg)', cursor:'pointer', display:'flex',
              alignItems:'center', justifyContent:'center', color:'var(--text)', flexShrink:0
            }}>
              {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}
            </button>

            {/* CTA — hidden on very small */}
            <a href="#contact" className="btn-primary hide-sm" style={{ fontSize:13, padding:'10px 20px' }}>
              Let's Talk
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="show-mobile"
              style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text)', padding:4 }}
            >
              {open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display:'block', padding:'16px 0', fontSize:28, fontWeight:700,
                fontFamily:'Syne,sans-serif', color:'var(--text)', textDecoration:'none',
                borderBottom:'1px solid var(--border)',
                animationDelay:`${i*0.06}s`
              }}
            >{l}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop:24, justifyContent:'center' }}
            onClick={() => setOpen(false)}>
            Let's Talk
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .hide-sm { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
