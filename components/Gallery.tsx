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
      <div className="text-center mb-16 space-y-4 px-8">
        <h2 className="text-5xl font-heading text-plum font-bold tracking-tight">
          Memories in <span className="text-crimson">Motion</span>
        </h2>
        <p className="text-lg text-plum/80 font-sans max-w-2xl mx-auto">
          A glimpse into the vibrant moments we've shared and the magic we've created together.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-10 overflow-hidden group -rotate-3 scale-110 my-8 py-8">
        {/* Row 1 - Moves Left */}
        <div className="flex w-max animate-scroll hover:animation-play-state-paused">
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-8 pr-8">
              {row1Images.map((imgUrl, i) => (
                <div key={i} className="relative clay-card w-72 h-48 bg-white/40 shrink-0 flex items-center justify-center p-3 border-4 border-dashed border-pink-300/70 !rounded-[36px] overflow-visible group/frame">
                  <div className="absolute -top-4 -right-2 text-3xl group-hover/frame:rotate-12 transition-transform drop-shadow-md">🎀</div>
                  <div className="absolute -bottom-3 -left-3 text-2xl group-hover/frame:-rotate-12 transition-transform drop-shadow-md">🌷</div>
                  <div className="w-full h-full bg-white/60 rounded-[20px] flex items-center justify-center border border-white overflow-hidden shadow-inner">
                    {imgUrl ? (
                      <img src={imgUrl} alt="Gallery item" className="w-full h-full object-cover group-hover/frame:scale-110 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-200/50 to-purple-200/50"></div>
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
            <div key={arrayIndex} className="flex gap-8 pr-8">
              {row2Images.map((imgUrl, i) => (
                <div key={i} className="relative clay-card w-72 h-48 bg-white/40 shrink-0 flex items-center justify-center p-3 border-4 border-dashed border-lilac/70 !rounded-[36px] overflow-visible group/frame">
                  <div className="absolute -top-4 -left-2 text-3xl group-hover/frame:-rotate-12 transition-transform drop-shadow-md">✨</div>
                  <div className="absolute -bottom-3 -right-3 text-2xl group-hover/frame:rotate-12 transition-transform drop-shadow-md">🌸</div>
                  <div className="w-full h-full bg-white/60 rounded-[20px] flex items-center justify-center border border-white overflow-hidden shadow-inner">
                    {imgUrl ? (
                      <img src={imgUrl} alt="Gallery item" className="w-full h-full object-cover group-hover/frame:scale-110 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-200/50 to-pink-200/50"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#fdf9f4] to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#fdf9f4] to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
