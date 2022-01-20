const wordSearch = (letters, word) => { 
    if (letters === undefined && word === undefined) {
        throw new Error('Error');
    } else if (!letters.length) {
        return letters;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
        let reversedl = l.split('').reverse().join('')
        if (l.includes(word) || reversedl === word) return true
    }

    for (let i = 0; i < letters[0].length; i++) {
        let newL = []
        for (let j = 0; j < letters.length; j++) {
          newL.push(letters[j][i])
        }
        
        if (newL.join('') === word || newL.reverse().join('') === word ) return true
      }

    return false
}

module.exports = wordSearch

