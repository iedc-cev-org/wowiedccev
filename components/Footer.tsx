import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 py-12 relative z-10">
      <div className="max-w-6xl mx-auto clay-card !rounded-[40px] bg-white/40 backdrop-blur-md p-10 md:p-16 border border-white/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="text-3xl transition-transform duration-300 group-hover:rotate-12" role="img" aria-label="sparkles">✨</span>
              <span className="font-heading font-bold text-3xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-plum to-crimson">
                WOW
              </span>
            </Link>
            <p className="text-plum/80 font-sans max-w-sm leading-relaxed">
              The specialized women's wing of the Innovation and Entrepreneurship Development Cell at CEV. Empowering women through community, mentorship, and magic.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading text-plum font-semibold">Quick Links</h4>
            <ul className="space-y-3 font-sans text-plum/70 font-medium">
              <li><Link href="#about" className="hover:text-crimson transition-colors flex items-center gap-2"><span className="text-xs">🌸</span> Our Mission</Link></li>
              <li><Link href="#events" className="hover:text-crimson transition-colors flex items-center gap-2"><span className="text-xs">🌸</span> Upcoming Events</Link></li>
              <li><Link href="#gallery" className="hover:text-crimson transition-colors flex items-center gap-2"><span className="text-xs">🌸</span> Gallery</Link></li>
              <li><Link href="#team" className="hover:text-crimson transition-colors flex items-center gap-2"><span className="text-xs">🌸</span> Meet the Team</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading text-plum font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-sm font-bold text-plum hover:bg-lilac hover:text-white transition-all shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7)] hover:shadow-[0_5px_15px_rgba(183,156,237,0.4)] hover:-translate-y-1">
                IG
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-sm font-bold text-plum hover:bg-lilac hover:text-white transition-all shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7)] hover:shadow-[0_5px_15px_rgba(183,156,237,0.4)] hover:-translate-y-1">
                IN
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center text-sm font-bold text-plum hover:bg-lilac hover:text-white transition-all shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7)] hover:shadow-[0_5px_15px_rgba(183,156,237,0.4)] hover:-translate-y-1">
                X
              </a>
            </div>
            <p className="text-plum/70 font-sans mt-4">hello@wowcev.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-plum/10 flex justify-center text-plum/60 font-sans text-sm font-medium">
          <p>© {new Date().getFullYear()} WOW IEDC CEV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
