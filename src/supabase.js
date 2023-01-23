import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aaxznvhvokoxskmokznc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheHpudmh2b2tveHNrbW9rem5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MzMxODksImV4cCI6MTk4OTEwOTE4OX0.rAmc7D9C-ux3faThGnR68QTJmUGkSkYwM7Jgk3rwnPw";
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheHpudmh2b2tveHNrbW9rem5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MzMxODksImV4cCI6MTk4OTEwOTE4OX0.rAmc7D9C-ux3faThGnR68QTJmUGkSkYwM7Jgk3rwnPw",

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
