
const testimonials = [
  {
    quote: "Our organic traffic tripled in just 4 months. The SEO strategy was meticulous, data-driven, and delivered beyond expectations.",
    name: "Sarah Johnson",
    role: "CEO, FashionForward",
    initials: "SJ",
    color: "#f5c842",
  },
  {
    quote: "The Meta Ads funnel they built for us generated 50,000 leads at an insane CPL. Best marketing investment we've made.",
    name: "Ahmed Malik",
    role: "Founder, TechLaunch SaaS",
    initials: "AM",
    color: "#ff6b35",
  },
  {
    quote: "Professional, responsive, and incredibly results-driven. Our Google Ads ROAS went from 1.8x to 6.5x. Highly recommend!",
    name: "Priya Sharma",
    role: "Marketing Head, RetailCo",
    initials: "PS",
    color: "#e040fb",
  },
];
 
export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4fc3f7] animate-pulse" />
            <span className="text-xs font-medium text-[#4fc3f7] uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>
 
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, initials, color }, i) => (
            <div
              key={name}
              className="glass card-hover rounded-2xl p-7 border border-[rgba(255,255,255,0.05)] flex flex-col gap-5 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-[#f5c842]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
 
              {/* Quote */}
              <p className="text-sm text-[#a0a0b8] leading-relaxed flex-1">"{quote}"</p>
 
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0"
                  style={{ background: color }}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f0ede8]">{name}</p>
                  <p className="text-xs text-[#7a7a90]">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
