// app/blog/[id]/page.tsx

import { createClient } from "@/utils/supabase/client" // Your Supabase client setup

type Post = {
  id: number
  title: string
  content: string
  users_id: string
  created_at: string // You could also use Date if you plan to work with Date objects
}

const fetchPost = async (id: number): Promise<Post | null> => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single()
  if (error || !data) {
    return null
  }
  return data
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await fetchPost(Number(params.id))

  return {
    title: post?.title || "Post Not Found",
    description: post?.content || "No content available",
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await fetchPost(Number(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div>
      <h1 className="mb-20 text-center text-xl">{post.title}</h1>
      <p className="p-20 border border-solid border-red">{post.content}</p>
      <p className="mt-20">Autor: {post.users_id}</p>
      <br />
      <small>Loodud: {new Date(post.created_at).toLocaleString()}</small>
    </div>
  )
}

// import { GetServerSideProps } from "next"
// import { createClient } from "@/utils/supabase/client"

// type Post = {
//   id: number
//   title: string
//   content: string
//   users_id: string
//   created_at: string
// }

// type BlogPostProps = {
//   post: Post
// }

// export const getServerSideProps: GetServerSideProps<{ post: Post }> = async ({
//   params,
// }) => {
//   console.log("Params in getServerSideProps:", params)

//   if (!params?.id) {
//     return { notFound: true }
//   }

//   const supabase = createClient()

//   const { data, error } = await supabase
//     .from("posts")
//     .select("*")
//     .eq("id", Number(params.id))
//     .single()

//   console.log("Supabase response:", { data, error })

//   if (error || !data) {
//     return { notFound: true }
//   }

//   return {
//     props: {
//       post: data,
//     },
//   }
// }

// export default function BlogPost({ post }: BlogPostProps) {
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//       <small>Autor {post.users_id}</small>
//       <br />
//       <small>Loodud: {new Date(post.created_at).toLocaleString()}</small>
//     </div>
//   )
// }
