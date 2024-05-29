
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jzaswrsfklyolcyuwxxq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6YXN3cnNma2x5b2xjeXV3eHhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTEyMDEsImV4cCI6MjAzMjQ4NzIwMX0.GmQ3ML7KXr2-Hkzztv1cMp1Fy9QunD8JoUAZH4rb2ww'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;