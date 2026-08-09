import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 pt-32 relative z-10 w-full overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-10 z-0">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-plum to-transparent mx-24"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-plum to-transparent mx-24 hidden md:block"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-12 relative z-10">

        {/* Main Typography */}
        <div className="space-y-4 md:space-y-6 relative max-w-5xl">
          {/* <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-plum/10 bg-white/40 backdrop-blur-md text-plum/80 text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse"></span>
            IEDC CEV Women's Wing
          </div> */}

          <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[1.1] md:leading-[1.1] font-sans font-medium text-plum tracking-tight">
            Empowering the <br className="hidden md:block" />
            <span className="font-heading italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-plum via-crimson to-lilac pr-4">Women</span> of Wonders
          </h1>

          <p className="text-lg md:text-2xl text-plum/70 max-w-2xl mx-auto font-sans leading-relaxed mt-8 font-light">
            A dynamic community fostering innovation, entrepreneurship, and leadership among women at College of Engineering Vadakara.
          </p>
        </div>

        {/* Premium Interactive Element / Glassmorphism Dashboard */}
        <div className="w-full max-w-4xl mt-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-lilac/30 via-transparent to-crimson/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60"></div>

          <div className="relative w-full rounded-[40px] border border-white/60 bg-white/30 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(43,35,44,0.1)] flex flex-col md:flex-row items-center justify-between gap-8 transform transition-transform duration-700 hover:-translate-y-2 hover:scale-[1.01]">

            <div className="flex flex-col text-left gap-4 max-w-md">
              <h2 className="text-3xl md:text-4xl font-heading text-plum font-bold">Step into the Magic</h2>
              <p className="text-plum/80 font-sans leading-relaxed">Join a network of visionary women building the future. Experience exclusive workshops, mentorship, and opportunities.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="#events" className="px-8 py-4 rounded-full text-white bg-plum hover:bg-plum/90 font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(43,35,44,0.3)] hover:shadow-[0_15px_40px_rgba(43,35,44,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                Discover Events
              </Link>
              <Link href="#team" className="px-8 py-4 rounded-full text-plum bg-white/60 hover:bg-white backdrop-blur-md border border-white/60 font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center">
                Meet the Team
              </Link>
            </div>

          </div>

          {/* Abstract Floating Elements */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-white to-white/40 rounded-full border border-white backdrop-blur-md shadow-xl flex items-center justify-center text-4xl animate-float-delayed z-20">
            ✨
          </div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-lilac/80 to-white/60 rounded-3xl rotate-12 border border-white backdrop-blur-md shadow-lg flex items-center justify-center text-3xl animate-float z-20">
            🌸
          </div>
        </div>

      </div>
    </section>
  );
}
