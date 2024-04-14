import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data } = await supabase.from("competences").select();
  return {
    competences: data ?? []
  };
}
export {
  load
};
