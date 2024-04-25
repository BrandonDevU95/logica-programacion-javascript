const searchWord = (phrase, word) => {
    let count = 0
    phrase = phrase.toLowerCase().replace(/[!,.-:;]/gi, '').trim()
    const arrayPhrase = phrase.split(' ')
    
    arrayPhrase.forEach(element => {
        if(element === word) count++
    });
    return count
}

console.log(searchWord('Esto, es una palabra que, tiene una palabra!', 'palabra'))
console.log(searchWord('Esto, es una palabra que, tiene una palabra!', 'victor'))
