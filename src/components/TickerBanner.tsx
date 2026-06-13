const items = [
  '⚡ SEO Optimization','🎯 Google Ads','📱 Social Media','📧 Email Marketing',
  '🔥 Meta Ads','📊 Analytics','✍️ Content Strategy','🚀 Growth Hacking',
  '🎨 Brand Strategy','💡 CRO & UX','📈 Performance Marketing','🤖 Automation',
];
const doubled = [...items, ...items];

export default function TickerBanner() {
  return (
    <div className="ticker-wrap" style={{ padding:'14px 0' }}>
      <div className="ticker">
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize:13, fontWeight:500, color:'var(--text-muted)', flexShrink:0, display:'flex', alignItems:'center', gap:10 }}>
            {item}
            <span style={{ color:'var(--gold)', opacity:0.4 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
