import {
  Search, Target, Share2, Mail, BarChart3, PenTool, Megaphone, TrendingUp
} from 'lucide-react';
 
const services = [
  {
    icon: Search,
    title: 'SEO Strategy',
    desc: 'Rank on Page 1 with technical SEO, on-page optimization, and authoritative link building that drives organic traffic at scale.',
    tags: ['Technical SEO', 'Link Building', 'Keyword Research'],
    accent: '#f5c842',
  },
  {
    icon: Target,
    title: 'PPC & Google Ads',
    desc: 'Precision-targeted paid campaigns with optimized bidding, compelling ad copy, and conversion tracking for maximum ROAS.',
    tags: ['Google Ads', 'Search Ads', 'Display Ads'],
    accent: '#ff6b35',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Build a magnetic brand presence across Instagram, Facebook, LinkedIn & TikTok with content that converts followers to buyers.',
    tags: ['Meta Ads', 'TikTok', 'LinkedIn'],
    accent: '#e040fb',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Automated email sequences, segmentation, and A/B testing that nurture leads into loyal customers with high open rates.',
    tags: ['Automation', 'Segmentation', 'A/B Testing'],
    accent: '#4fc3f7',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Data',
    desc: 'Deep-dive reporting with GA4, custom dashboards, and actionable insights so every decision is backed by real data.',
    tags: ['GA4', 'Data Studio', 'Conversion Tracking'],
    accent: '#69f0ae',
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    desc: 'Compelling content that ranks, resonates, and converts — from blog posts to video scripts to landing page copy.',
    tags: ['Copywriting', 'Content Calendar', 'Blog SEO'],
    accent: '#f5c842',
  },
  {
    icon: Megaphone,
    title: 'Influencer Marketing',
    desc: 'Identify and partner with the right micro and macro influencers to amplify your brand authentically.',
    tags: ['Outreach', 'Campaign Mgmt', 'ROI Tracking'],
    accent: '#ff6b35',
  },
  {
    icon: TrendingUp,
    title: 'Funnel Optimization',
    desc: 'End-to-end funnel audits, landing page CRO, and persuasive copy that moves prospects from awareness to purchase.',
    tags: ['CRO', 'Landing Pages', 'A/B Testing'],
    accent: '#e040fb',
  },
];
 
export default function ServicesSection() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[rgba(245,200,66,0.03)] blur-[150px]" />
      </div>
 
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
              <span className="text-xs font-medium text-[#f5c842] uppercase tracking-widest">What I Do</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Services That{' '}
              <span className="gradient-text">Drive Growth</span>
            </h2>
          </div>
          <p className="text-[#7a7a90] max-w-xs text-sm leading-relaxed">
            A full suite of digital marketing services — from visibility to conversion to retention.
          </p>
        </div>
 
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc, tags, accent }, i) => (
            <div
              key={title}
              className="glass card-hover rounded-2xl p-6 flex flex-col gap-4 border border-[rgba(255,255,255,0.05)] cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${accent}18` }}
              >
                <Icon size={20} style={{ color: accent }} />
              </div>
 
              {/* Text */}
              <div>
                <h3
                  className="font-semibold text-[#f0ede8] mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {title}
                </h3>
                <p className="text-xs text-[#7a7a90] leading-relaxed">{desc}</p>
              </div>
 
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: `${accent}12`,
                      color: accent,
                      border: `1px solid ${accent}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
