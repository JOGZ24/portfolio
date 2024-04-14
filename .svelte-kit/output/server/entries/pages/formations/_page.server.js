import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data } = await supabase.from("formations").select();
  return {
    competences: data ?? []
  };
}
export {
  load
};
