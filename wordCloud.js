const submit = document.getElementById("submitButton")

submit.addEventListener("click", () => createWordArray());

function createWordArray() {
    let paragraph = document.getElementById("paragraphInput")
    let words = paragraph.value.split(' ');
    console.log(words)
}