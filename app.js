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

//function to convert subset words to blanks
let allBlanks = []
for (let item of subWords) {
    let chars = item.split("")
    let blanks = []
    for (let i = 0; i < chars.length; i++) {
        blanks.push('_')
    }
    allBlanks.push(blanks.join(' '))
}

//print intial message to user
let shuffled = shuffle(rootWord)

//user interaction
let numGuessed = 0
while (numGuessed < subWords.length) {
    console.clear();
    console.log('Available letters: '+shuffled)
    console.log(allBlanks.join('\n'))
    let input = prompt('Enter a guess:');
    if (input == '*') {
        console.log('Available letters: '+shuffle(rootWord)) //bug
        console.log(allBlanks.join('\n'))
    }
    else {
        if (subWords.includes(input.toLowerCase())) {
            let index = subWords.indexOf(input.toLowerCase())
            allBlanks[index] = subWords[index]
            console.log('Available letters: '+shuffled)
            console.log(allBlanks.join('\n'))
        }
        else {
            alert(input.toLowerCase()+' is not a word!')
        }
    }
}

//congratulate user if they won, give answers if they lost
// if (numGuessed < subWords.length) {
//     console.log('you answered '+numGuessed+' out of '+subWords.length)
//     console.log(subWords.join('\n'))
// }