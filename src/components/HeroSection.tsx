'use client';
import { useState, useRef, useCallback } from 'react';
import { Upload, Camera, Sparkles, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
 
const floatingBadges = [
  { icon: TrendingUp, label: '10x ROI', sub: 'Average Return', color: '#f5c842', pos: 'top-[12%] right-[2%]' },
  { icon: Users, label: '500K+', sub: 'Audience Reached', color: '#ff6b35', pos: 'bottom-[25%] right-[0%]' },
  { icon: Zap, label: 'Growth', sub: 'SEO & Ads Expert', color: '#e040fb', pos: 'top-[40%] left-[-5%] md:left-[-8%]' },
];
 
export default function HeroSection() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
 
  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => setProfileImage(e.target?.result as string);
    reader.readAsDataURL(file);
  };
 
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);
 
  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const onDragLeave = () => setIsDragging(false);
 
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden mesh-bg"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-[rgba(245,200,66,0.04)] blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[rgba(255,107,53,0.05)] blur-[100px] animate-pulse-glow delay-500" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(245,200,66,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>
 
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
 
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8 animate-fade-up">
              <Sparkles size={14} className="text-[#f5c842]" />
              <span className="text-xs font-medium text-[#f5c842] tracking-wide uppercase">
                Digital Marketing Expert
              </span>
            </div>
 
            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up delay-100"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              I Turn{' '}
              <span className="gradient-text-shimmer">Clicks</span>
              <br />
              Into{' '}
              <span className="relative">
                <span className="gradient-text">Customers</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 10 Q 75 2, 150 8 Q 225 14, 298 6"
                    stroke="#f5c842"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>
 
            {/* Sub */}
            <p className="text-[#7a7a90] text-lg leading-relaxed max-w-xl mb-10 animate-fade-up delay-200">
              Performance-driven digital marketer specializing in{' '}
              <span className="text-[#f0ede8] font-medium">SEO</span>,{' '}
              <span className="text-[#f0ede8] font-medium">Paid Ads</span>,{' '}
              <span className="text-[#f0ede8] font-medium">Social Media</span> &{' '}
              <span className="text-[#f0ede8] font-medium">Content Strategy</span>.
              I build systems that scale brands and deliver measurable ROI.
            </p>
 
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
              <a
                href="#contact"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#f5c842] to-[#ff6b35] text-black hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-[0_8px_30px_rgba(245,200,66,0.3)]"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm glass border border-[rgba(245,200,66,0.2)] text-[#f0ede8] hover:border-[rgba(245,200,66,0.45)] transition-all duration-200"
              >
                See My Work
              </a>
            </div>
 
            {/* Social proof */}
            <div className="flex items-center gap-6 animate-fade-up delay-400">
              <div className="flex -space-x-3">
                {['#f5c842', '#ff6b35', '#e040fb', '#4fc3f7'].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#080810] flex items-center justify-center text-xs font-bold text-black"
                    style={{ background: c }}
                  >
                    {['A', 'B', 'C', '+'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#f0ede8]">50+ Happy Clients</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-[#f5c842]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-[#7a7a90] ml-1">5.0 rating</span>
                </div>
              </div>
            </div>
          </div>
 
          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in delay-200">
            <div className="relative">
              {/* Outer rotating ring */}
              <div
                className="absolute -inset-8 rounded-full border border-dashed border-[rgba(245,200,66,0.15)] animate-spin-slow"
                style={{ borderSpacing: '10px' }}
              />
              <div className="absolute -inset-16 rounded-full border border-[rgba(245,200,66,0.06)]" />
 
              {/* Profile image / upload zone */}
              <div
                className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden upload-zone ${isDragging ? 'dragover' : ''}`}
                onClick={() => fileRef.current?.click()}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
              >
                {profileImage ? (
                  <>
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[rgba(8,8,16,0.6)] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <Camera size={28} className="text-[#f5c842]" />
                      <p className="text-xs text-[#f5c842] font-medium">Change Photo</p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 animate-float">
                    <div className="w-14 h-14 rounded-full bg-[rgba(245,200,66,0.1)] flex items-center justify-center">
                      <Upload size={22} className="text-[#f5c842]" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-[#f0ede8] mb-1">Upload Your Photo</p>
                      <p className="text-xs text-[#7a7a90]">Click or drag & drop</p>
                      <p className="text-xs text-[#7a7a90]">PNG, JPG, WEBP</p>
                    </div>
                    <div className="mt-2 px-4 py-1.5 rounded-full bg-[rgba(245,200,66,0.1)] border border-[rgba(245,200,66,0.25)]">
                      <span className="text-xs text-[#f5c842] font-medium">Browse Files</span>
                    </div>
                  </div>
                )}
 
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-[rgba(245,200,66,0.2)] pointer-events-none" />
              </div>
 
              {/* Hidden file input */}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
 
              {/* Floating badges */}
              {floatingBadges.map(({ icon: Icon, label, sub, color, pos }) => (
                <div
                  key={label}
                  className={`absolute ${pos} glass-gold rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg animate-float`}
                  style={{ animationDelay: `${Math.random() * 2}s` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}22` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#f0ede8]" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {label}
                    </p>
                    <p className="text-xs text-[#7a7a90]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}