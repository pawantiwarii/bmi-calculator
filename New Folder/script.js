
// Console log is not the result of the function. 
//Return is the result of the function....

function sumOfTheNum(a, b){
    

    return a + b 

}

const result = sumOfTheNum(sumOfTheNum(5, 6), sumOfTheNum(5, 6));
console.log(result)




// Code execution phase

// const username = 'Pawan Tiwari'
// console.log(username)

// function sayHi(){
//     console.log('Hii')
// }


// let userAge = 21;
// let sq = userAge.Math.pow()
// console.log(sq)


// creating a function to calculate the value of body mass index.
function bmiCalculator(){
    let weight = prompt('Please enter your weight in kg.');
    console.log('Your weight is :'+ weight + ' Kg.');
    let height = prompt('Please enter your height in Cm.');
    let heightInMeter = height /100;
    console.log(`Your height in cm is ${height}cm and your height in m is: ${heightInMeter}m.`)
    let bmiIs = weight / heightInMeter ** heightInMeter; // (height * height)
    return bmiIs
}

let calcuteValueIs= bmiCalculator();
console.log(`Your bmi is : ${Math.floor(calcuteValueIs)}`);



if(calcuteValueIs <=18){
    console.log('Your are underWeight')
    
}else if(calcuteValueIs > 18 && calcuteValueIs <=24.9){
    console.log('Your weight is Normal.')
    
}else if(calcuteValueIs >25 &&  calcuteValueIs <=29.9){
    console.log('You are over-weight')
    
}else if(calcuteValueIs >=30){
    console.log('Obesity.')
}





