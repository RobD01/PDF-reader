import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return <Dashboard />;
}

export default Page;
