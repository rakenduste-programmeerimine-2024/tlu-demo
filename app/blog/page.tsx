'use client';

import { useEffect, useState, CSSProperties } from 'react';
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
    <div style={containerStyle}>
      <h1 style={titleStyle}>Blogi postitused</h1>
      <ul style={postListStyle}>
        {posts.map((post) => (
          <li key={post.id} style={postItemStyle}>
            <Link href={`/blog/${post.id}`}>
              <div style={postLinkStyle}>
                <h2 style={postTitleStyle}>{post.title}</h2>
                <p style={postExcerptStyle}>{post.content.substring(0, 100)}...</p>
                <small style={postDateStyle}>Postitatud {new Date(post.created_at).toLocaleDateString()}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle: CSSProperties = {
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto'
};

const titleStyle: CSSProperties = {
  fontSize: '2rem',
  marginBottom: '20px',
  textAlign: 'center'
};

const postListStyle: CSSProperties = {
  listStyle: 'none',
  padding: 0
};

const postItemStyle: CSSProperties = {
  marginBottom: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.2s ease-in-out'
};

const postLinkStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  padding: '15px'
};

const postTitleStyle: CSSProperties = {
  fontSize: '1.5rem',
  margin: '0 0 10px'
};

const postExcerptStyle: CSSProperties = {
  margin: '0 0 10px',
  color: '#555'
};

const postDateStyle: CSSProperties = {
  fontSize: '0.875rem',
  color: '#888'
};
