import { supabase } from "@/lib/supabase";

export default async function Gallery() {
  let images: string[] = [];

  try {
    const { data, error } = await supabase
      .from('wow_gallery')
      .select('image_url')
      .order('priority', { ascending: true });

    if (data && data.length > 0) {
      images = data.map((row: any) => row.image_url);
    }
  } catch (error) {
    console.error("Failed to fetch gallery from Supabase", error);
  }

  if (images.length === 0) {
    images = ['', '', '', '', '', '', '', '', '', ''];
  } else if (images.length < 10) {
    // Duplicate existing images until we have enough to fill the marquee seamlessly
    const originalImages = [...images];
    while (images.length < 10) {
      images.push(...originalImages);
    }
  }

  const half = Math.ceil(images.length / 2);
  const row1Images = images.slice(0, half);
  const row2Images = images.slice(half);

  return (
    <section id="gallery" className="py-24 relative z-10 w-full overflow-hidden">
      
      {/* Title */}
      <div className="text-center mb-16 space-y-4 px-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-plum/10 bg-white/40 backdrop-blur-md text-plum/80 text-sm font-semibold tracking-widest uppercase shadow-sm mb-4">
          Gallery
        </div>
        <h2 className="text-4xl md:text-6xl font-sans font-medium text-plum tracking-tight leading-[1.1]">
          Memories in <span className="font-heading italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson to-lilac pr-4 py-2">Motion</span>
        </h2>
        <p className="text-lg md:text-xl text-plum/70 font-sans font-light max-w-2xl mx-auto">
          A glimpse into the vibrant moments we've shared and the magic we've created together.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-12 md:gap-16 overflow-hidden my-12 py-10">
        {/* Row 1 - Moves Left */}
        <div className="flex w-max animate-scroll hover:animation-play-state-paused">
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-10 md:gap-14 pr-10 md:pr-14">
              {row1Images.map((imgUrl, i) => (
                <div key={i} className={`relative w-64 md:w-[340px] shrink-0 bg-[#F8F3EE] p-3 md:p-4 pb-6 md:pb-8 rounded-md shadow-[0_15px_35px_rgba(43,35,44,0.1)] border border-black/5 hover:shadow-[0_25px_50px_rgba(43,35,44,0.15)] transition-all duration-500 group overflow-visible ${i % 2 === 0 ? 'rotate-3 md:rotate-2' : '-rotate-2 md:-rotate-3'} hover:rotate-0 hover:z-20`}>
                  
                  {/* Washi Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm z-10 rotate-[-4deg] opacity-80 mix-blend-overlay"></div>
                  
                  <div className="w-full h-48 md:h-64 rounded-sm overflow-hidden relative bg-black/5 shadow-inner">
                    {imgUrl ? (
                      <img src={imgUrl} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-lilac/20 to-crimson/10"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex w-max animate-scroll-reverse hover:animation-play-state-paused">
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-10 md:gap-14 pr-10 md:pr-14">
              {row2Images.map((imgUrl, i) => (
                <div key={i} className={`relative w-64 md:w-[340px] shrink-0 bg-[#F8F3EE] p-3 md:p-4 pb-6 md:pb-8 rounded-md shadow-[0_15px_35px_rgba(43,35,44,0.1)] border border-black/5 hover:shadow-[0_25px_50px_rgba(43,35,44,0.15)] transition-all duration-500 group overflow-visible ${i % 2 !== 0 ? 'rotate-3 md:rotate-3' : '-rotate-2 md:-rotate-2'} hover:rotate-0 hover:z-20`}>
                  
                  {/* Washi Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm z-10 rotate-[3deg] opacity-80 mix-blend-overlay"></div>

                  <div className="w-full h-48 md:h-64 rounded-sm overflow-hidden relative bg-black/5 shadow-inner">
                    {imgUrl ? (
                      <img src={imgUrl} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-crimson/10 to-lilac/20"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#F8F3EE] to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#F8F3EE] to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
