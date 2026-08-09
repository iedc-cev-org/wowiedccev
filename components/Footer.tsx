export default function Footer() {
  return (
    <footer className="w-full relative z-10 bg-background overflow-hidden border-t border-mauve/20 group h-32 hover:h-64 transition-[height] duration-500 ease-out cursor-default mt-20">
      
      {/* Boring state (Visible before hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0 delay-100">
         <p className="text-plum/50 font-sans text-sm md:text-base font-semibold tracking-wide">
           © {new Date().getFullYear()} WOW IEDC CEV
         </p>
         {/* <p className="text-plum/40 font-sans text-xs mt-2 animate-pulse">
           (Hover me 👀)
         </p> */}
      </div>

      {/* Magical WOW state (Visible on hover) */}
      <div className="absolute inset-0 bg-alabaster/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Magical Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lilac/30 via-background/0 to-transparent"></div>
        
        {/* Floating Themed Icons */}
        <span className="absolute top-6 left-12 text-2xl animate-float opacity-50">✨</span>
        <span className="absolute bottom-4 left-1/3 text-xl animate-float-delayed opacity-60">🌸</span>
        <span className="absolute top-4 right-1/3 text-lg animate-float opacity-60">💡</span>
        <span className="absolute bottom-8 right-12 text-2xl animate-float-delayed opacity-50">✨</span>
        
        <h2 
          className="font-heading relative z-10 text-3xl md:text-5xl font-bold text-plum/90 tracking-wide -rotate-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
        >
          What are you Looking For???? A Footer?!
        </h2>
        
        <p 
          className="font-heading relative z-10 text-xl md:text-3xl text-mauve font-medium mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 max-w-2xl"
        >
          We're too busy empowering women in tech and building magic! <span className="inline-block animate-bounce text-2xl ml-2">🌸</span>
        </p>

      </div>
    </footer>
  );
}
