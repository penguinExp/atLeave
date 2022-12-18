import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { DB_KEY, DB_URL } from './keys';

export let supabase: SupabaseClient;

export function initSupabase() {
  supabase = createClient(DB_URL, DB_KEY);
}
