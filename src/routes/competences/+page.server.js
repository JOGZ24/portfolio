import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("competences").select();
  return {
    competences: data ?? [],
  };
}



