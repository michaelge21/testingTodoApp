function postTodo() {
    console.log('ayyyy wassup');
}

const submitButton = document.getElementById("submit");
const inputField = document.getElementById("input");

console.log(inputField);


submitButton.addEventListener("click", () => {
    console.log(`ayyyy wassup (from the event listener). ${inputField.value}`);
})