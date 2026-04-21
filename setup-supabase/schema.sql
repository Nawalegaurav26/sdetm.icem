-- SDETM ICEM 2026 - Supabase SQL Schema
-- Paste this into your Supabase SQL Editor to set up the tables.

-- 1. Create a table for User Profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  institution TEXT,
  role TEXT CHECK (role IN ('student', 'faculty', 'industry')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create a table for Paper Submissions
CREATE TABLE IF NOT EXISTS public.papers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT REFERENCES public.profiles(email),
  title TEXT NOT NULL,
  abstract TEXT,
  file_url TEXT,
  status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted', 'on_review', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create a table for Registration/Payment details
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT REFERENCES public.profiles(email),
  amount_paid NUMERIC,
  transaction_id TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'verified', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS) - This makes the data PRIVATE
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Note: In a real production app, you would add policies to allow users 
-- to only read/write their own data. For the initial phase, you can 
-- access all data via the Supabase Dashboard.
