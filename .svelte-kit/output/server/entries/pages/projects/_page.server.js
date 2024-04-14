import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data } = await supabase.from("projets").select();
  return {
    projets: data ?? []
  };
}
export {
  load
};
