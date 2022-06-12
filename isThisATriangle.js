// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
    let trues = 0
    // triangle inequality theorem
    //sum of any two sides should be greater than the third
    if ( a + b > c) {
      trues++
    }
    if ( a + c > b) {
      trues++
    }
    if ( c + b > a) {
      trues++
    }
  
    if ( trues === 3) {
      return true
    }else {
      return false
    }
  }