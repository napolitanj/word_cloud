const submit = document.getElementById("submitButton")

submit.addEventListener("click", () => createWordCloud());

// Adds each word in the paragraph entered to an array, filters punctuation
function createWordArray() {
    let paragraph = document.getElementById("paragraphInput");
    let cleanParagraph = paragraph.value.replace(/[.,\/!$%\^&\*;:{}=\-_`~()]/g,"");
    let words = cleanParagraph.split(' ');
    return words;
}

// Returns an array containing word objects, 
// indicating the name of the word and the number of occurances
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

    console.log(checkedWords)
    return checkedWords;
}

class WordCount {
    constructor(word,count) {
        this.name = word;
        this.count = count;
    }
}