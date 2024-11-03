
create table
users (
id bigint primary key generated always as identity,
name text,
email text,
password text,
created_at timestamptz default now()
);
