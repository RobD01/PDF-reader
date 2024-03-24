import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: smoothies } = await supabase.from("smoothies").select();

  return <pre>{JSON.stringify(smoothies, null, 2)}</pre>;
}
