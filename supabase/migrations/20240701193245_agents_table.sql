create table agents (
  -- Id of agents.
  id uuid default uuid_generate_v4(),
  user_id uuid references auth.users not null,
  -- Set of key-value pairs, used to store additional information about the object in a structured format.
  metadata jsonb,
  -- Name of the agent.
  name text,
  -- Prompt for the agents.
  prompt text,
  -- First sentence of the agent.
  first_sentence text,
  -- If the agent is active.
  active boolean not null default false,
  created timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table agents enable row level security;
create policy "Can only view own agents data." on agents for select using (auth.uid() = user_id);
