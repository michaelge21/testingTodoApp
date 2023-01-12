function postTodo() {
    console.log('ayyyy wassup');
}

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    console.log('ayyyy wassup (from the event listener)');
})