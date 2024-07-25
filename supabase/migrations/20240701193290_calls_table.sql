create table calls (
  -- Id of agents.
  id uuid default uuid_generate_v4(),
  user_id uuid references auth.users not null,
  -- Set of key-value pairs, used to store additional information about the object in a structured format.
  metadata jsonb,
  -- Conversation of call.
  conversation text,
  -- If the agent is active.
  active boolean not null default false,
  created timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table calls enable row level security;
create policy "Can only view own calls data." on calls for select using (auth.uid() = user_id);

/* 

curl 'https://ejarblpefysvnswwrwyq.supabase.co/rest/v1/calls' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYXJibHBlZnlzdm5zd3dyd3lxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQxODI5OSwiZXhwIjoyMDM0OTk0Mjk5fQ.kjMfEpQhq3mfmjypRZkkZsW3HULIVWuSA_od6ys0lX0" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYXJibHBlZnlzdm5zd3dyd3lxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQxODI5OSwiZXhwIjoyMDM0OTk0Mjk5fQ.kjMfEpQhq3mfmjypRZkkZsW3HULIVWuSA_od6ys0lX0"
*/