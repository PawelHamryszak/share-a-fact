import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gezonjpqajdisjvypggd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlem9uanBxYWpkaXNqdnlwZ2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5NTQ0NDksImV4cCI6MTk5MzUzMDQ0OX0.Ejdl1Rl-M02qQTH8gTNKRqrVzxjZFbx_EHGAcEtA2lk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
