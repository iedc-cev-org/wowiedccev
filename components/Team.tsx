import { supabase } from "@/lib/supabase";

export default async function Team() {
  let members: any[] = [];

  try {
    const { data, error } = await supabase
      .from('wow_team')
      .select('*')
      .order('priority', { ascending: true });

    if (data && data.length > 0) {
      members = data;
    }
  } catch (error) {
    console.error("Failed to fetch team from Supabase", error);
  }

  if (members.length === 0) {
    members = [
      { name: "Sarah Jane", role: "Chairperson", image_url: "", description: "Visionary guiding the community." },
      { name: "Emily Chen", role: "Secretary", image_url: "", description: "Operations and strategy expert." },
      { name: "Aisha Khan", role: "Events Head", image_url: "", description: "Mastermind behind our hackathons." },
      { name: "Maya Patel", role: "Design Lead", image_url: "", description: "Bringing the aesthetic to life." }
    ];
  }

  return (
    <section id="team" className="py-24 md:py-32 px-8 relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-plum/10 bg-white/40 backdrop-blur-md text-plum/80 text-sm font-semibold tracking-widest uppercase shadow-sm">
              Leadership
            </div>
            <h2 className="text-5xl md:text-6xl font-sans font-medium text-plum tracking-tight leading-[1.1]">
              Meet the <br className="hidden md:block" />
              <span className="font-heading italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson to-lilac">Leaders</span>
            </h2>
          </div>
          <p className="text-lg text-plum/70 font-sans max-w-md font-light leading-relaxed border-l-2 border-lilac/50 pl-6 md:pb-2">
            The passionate minds and visionary women steering the WOW initiative at IEDC CEV.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16 mt-8">
          {members.map((member, i) => (
            <div key={i} className={`w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] ${i % 2 !== 0 ? 'lg:mt-8' : ''}`}>
              <div className="relative h-full group transform transition-all duration-500 hover:-translate-y-3">
                
                {/* Back Wire of Paperclip (Blurred by glass) */}
                <div className={`absolute -top-7 ${i % 2 === 0 ? 'left-8 rotate-[12deg]' : 'right-8 -rotate-[15deg]'} z-0 w-10 h-20 opacity-80`}>
                  <svg viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id={`metal-back-${i}`} x1="0" y1="0" x2="28" y2="60" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#9ca3af" />
                        <stop offset="50%" stopColor="#d1d5db" />
                        <stop offset="100%" stopColor="#6b7280" />
                      </linearGradient>
                    </defs>
                    <path d="M 16 28 V 52 A 4 4 0 0 1 8 52 V 48" stroke={`url(#metal-back-${i})`} strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Glass Card Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-white/20 rounded-[36px] border border-white/60 backdrop-blur-xl shadow-[0_15px_40px_-15px_rgba(43,35,44,0.1)] transition-shadow duration-500 group-hover:shadow-[0_25px_50px_-15px_rgba(43,35,44,0.15)] z-10"></div>

                <div className="relative z-20 p-4 flex flex-col items-center text-center h-full">
                  {/* Inner Image Container */}
                  <div className="w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-gradient-to-br from-lilac/20 to-crimson/10 relative shadow-inner mb-6">
                    {member.image_url ? (
                      <img src={member.image_url} alt={member.name} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl opacity-30">✨</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="px-2 pb-4 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-heading text-plum font-bold mb-1">{member.name}</h3>
                    <p className="text-crimson font-sans font-bold mt-1 uppercase tracking-widest text-[10px] mb-3">{member.role}</p>
                    {(member.description || member.desc) && (
                      <p className="text-plum/70 font-sans text-[13px] font-light leading-relaxed line-clamp-3">{member.description || member.desc}</p>
                    )}
                  </div>
                </div>

                {/* Front Wire of Paperclip (On top of glass and photo) */}
                <div className={`absolute -top-7 ${i % 2 === 0 ? 'left-8 rotate-[12deg]' : 'right-8 -rotate-[15deg]'} z-30 w-10 h-20 pointer-events-none`}>
                  <svg viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[2px_3px_2px_rgba(43,35,44,0.3)]">
                    <defs>
                      <linearGradient id={`metal-front-${i}`} x1="0" y1="0" x2="28" y2="60" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#9ca3af" />
                        <stop offset="30%" stopColor="#ffffff" />
                        <stop offset="70%" stopColor="#d1d5db" />
                        <stop offset="100%" stopColor="#6b7280" />
                      </linearGradient>
                    </defs>
                    <path d="M 8 50 V 14 A 8 8 0 0 1 24 14 V 46" stroke={`url(#metal-front-${i})`} strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
