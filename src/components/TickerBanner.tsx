const items = [
  '⚡ SEO Optimization',
  '🎯 Google Ads',
  '📱 Social Media Marketing',
  '📧 Email Marketing',
  '🔥 Meta Ads',
  '📊 Analytics & Reporting',
  '✍️ Content Strategy',
  '🚀 Growth Hacking',
  '🎨 Brand Strategy',
  '💡 CRO & UX',
  '📈 Performance Marketing',
  '🤖 Marketing Automation',
];
 
export default function TickerBanner() {
  const doubled = [...items, ...items];
  return (
    <div className="py-5 border-y border-[rgba(245,200,66,0.1)] bg-[rgba(245,200,66,0.02)] overflow-hidden">
      <div className="ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium text-[#7a7a90] hover:text-[#f5c842] transition-colors flex-shrink-0 flex items-center gap-3"
          >
            {item}
            <span className="text-[#f5c842] opacity-40 mx-2">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
 
