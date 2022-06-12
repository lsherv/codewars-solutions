//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let xCounter = 0
    let oCounter = 0
    
    let splitString = str.split('')
    splitString.forEach( char => {
      if (char === 'x' || char === 'X') {
        xCounter ++
      }else if (char === 'o' || char === 'O') {
        oCounter ++
      }
    })
    
    return ( xCounter === oCounter ? true : false )
  }