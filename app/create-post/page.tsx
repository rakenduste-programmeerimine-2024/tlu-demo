"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for router in the app directory
import { createClient } from "@/utils/supabase/client";
import { SubmitButton } from "@/components/submit-button"; // Import SubmitButton component

export default function NewBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const router = useRouter();

  // Fetch the current user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);
      } else {
        setError("You must be logged in to create a post");
      }
    };

    fetchUser();
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in to create a post");
      return;
    }

    const supabase = createClient();
    const { data, error: dbError } = await supabase
      .from("posts")
      .insert([
        {
          title,
          content,
          users_id: user.id,
        },
      ]);

    if (dbError) {
      setError(dbError.message);
    } else {
      router.push("/blog"); // Navigate to blog index on success
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Create New Blog Post
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleCreatePost} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-red-300"
            rows={6}
          />
        </div>
        <SubmitButton pendingText="Creating Post...">Create Post</SubmitButton>
      </form>
    </div>
  );
}
