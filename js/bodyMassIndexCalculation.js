// 6 kyu kata

// Warriors know only their height (in centimetres) and weight (in kilogrames). Your task is to return an object with fields

//     value - calculated Body mass index, as a string, rounded to the first decimal.

//     category - related category, as a string (from https://en.wikipedia.org/wiki/Body_mass_index ; see below). Note: determine the category before rounding the BMI.

// Ex :

// calculateBmi(65,175)
// returns: {value: "21.2", category: "Normal (healthy weight)"}

// A constant DATA is preloaded for you. It contains the names of all the categories and their boundaries:

//     from (kg) is inclusive.
//     to (kg) is exclusive.

// const DATA = [
// //  from,  to,       category
//     [0,    15,       "Very severely underweight"],
//     [15,   16,       "Severely underweight"],
//     [16,   18.5,     "Underweight"],
//     [18.5, 25,       "Normal (healthy weight)"],
//     [25,   30,       "Overweight"],
//     [30,   35,       "Obese Class I (Moderately obese)"],
//     [35,   40,       "Obese Class II (Severely obese)"],
//     [40,   45,       "Obese Class III (Very severely obese)"],
//     [45,   50,       "Obese Class IV (Morbidly obese)"],
//     [50,   60,       "Obese Class V (Super obese)"],
//     [60,   Infinity, "Obese Class VI (Hyper obese)"],
// ];

// Hurry up, save your clan!

function calculateBmi(weight, height) {
    let heightM = height/100
    let bmi = weight / heightM**2
    let bmiRounded = bmi.toFixed(1)
    
    let bmiCategory = ''
    
    if(bmi < 15){
      bmiCategory = 'Very severely underweight'
    }else if(bmi < 16){
      bmiCategory = 'Severely underweight'
    }else if(bmi < 18.5){
      bmiCategory = 'Underweight'
    }else if(bmi < 25){
      bmiCategory = 'Normal (healthy weight)'
    }else if(bmi < 30){
      bmiCategory = 'Overweight'
    }else if(bmi < 35){
      bmiCategory = 'Obese Class I (Moderately obese)'
    }else if(bmi < 40){
      bmiCategory = 'Obese Class II (Severely obese)'
    }else if(bmi < 45){
      bmiCategory = 'Obese Class III (Very severely obese)'
    }else if(bmi < 50){
      bmiCategory = 'Obese Class IV (Morbidly obese)'
    }else if(bmi < 60){
      bmiCategory = 'Obese Class V (Super obese)'
    }else if(bmi > 60){
      bmiCategory = 'Obese Class VI (Hyper obese)'
    }
    
    let results = {
      value: bmiRounded, category: bmiCategory
    }
    
    return results
  }