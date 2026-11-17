-- Apply in Supabase SQL editor. No service-role key is used by the browser or API.
create table public.profiles (id uuid primary key references auth.users on delete cascade, display_name text, language text not null default 'en' check(language in ('en','hi','te')), created_at timestamptz not null default now());
create table public.investigations (id uuid primary key default gen_random_uuid(), user_id uuid not null default auth.uid() references auth.users on delete cascade, kind text not null check(kind in ('message','upi','url')), result jsonb not null, created_at timestamptz not null default now(), check(octet_length(result::text) < 100000));
create index investigations_owner_date on public.investigations(user_id,created_at desc);
create table public.scam_journeys(id uuid primary key default gen_random_uuid(),user_id uuid not null default auth.uid() references auth.users on delete cascade,title text not null,created_at timestamptz not null default now());
create table public.journey_events(id uuid primary key default gen_random_uuid(),journey_id uuid not null references public.scam_journeys on delete cascade,amount numeric(14,2) check(amount>=0),recipient text,request_text text,event_timestamp timestamptz not null default now(),agreed boolean not null default false);
create index journey_events_journey on public.journey_events(journey_id,event_timestamp);
create table public.user_feedback(id uuid primary key default gen_random_uuid(),user_id uuid not null default auth.uid() references auth.users on delete cascade,investigation_id uuid references public.investigations on delete set null,category text check(category in ('false_positive','false_negative','other')),comment text check(length(comment)<=2000),created_at timestamptz not null default now());
alter table public.profiles enable row level security;
alter table public.investigations enable row level security;
alter table public.scam_journeys enable row level security;
alter table public.journey_events enable row level security;
alter table public.user_feedback enable row level security;
create policy profiles_owner on public.profiles for all to authenticated using(id=auth.uid()) with check(id=auth.uid());
create policy investigations_owner on public.investigations for all to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy journeys_owner on public.scam_journeys for all to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy events_owner on public.journey_events for all to authenticated using(exists(select 1 from public.scam_journeys j where j.id=journey_id and j.user_id=auth.uid())) with check(exists(select 1 from public.scam_journeys j where j.id=journey_id and j.user_id=auth.uid()));
create policy feedback_owner on public.user_feedback for all to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid() and (investigation_id is null or exists(select 1 from public.investigations i where i.id=investigation_id and i.user_id=auth.uid())));
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('evidence','evidence',false,8388608,array['image/png','image/jpeg','image/webp']) on conflict(id) do nothing;
create policy evidence_owner on storage.objects for all to authenticated using(bucket_id='evidence' and (storage.foldername(name))[1]=auth.uid()::text) with check(bucket_id='evidence' and (storage.foldername(name))[1]=auth.uid()::text);
-- Images are processed locally in v0.1. This private bucket is provisioned for future explicit uploads.
