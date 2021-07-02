
//grab the elements 

let firstRandomNumber = document.getElementById("randomNumber1");
let secondRandomNumber = document.getElementById("randomNumber2");
let thirdRandomNumber = document.getElementById("randomNumber3");
let fourthRandomNumber = document.getElementById("randomNumber4");
let fifthRandomNumber = document.getElementById("randomNumber5");

let randomNumberSet = [firstRandomNumber.value, secondRandomNumber.value, thirdRandomNumber.value, fourthRandomNumber.value, fifthRandomNumber.value ];

console.log(randomNumberSet);

const goButton = document.getElementById("go-btn");
const parentDiv = document.getElementById("resultDiv");
const childDiv = document.createElement("p");

//create a way to find the maximum and minimum numbers in any number set.

 let newArray = [];

 function findMinMax(randomNumberSet) {
    //randomNumberSet = document.querySelectorAll("#randomNumbers");
    //newArray = Array.from(randomNumberSet);
    newArray = [...randomNumberSet];
      const findMax = Math.max(...newArray);
      const findMin = Math.min(...newArray);
        //console.log(findMax);
        //console.log(findMin);

    if (Number.isNaN(findMax)) {
        childDiv.innerHTML = "";
        childDiv.innerHTML = `Oops, try it using only numbers instead!`;
        parentDiv.append(childDiv);
    } else {
        childDiv.innerHTML = "";
        childDiv.innerHTML = `The Largest Number: ${findMax}, The Smallest Number: ${findMin}`;
        parentDiv.append(childDiv);
    }
 }

//console.log(findMinMax(randomNumberSet.value));

 goButton.addEventListener('click', function(e) {
     e.preventDefault();
     //console.log("it worked!!!");
     return findMinMax(randomNumberSet);
 } )

