// js/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://gpzfucaiucbranbkpxfg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwemZ1Y2FpdWNicmFuYmtweGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MTI0ODksImV4cCI6MjA3OTM4ODQ4OX0.Dqv8c7xq-a6y084kLH5uQ1-LEzxHXwtJj2lMIEebQY0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
