let all6Words = []
for (let word of dictionary) {
    if (word.length == 6) {
        all6Words.push(word)
    }
}

let rootWord = all6Words[Math.floor(Math.random() * (all6Words.length+1))]
console.log(rootWord)