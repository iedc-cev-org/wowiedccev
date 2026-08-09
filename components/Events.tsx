import { supabase } from "@/lib/supabase";

function generateSlug(title: string) {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function formatDate(dateStr: string) {
  if (!dateStr) return "Date TBA";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).toUpperCase();
}

export default async function Events() {
  let displayEvents: any[] = [];

  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('start_time', { ascending: false });

    if (data && data.length > 0) {
      // Filter for WOW events
      const wowEvents = data.filter((event: any) => {
        const title = (event.title || '').toLowerCase();
        const tagline = (event.tagline || '').toLowerCase();
        return title.includes('wow') || tagline.includes('wow') || title.includes('www') || tagline.includes('www');
      });

      // Map them to include a status flag
      displayEvents = wowEvents.map(event => {
        let status = 'PAST';
        if (event.publish_status) {
          if (event.publish_status === 'live') status = 'LIVE NOW';
          else if (event.publish_status === 'upcoming') status = 'UPCOMING';
        } else if (event.is_live) {
          status = event.requires_registration === false ? 'UPCOMING' : 'LIVE NOW';
        }
        return { ...event, displayStatus: status };
      });
    }
  } catch (error) {
    console.error("Failed to fetch events from Supabase", error);
  }

  // Fallback to static if no WOW events exist in DB yet
  if (displayEvents.length === 0) {
    displayEvents = [
      { id: '1', title: "Code & Connect", tagline: "A beginner-friendly coding bootcamp designed exclusively for women.", start_time: "2026-10-15T00:00:00Z", displayStatus: 'UPCOMING' },
      { id: '2', title: "Ideathon 2026", tagline: "Bring your innovative ideas and pitch them to top industry mentors.", start_time: "2026-10-28T00:00:00Z", displayStatus: 'UPCOMING' },
      { id: '3', title: "Founders Talk", tagline: "Listen to inspiring stories from successful women founders.", start_time: "2026-11-10T00:00:00Z", displayStatus: 'PAST' }
    ];
  }

  return (
    <section id="events" className="py-24 md:py-32 px-8 relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-plum/10 bg-white/40 backdrop-blur-md text-plum/80 text-sm font-semibold tracking-widest uppercase shadow-sm">
              Discover
            </div>
            <h2 className="text-5xl md:text-6xl font-sans font-medium text-plum tracking-tight leading-[1.1]">
              Community <br className="hidden md:block" />
              <span className="font-heading italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson to-lilac">Events</span>
            </h2>
          </div>
          <p className="text-lg text-plum/70 font-sans max-w-md font-light leading-relaxed border-l-2 border-lilac/50 pl-6 md:pb-2">
            Join us at our gatherings to connect, learn, and grow. Browse our timeline of both upcoming and past WOW events.
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
          {displayEvents.map((event, i) => (
            <div key={event.id || i} className={`w-full sm:w-[340px] group relative ${i % 2 !== 0 ? 'lg:mt-12' : ''}`}>
              {/* Glass Card Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-white/20 rounded-[36px] border border-white/60 backdrop-blur-2xl shadow-[0_15px_40px_-15px_rgba(43,35,44,0.1)] transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-15px_rgba(43,35,44,0.15)]"></div>
              
              <div className="relative p-6 flex flex-col gap-6 h-full">
                <div className="w-full h-52 rounded-[24px] overflow-hidden relative shadow-inner">
                  {event.poster_url ? (
                    <img src={event.poster_url} alt={event.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-lilac/20 to-crimson/10 flex items-center justify-center">
                      <span className="opacity-50 text-4xl">✨</span>
                    </div>
                  )}
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white shadow-md backdrop-blur-md ${
                      event.displayStatus === 'LIVE NOW' ? 'bg-red-500/90 animate-pulse border border-red-400' :
                      event.displayStatus === 'UPCOMING' ? 'bg-blue-600/90 border border-blue-400' :
                      'bg-plum/70 border border-white/20'
                    }`}>
                      {event.displayStatus}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col px-2">
                  <span className="text-[11px] font-bold text-crimson uppercase tracking-widest">{formatDate(event.start_time)}</span>
                  <h3 className="text-2xl md:text-3xl font-heading text-plum font-bold mt-2 leading-tight">{event.title}</h3>
                  <p className="text-plum/70 font-sans mt-3 text-sm line-clamp-3 leading-relaxed font-light">{event.tagline || event.description}</p>
                </div>
                
                <div className="pt-2 px-2 mt-auto">
                  <a
                    href={`https://iedc.cev.ac.in/events/${generateSlug(event.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-plum text-sm font-semibold tracking-wide hover:text-crimson transition-colors group/link"
                  >
                    <span className="border-b border-plum/30 group-hover/link:border-crimson pb-1 transition-colors">
                      {event.displayStatus === 'PAST' ? "View Recap" : "Learn More"}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-plum/20 flex items-center justify-center transform group-hover/link:translate-x-2 transition-all bg-white/50 backdrop-blur-sm shadow-sm group-hover/link:bg-crimson/10 group-hover/link:border-crimson/30">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
