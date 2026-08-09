import Team from "@/components/Team";

export default function TeamPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-alabaster to-[#fdf9f4] overflow-hidden pt-24">
      <div className="fixed -top-10 -left-10 w-96 h-96 bg-lilac/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-float pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-mauve/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-float pointer-events-none"></div>
      
      <Team />
    </main>
  );
}
