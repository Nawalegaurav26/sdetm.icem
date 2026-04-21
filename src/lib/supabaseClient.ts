import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'public-anon-key-placeholder';

// If credentials are missing, we log a warning but don't crash
// so the site can still be viewed in "mock mode" during development.
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase credentials missing. Site is running in Mock Mode.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
