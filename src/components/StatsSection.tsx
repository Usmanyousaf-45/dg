
'use client';
import { useEffect, useRef, useState } from 'react';
 
const stats = [
  { value: 150, suffix: '+', label: 'Campaigns Launched', sub: 'Across all platforms' },
  { value: 50, suffix: '+', label: 'Happy Clients', sub: 'Globally served' },
  { value: 10, suffix: 'x', label: 'Average ROI', sub: 'Delivered consistently' },
  { value: 500, suffix: 'K+', label: 'Leads Generated', sub: 'For clients' },
];
 
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}
 
function StatCard({ value, suffix, label, sub, index }: typeof stats[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2200, visible);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
 
  return (
    <div
      ref={ref}
      className="glass card-hover rounded-2xl p-8 text-center border border-[rgba(255,255,255,0.05)] animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="text-5xl md:text-6xl font-extrabold mb-2"
        style={{
          fontFamily: 'Syne, sans-serif',
          background: 'linear-gradient(135deg, #f5c842, #ff6b35)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}{suffix}
      </div>
      <p className="font-semibold text-[#f0ede8] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
        {label}
      </p>
      <p className="text-xs text-[#7a7a90]">{sub}</p>
    </div>
  );
}
 
export default function StatsSection() {
  return (
    <section id="stats" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
            <span className="text-xs font-medium text-[#ff6b35] uppercase tracking-widest">Results</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Numbers That{' '}
            <span className="gradient-text">Speak Loud</span>
          </h2>
        </div>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
