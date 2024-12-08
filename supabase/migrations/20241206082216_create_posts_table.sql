CREATE TABLE posts (
    id SERIAL PRIMARY KEY, -- Auto-incrementing unique identifier
    title TEXT NOT NULL,   -- Title of the blog post
    content TEXT NOT NULL, -- Content of the blog post
    users_id uuid NOT NULL, -- ID of the user who created the post
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() -- Timestamp for when the post was created
);
