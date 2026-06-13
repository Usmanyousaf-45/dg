
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
 
const caseStudies = [
  {
    category: 'E-Commerce · SEO + Ads',
    title: 'Fashion Brand 10x Revenue',
    desc: 'Scaled an e-commerce fashion brand from $20K to $200K/mo through targeted Google Shopping campaigns and organic SEO.',
    result: '+10x Revenue in 8 months',
    metrics: [
      { icon: TrendingUp, val: '847%', label: 'Organic Traffic' },
      { icon: DollarSign, val: '$200K', label: 'Monthly Revenue' },
      { icon: Users, val: '3.4x', label: 'ROAS' },
    ],
    color: '#f5c842',
    bg: 'from-[rgba(245,200,66,0.08)] to-transparent',
  },
  {
    category: 'SaaS · Meta Ads',
    title: '50K Leads for Tech Startup',
    desc: 'Built a full-funnel Meta Ads strategy with advanced retargeting for a B2B SaaS — generating 50,000+ qualified leads in 6 months.',
    result: '50K Leads @ $1.2 CPL',
    metrics: [
      { icon: Users, val: '50K+', label: 'Leads Generated' },
      { icon: DollarSign, val: '$1.2', label: 'Cost Per Lead' },
      { icon: TrendingUp, val: '6.8x', label: 'ROAS' },
    ],
    color: '#ff6b35',
    bg: 'from-[rgba(255,107,53,0.08)] to-transparent',
  },
  {
    category: 'Local Business · Google Ads',
    title: 'Restaurant Chain Growth',
    desc: 'Managed hyper-local Google Ads campaigns for a restaurant chain across 12 locations, driving foot traffic and online orders.',
    result: '+320% Walk-ins YoY',
    metrics: [
      { icon: TrendingUp, val: '320%', label: 'Foot Traffic' },
      { icon: Users, val: '4.5★', label: 'Avg Google Rating' },
      { icon: DollarSign, val: '5.1x', label: 'Ad ROAS' },
    ],
    color: '#e040fb',
    bg: 'from-[rgba(224,64,251,0.08)] to-transparent',
  },
];
 
export default function WorkSection() {
  return (
    <section id="work" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e040fb] animate-pulse" />
              <span className="text-xs font-medium text-[#e040fb] uppercase tracking-widest">Case Studies</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Real{' '}
              <span className="gradient-text">Results</span>
              , Real Brands
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-[rgba(245,200,66,0.2)] text-sm font-medium text-[#f5c842] hover:border-[rgba(245,200,66,0.4)] transition-all"
          >
            View All Projects <ExternalLink size={14} />
          </a>
        </div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(({ category, title, desc, result, metrics, color, bg }, i) => (
            <div
              key={title}
              className={`glass card-hover rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] flex flex-col animate-fade-up`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Top colored bar */}
              <div
                className={`h-1.5 w-full`}
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
 
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Category */}
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color }}>
                  {category}
                </span>
 
                {/* Title */}
                <h3 className="text-xl font-bold text-[#f0ede8]" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {title}
                </h3>
 
                {/* Desc */}
                <p className="text-sm text-[#7a7a90] leading-relaxed flex-1">{desc}</p>
 
                {/* Result badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit"
                  style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                >
                  <TrendingUp size={12} />
                  {result}
                </div>
 
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  {metrics.map(({ icon: Icon, val, label }) => (
                    <div key={label} className="text-center">
                      <p className="font-bold text-[#f0ede8] text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {val}
                      </p>
                      <p className="text-[10px] text-[#7a7a90] mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
