
export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f5c842] to-[#ff6b35] flex items-center justify-center font-bold text-black text-xs" style={{ fontFamily: 'Syne, sans-serif' }}>
            DM
          </div>
          <span className="text-sm text-[#7a7a90]">
            © 2025 <span className="text-[#f0ede8] font-medium">YourName</span> — Digital Marketing Expert
          </span>
        </div>
        <div className="flex items-center gap-6">
          {['Services', 'Work', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#7a7a90] hover:text-[#f5c842] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-[#7a7a90]">
          Built with{' '}
          <span className="text-[#f5c842]">Next.js 16</span> &{' '}
          <span className="text-[#f5c842]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
 
