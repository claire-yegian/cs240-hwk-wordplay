//create a list of all 6 letter words
let all6Words = []
for (let word of dictionary) {
    if (word.length == 6) {
        all6Words.push(word)
    }
}

//generate random root word
let rootWord = all6Words[Math.floor(Math.random() * (all6Words.length+1))]

//set up for finding subset words: find all 3-6 letter words, create empty list 
//of subset words
let subWords = []
let all3to6 = []
for (let word of dictionary) {
    if (word.length >= 3 && word.length <= 6) {
        all3to6.push(word)
    }
}

//function to find if any word is a subset of another
function builtOf (subWord, word) {
    let characters = word.split("")
    let tempWord = subWord
    while (characters.includes(tempWord.charAt(0))) {
        characters.splice(characters.indexOf(tempWord.charAt(0)),1)
        tempWord = tempWord.substring(1)
    }
    if (tempWord.length == 0) {
        subWords.push(subWord)
    }
}

//loop to find all subset words of the root word
for (let item of all3to6) {
    if (rootWord.split("").includes(item.charAt(0))) {
        builtOf (item,rootWord)
    }
}

//function to shuffle the word
function shuffle (toShuffle) {
    array = toShuffle.split("")
    for (let i = 0; i < array.length; i++) {
        let rand1 = Math.floor(Math.random() * (array.length))
        let rand2 = Math.floor(Math.random() * (array.length))
        let temp = array[rand1]
        array[rand1] = array[rand2]
        array[rand2] = temp
    }
    return array.join("")
}
console.log(rootWord)
console.log(shuffle(rootWord))