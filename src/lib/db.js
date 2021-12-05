import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL="https://alyawgfedmznmzsrwotl.supabase.co",
  import.meta.env.VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODY5NTQ5OSwiZXhwIjoxOTU0MjcxNDk5fQ.tLKU-cC4RlPUPjdU7gJM-8Wdy15u6W984drI-2XdJ28"
)

export default supabase
