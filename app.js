let all6Words = []
for (let word of dictionary) {
    if (word.length == 6) {
        all6Words.push(word)
    }
}

let rootWord = all6Words[Math.floor(Math.random() * (all6Words.length+1))]
let chars = rootWord.split("")
let subWords = []

function builtOf (word, characters) {
    let tempWord = word
    while (characters.includes(tempWord.charAt(0))) {
        characters.splice(characters.indexOf(tempWord.charAt(0)),1)
        tempWord = tempWord.substring(1)
    }
    if (tempWord.length == 0) {
        subWords.push(word)
    }
}
builtOf('tapas', ['t','a','p','s','a','j','o'])
console.log(subWords)