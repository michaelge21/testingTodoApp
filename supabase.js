import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gmcnwlnpkqwfeczxsblt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtY253bG5wa3F3ZmVjenhzYmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1NjE5ODIsImV4cCI6MTk4OTEzNzk4Mn0.3vcknKjms_DMELZzIut1zyHoYztKu2rPam-lUeq5lXA";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getData() {
  let { data: todo_items, error } = await supabase.from("todo_items")
  .select();

  return {data:todo_items}
}

async function addItem() {
    const { error } = await supabase
    .from('todo_items')
    .insert({ id: 1, content: 'Denmark' })
}

let button = document.querySelector("button");

button.addEventListener('click', addItem);