import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-8 relative z-10 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Premium Visual / Glass Collage */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-crimson/20 to-lilac/30 rounded-[40px] blur-[80px] group-hover:blur-[100px] transition-all duration-700 opacity-60"></div>
          
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full">
            {/* Main Glass Panel */}
            <div className="absolute inset-0 rounded-[40px] border border-white/60 bg-white/30 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(43,35,44,0.1)] overflow-hidden flex items-center justify-center transform transition-transform duration-700 hover:-translate-y-2 hover:rotate-1">
               {/* Abstract elegant inner visual */}
               <div className="absolute w-[150%] h-[150%] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white/40 via-lilac/10 to-transparent animate-[spin_20s_linear_infinite] opacity-50"></div>
               <span className="text-9xl relative z-10 drop-shadow-2xl opacity-90 transform group-hover:scale-110 transition-transform duration-700">🦋</span>
            </div>

            {/* Floating Accent Card */}
            <div className="absolute -bottom-8 -right-8 bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-xl animate-float-delayed">
              <p className="text-plum font-heading font-bold text-3xl">#Women In Tech</p>
              {/* <p className="text-plum/60 font-sans text-xs uppercase tracking-widest font-semibold mt-1">bla bla bla</p> */}
            </div>
            
            {/* Decorative Sparkle */}
            <div className="absolute -top-6 -left-6 text-4xl animate-float drop-shadow-md">✨</div>
          </div>
        </div>
        
        {/* Right Side: Editorial Content */}
        <div className="w-full lg:w-1/2 space-y-8 relative">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-plum/10 bg-white/40 backdrop-blur-md text-plum/80 text-sm font-semibold tracking-widest uppercase shadow-sm">
            Our Purpose
          </div>

          <h2 className="text-5xl md:text-6xl font-sans font-medium text-plum tracking-tight leading-[1.1]">
            Redefining the <br />
            <span className="font-heading italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson to-lilac">Future of Tech</span>
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-plum/70 font-sans leading-relaxed font-light border-l-2 border-lilac/50 pl-6">
              At WOW (Women of Wonders), we believe in the boundless potential of women in technology and entrepreneurship. Born from the vibrant ecosystem of IEDC CEV, we are a collective of dreamers, builders, and leaders.
            </p>
            <p className="text-lg text-plum/70 font-sans leading-relaxed font-light">
              Our mission is to cultivate a supportive environment where women can hone their skills, embrace innovation, and confidently step into leadership roles. We provide mentorship, hands-on workshops, and a safe space to turn wild ideas into reality.
            </p>
          </div>

          <div className="pt-6">
             <Link href="#events" className="inline-flex items-center gap-3 text-plum font-semibold tracking-wide hover:text-crimson transition-colors group">
               <span className="border-b border-plum/30 group-hover:border-crimson pb-1 transition-colors">Read our full story</span>
               <span className="w-8 h-8 rounded-full border border-plum/20 flex items-center justify-center transform group-hover:translate-x-2 transition-all bg-white/50 backdrop-blur-sm shadow-sm group-hover:bg-crimson/10 group-hover:border-crimson/30">→</span>
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
