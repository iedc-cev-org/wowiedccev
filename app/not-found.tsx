import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | WOW IEDC CEV',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-alabaster to-[#fdf9f4] overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Ethereal Premium Background Gradient Mesh (Fixed behind content) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-lilac/30 mix-blend-multiply filter blur-[120px] animate-float opacity-80"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] rounded-full bg-crimson/10 mix-blend-multiply filter blur-[140px] animate-float-delayed opacity-70"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        
        {/* Abstract 404 Art */}
        <div className="relative group w-full flex justify-center items-center mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-lilac/30 via-transparent to-crimson/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60"></div>
          
          <h1 className="text-[120px] md:text-[200px] leading-none font-sans font-medium text-transparent bg-clip-text bg-gradient-to-br from-plum via-plum/70 to-lilac/50 tracking-tighter drop-shadow-sm select-none relative z-10">
            404
          </h1>
          
          {/* Floating Elements */}
          <div className="absolute top-[15%] left-[20%] md:left-[30%] w-16 h-16 bg-gradient-to-br from-white to-white/40 rounded-full border border-white backdrop-blur-md shadow-xl flex items-center justify-center text-2xl animate-float z-20">
            ✨
          </div>
          <div className="absolute bottom-[15%] right-[20%] md:right-[30%] w-20 h-20 bg-gradient-to-tr from-lilac/80 to-white/60 rounded-3xl rotate-12 border border-white backdrop-blur-md shadow-lg flex items-center justify-center text-3xl animate-float-delayed z-20">
            🌸
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 relative max-w-xl z-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-plum">
            Oops! Lost in the Magic
          </h2>
          <p className="text-lg md:text-xl text-plum/70 font-sans leading-relaxed font-light">
            The page you're looking for seems to have vanished into thin air. Let's guide you back to where the wonders happen.
          </p>
        </div>

        <div className="mt-4 z-20">
          <Link href="/" className="px-8 py-4 rounded-full text-white bg-plum hover:bg-plum/90 font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(43,35,44,0.3)] hover:shadow-[0_15px_40px_rgba(43,35,44,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
