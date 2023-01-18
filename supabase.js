
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gmcnwlnpkqwfeczxsblt.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function populateTodos() {
    let { data: todo_items, error} = await supabase.from('todo_items')
    .select('*');

    console.log(todo_items);
    console.log(error)
}

populateTodos();