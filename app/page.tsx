import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-alabaster to-[#fdf9f4] overflow-hidden">
      {/* Ethereal Premium Background Gradient Mesh (Fixed behind content) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-lilac/30 mix-blend-multiply filter blur-[120px] animate-float opacity-80"></div>
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[45%] rounded-full bg-crimson/10 mix-blend-multiply filter blur-[130px] animate-float-delayed opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-mauve/20 mix-blend-multiply filter blur-[140px] animate-float opacity-90"></div>
      </div>

      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Connect />
    </main>
  );
}
