import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://zrjsquicplrjqmjevchy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyanNxdWljcGxyanFtamV2Y2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNTk3NjAsImV4cCI6MjAyNTczNTc2MH0.8Xra3g2zLWnmKG4HBmN6MmBBSQ-hwYkio5mfwc8WUt8");
export {
  supabase as s
};
