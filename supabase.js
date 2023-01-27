import { createClient } from "@supabase/supabase-js";

class TodoItem {
  id;
  status;
  content;

  constructor(id, status, content) {
    this.id = id;
    this.status = status;
    this.content = content;
  }
}

let arrayOfTodos = [];

const supabaseUrl = "https://gmcnwlnpkqwfeczxsblt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtY253bG5wa3F3ZmVjenhzYmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1NjE5ODIsImV4cCI6MTk4OTEzNzk4Mn0.3vcknKjms_DMELZzIut1zyHoYztKu2rPam-lUeq5lXA";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getData() {
  let { data: todo_items, error } = await supabase.from("todo_items").select();

  console.log(todo_items);

  return todo_items;
}

async function addItem(todoObject) {
  const { error } = await supabase.from("todo_items").insert({
    id: todoObject.id,
    status: todoObject.status,
    content: todoObject.content,
  });
}

function generateRandomID() {
  return Math.floor(Math.random() * 10000 - Math.random() * 10);
}

const addButton = document.querySelector(".addItem");
const inputField = document.querySelector("input");
const activateButton = document.querySelector(".loadAPI");

addButton.addEventListener("click", () => {
  const randomID = generateRandomID();
  const completionStatus = "incomplete";
  const content = inputField.value;

  const todo = new TodoItem(randomID, completionStatus, content);

  addItem(todo);
  inputField.value = "";
});

activateButton.addEventListener("click", () => {
  getData(inputField.value).then((response) => console.log(response.length));
});
