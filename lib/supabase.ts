import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://vduttyieamnlaekdkxar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdXR0eWllYW1ubGFla2RreGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODU5OTQsImV4cCI6MjA4NzQ2MTk5NH0.h0gQE9pcjYF0bOersUHhOhQNJHYyHTzDSTJPqjdZry4');
