import { createClient } from "@/utils/supabase/server";
import UploadButton from "./UploadButton";

const Dashboard = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My files</h1>
        <UploadButton />
      </div>
    </main>
  );
};

export default Dashboard;
