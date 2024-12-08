import { GetServerSideProps } from 'next';
import { createClient } from '@/utils/supabase/client';

type Post = {
  id: number;
  title: string;
  content: string;
  users_id: string;
  created_at: string;
};

type BlogPostProps = {
  post: Post;
};

export const getServerSideProps: GetServerSideProps<{ post: Post }> = async ({ params }) => {
  console.log('Params in getServerSideProps:', params);

  if (!params?.id) {
    return { notFound: true };
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', Number(params.id)) // Convert to number if `id` is an INTEGER in DB
    .single();

  console.log('Supabase response:', { data, error });

  if (error || !data) {
    return { notFound: true };
  }

  return {
    props: {
      post: data,
    },
  };
};

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <small>Autor {post.users_id}</small>
      <br />
      <small>Loodud: {new Date(post.created_at).toLocaleString()}</small>
    </div>
  );
}
