'use client';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Link2, AtSign, Hash } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', budget: '', message: '' });
  };

  const inputClass =
    'w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-sm text-[#f0ede8] placeholder-[#7a7a90] focus:outline-none focus:border-[rgba(245,200,66,0.4)] focus:bg-[rgba(245,200,66,0.02)] transition-all duration-200';

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[rgba(245,200,66,0.04)] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#69f0ae] animate-pulse" />
            <span className="text-xs font-medium text-[#69f0ae] uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Ready to{' '}
            <span className="gradient-text">Scale Your Brand</span>?
          </h2>
          <p className="text-[#7a7a90] max-w-lg mx-auto">
            Let's discuss your goals and build a strategy that delivers real, measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              { icon: Mail, label: 'Email', val: 'hello@yourname.com', color: '#f5c842' },
              { icon: Phone, label: 'Phone', val: '+92 300 0000000', color: '#ff6b35' },
              { icon: MapPin, label: 'Location', val: 'Pakistan — Remote Worldwide', color: '#e040fb' },
            ].map(({ icon: Icon, label, val, color }) => (
              <div key={label} className="glass-gold rounded-2xl p-5 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-[#7a7a90] mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-[#f0ede8]">{val}</p>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="glass-gold rounded-2xl p-5">
              <p className="text-xs text-[#7a7a90] mb-4 uppercase tracking-widest">Follow Me</p>
              <div className="flex gap-3">
                {[
                  { icon: Link2, color: '#f5c842', href: '#', label: 'LinkedIn' },
                  { icon: AtSign, color: '#ff6b35', href: '#', label: 'Instagram' },
                  { icon: Hash, color: '#e040fb', href: '#', label: 'Twitter/X' },
                ].map(({ icon: Icon, color, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: `${color}18`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-8 border border-[rgba(255,255,255,0.05)] flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#7a7a90] mb-1.5 block">Your Name</label>
                <input
                  className={inputClass}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-xs text-[#7a7a90] mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[#7a7a90] mb-1.5 block">Monthly Budget</label>
              <select
                className={`${inputClass} appearance-none`}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="" className="bg-[#0d0d1c]">Select budget range</option>
                <option value="500-1k" className="bg-[#0d0d1c]">$500 – $1,000</option>
                <option value="1k-3k" className="bg-[#0d0d1c]">$1,000 – $3,000</option>
                <option value="3k-10k" className="bg-[#0d0d1c]">$3,000 – $10,000</option>
                <option value="10k+" className="bg-[#0d0d1c]">$10,000+</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-[#7a7a90] mb-1.5 block">Tell Me About Your Project</label>
              <textarea
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="What are your goals? What have you tried? What's not working?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-[#f5c842] to-[#ff6b35] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_8px_30px_rgba(245,200,66,0.25)]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {sent ? (
                <span>✅ Message Sent! I'll be in touch soon.</span>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}