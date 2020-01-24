// Calculator start
let gender = "m";
let height = 50;
let weight = 180;
let age =  30;
let activityFactor = 1.3;
let caloriesBurned;

// let calculateCalories = function(){
  if (gender == "m"){
    caloriesBurned = (66.473 + (6.23 * weight) + (12.7 * height) - (6.8 * age)) * activityFactor;
  } else {
    caloriesBurned = (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)) * activityFactor;
  }
// }
let caloriesToEat = caloriesBurned * 0.8;


console.log(caloriesBurned);
console.log(caloriesToEat);
