const submit = document.getElementById("submitButton")
let cloudWindow = document.getElementById("cloud")

submit.addEventListener("click", () => createWordCloud());

// Adds each word in the paragraph entered to an array, filters punctuation
function createWordArray() {
    cloudWindow.textContent = "";
    let paragraph = document.getElementById("paragraphInput");
    let cleanParagraph = paragraph.value.replace(/[.,\/!$%\^&\*;:{}=\-_`~()]/g,"");
    let words = cleanParagraph.split(' ');
    return words;
}

// Adds words to cloud window adjusting for count 
function appendToDOM(arrayOfWords) {
    arrayOfWords.forEach((word) => {
        let wordDiv = document.createElement("span");
        wordDiv.style.fontSize = `${word.count*10.5}px`;
        wordDiv.textContent = word.name;
        wordDiv.style.display = 'block'
        wordDiv.style.position = 'absolute'
        wordDiv.style.padding = '.2em'
        wordDiv.style.lineHeight = '0'
        wordDiv.style.top = `${Math.floor(Math.random() * 100)}%`;
        wordDiv.style.left = `${Math.floor(Math.random() * 100)}%`;
        cloudWindow.appendChild(wordDiv)
    })
}

// Returns an array containing word objects, indicating the name of the word and the number of occurances
function createWordCloud() {
    let words = createWordArray();
    let checkedWords = []
    
    // Checks number of occurances
    function countWord(word) {
        count = 0
        words.forEach((i => {
            if (i === word) {
                count+= 1;
            }
        }))
        return count;
    }

    // Appends to new array while checking for duplicates
    words.forEach((word) => {
        let newWord = new WordCount(word,countWord(word))
        const index = checkedWords.findIndex(i => i.name === newWord.name)
        if (index === -1) {
            checkedWords.push(newWord)
        }
    })
    
    appendToDOM(checkedWords);
}

class WordCount {
    constructor(word,count) {
        this.name = word;
        this.count = count;
    }
}