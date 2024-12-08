'use client'; // This directive must be at the top of the file

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'; // Import the dynamic client creator
import Link from 'next/link';

export default function BlogIndex() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const supabase = createClient(); // Instantiate the client dynamically
      const { data, error } = await supabase
        .from('posts')
        .select('*');

      if (error) {
        console.error(error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
