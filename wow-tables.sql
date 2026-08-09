-- Run these commands in your Supabase SQL Editor

-- 1. Create WOW Team Table
CREATE TABLE IF NOT EXISTS public.wow_team (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    description TEXT,
    emoji VARCHAR(10) DEFAULT '👩🏽‍💼',
    priority INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create WOW Gallery Table
CREATE TABLE IF NOT EXISTS public.wow_gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    emoji VARCHAR(10) NOT NULL,
    priority INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.wow_team ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wow_gallery ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies (Public Read)
CREATE POLICY "Allow public select on wow_team" ON public.wow_team FOR SELECT USING (true);
CREATE POLICY "Allow public select on wow_gallery" ON public.wow_gallery FOR SELECT USING (true);

-- 5. Insert some initial mock data so the site isn't empty!
INSERT INTO public.wow_team (name, role, description, emoji, priority) VALUES 
('Sarah Jane', 'Chairperson', 'Visionary guiding the community.', '👩🏽‍💼', 1),
('Emily Chen', 'Secretary', 'Operations and strategy expert.', '👩🏻‍💻', 2),
('Aisha Khan', 'Events Head', 'Mastermind behind our hackathons.', '🧕🏽', 3),
('Maya Patel', 'Design Lead', 'Bringing the aesthetic to life.', '👩🏽‍🎨', 4);

INSERT INTO public.wow_gallery (emoji, priority) VALUES 
('📸', 1), ('🎀', 2), ('👩‍💻', 3), ('🚀', 4), ('✨', 5),
('💖', 6), ('🎨', 7), ('🧁', 8), ('🦋', 9), ('🌟', 10);
