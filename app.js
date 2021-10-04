let all6Words = []
for (let word of dictionary) {
    if (word.length == 6) {
        all6Words.push(word)
    }
}

let rootWord = all6Words[Math.floor(Math.random() * (all6Words.length+1))]
let subWords = []
let all3to6 = []
for (let word of dictionary) {
    if (word.length >= 3 && word.length <= 6) {
        all3to6.push(word)
    }
}

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

console.log(rootWord)
for (let item of all3to6) {
    if (rootWord.split("").includes(item.charAt(0))) {
        builtOf (item,rootWord.split(""))
    }
}
console.log(subWords)