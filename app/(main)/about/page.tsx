import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-alabaster to-[#fdf9f4] overflow-hidden pt-24">
      <div className="fixed -top-10 -left-10 w-96 h-96 bg-lilac/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-float pointer-events-none"></div>
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-crimson/15 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float-delayed pointer-events-none"></div>
      
      <About />
    </main>
  );
}
