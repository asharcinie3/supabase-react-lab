import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mdvirtqipuyfbmlnjfko.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdmlydHFpcHV5ZmJtbG5qZmtvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTM3ODUyMywiZXhwIjoxOTk0OTU0NTIzfQ.v5cN90MvlDKEUSL2pguG-Ste6166wb90i6vWTpO7kf4";

export const supabase = createClient(supabaseUrl, supabaseKey);