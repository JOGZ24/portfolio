import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("formations").select();
  return {
    competences: data ?? [],
  };
}



