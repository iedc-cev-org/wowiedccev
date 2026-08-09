-- Run these commands in your Supabase SQL Editor to migrate from emojis to image URLs

-- 1. Update WOW Team Table
ALTER TABLE public.wow_team 
DROP COLUMN IF EXISTS emoji;

ALTER TABLE public.wow_team 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- 2. Update WOW Gallery Table
ALTER TABLE public.wow_gallery 
DROP COLUMN IF EXISTS emoji;

ALTER TABLE public.wow_gallery 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- 3. (Optional) Clear the old emoji mock data since they won't have image_urls
DELETE FROM public.wow_team;
DELETE FROM public.wow_gallery;

-- 4. Fix RLS to allow the admin dashboard to insert/update/delete
ALTER TABLE public.wow_team DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.wow_gallery DISABLE ROW LEVEL SECURITY;
