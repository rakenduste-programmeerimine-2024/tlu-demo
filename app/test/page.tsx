import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from '@/utils/supabase/server';  // Ensure this path is correct

export default async function Index() {
  // Fetch users from the 'users' table
  const { data: users, error } = await createClient.from("users").select("name");

  // Error handling
  if (error) {
    console.error("Error fetching users:", error);
    return <p>Failed to load users</p>;
  }

  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Users</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        
        {/* Display User Names */}
        <ul>
          {users?.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

