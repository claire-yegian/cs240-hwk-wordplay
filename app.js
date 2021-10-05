/* Create a list of all 6 letter words */
let all6Words = []
for (let word of dictionary) {
    if (word.length == 6) {
        all6Words.push(word)
    }
}

/* Generate random root word */
let rootWord = all6Words[Math.floor(Math.random() * (all6Words.length+1))]

/* Set up for finding subset words: find all 3-6 letter words, create empty list 
of subset words */
let subWords = []
let all3to6 = []
for (let word of dictionary) {
    if (word.length >= 3 && word.length <= 6) {
        all3to6.push(word)
    }
}

/* Function to find if any word is a subset of another */
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

/* Loop to find all subset words of the root word */
for (let item of all3to6) {
    if (rootWord.split("").includes(item.charAt(0))) {
        builtOf (item,rootWord)
    }
}

/* Function to shuffle the root word */
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

/* Function to convert subset words to blanks */
let allBlanks = []
for (let item of subWords) {
    let chars = item.split("")
    let blanks = []
    for (let i = 0; i < chars.length; i++) {
        blanks.push('_')
    }
    allBlanks.push(blanks.join(' '))
}


/* User interaction: gets user input, determines if it's a correct answer, and
outputs appropriate messages based on the input. Clears console and maintains 
up-to-date game display */
let shuffled = shuffle(rootWord)
let numGuessed = 0
while (numGuessed < subWords.length) { //while the user hasn't guessed all words
    console.clear()
    console.log('Available letters: '+shuffled)
    console.log(allBlanks.join('\n'))
    let input = prompt('Enter a guess:')
    if (input === null) {break} //if they've hit cancel
    else if (input == '*') { //if they entered '*' to shuffle
        alert('Shuffling root word...')
        shuffled = shuffle(rootWord)
    }
    else {
        if (allBlanks.includes(input.toLowerCase())) { //already found
            alert(input.toLowerCase()+' has already been found')
        }
        else if (input.length > 6 || input.length < 3) { //too short/long
            alert(input.toLowerCase()+' is too short or long. Must be 3 to 6 letters long')
        }
        else if (!dictionary.includes(input.toLowerCase())) { //not a word
            alert(input.toLowerCase()+' is not a valid English word')
        }
        else if (subWords.includes(input.toLowerCase())) { //they got one right
            alert('Correct!')
            numGuessed++
            let index = subWords.indexOf(input.toLowerCase())
            allBlanks[index] = subWords[index]
        }
        else { //a valid word, but not an answer
            alert(input+' is not a word!')
        }
    }
}

/* Congratulate user if they won, give answers if they lost */
if (numGuessed < subWords.length) {
    alert('Better luck next time!')
}
else if (numGuessed == subWords.length) {
    alert('Congrats! You guessed all of the words.')
}
console.clear()
console.log('You answered '+numGuessed+' out of '+subWords.length+'!')
console.log(subWords.join('\n'))