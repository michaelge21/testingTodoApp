import { createClient } from "@supabase/supabase-js";

let idStateTracker = 4;

const supabaseUrl = "https://gmcnwlnpkqwfeczxsblt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtY253bG5wa3F3ZmVjenhzYmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1NjE5ODIsImV4cCI6MTk4OTEzNzk4Mn0.3vcknKjms_DMELZzIut1zyHoYztKu2rPam-lUeq5lXA";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getData() {
  let { data: todo_items, error } = await supabase
  .from("todo_items")
  .select();

  console.log(todo_items)

  return todo_items;
}

async function addItem(contentString) {
    const { error } = await supabase
    .from('todo_items')
    .insert({id: 5, status: "incomplete", content: `${contentString}` });
}

const addButton = document.querySelector(".addItem");
const inputField = document.querySelector('input');
const activateButton = document.querySelector(".loadAPI");


addButton.addEventListener('click', () => {
    addItem(inputField.value);
    inputField.value = '';
});

activateButton.addEventListener('click', () => {
    getData()
    .then((response) => console.log(response.length));
});
