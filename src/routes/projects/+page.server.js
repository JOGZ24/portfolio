import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("projets").select();
  return {
    projets: data ?? [],
  };
}


