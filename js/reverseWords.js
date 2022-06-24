// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    str = str.split(' ')
    let reversedWords = str.map( (word, i) => word.split('').reverse().join('') )
    return reversedWords.join(' ')
  }