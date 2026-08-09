import Events from "@/components/Events";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-alabaster to-[#fdf9f4] overflow-hidden pt-24">
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-crimson/15 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float-delayed pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-mauve/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-float pointer-events-none"></div>
      
      <Events />
    </main>
  );
}
