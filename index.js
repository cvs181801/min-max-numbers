
//grab the elements 

let randomNumberSet1 = document.getElementById("randomNumber1");
let randomNumberSet2 = document.getElementById("randomNumber2");
let randomNumberSet3 = document.getElementById("randomNumber3");
let randomNumberSet4 = document.getElementById("randomNumber4");
let randomNumberSet5 = document.getElementById("randomNumber5");

console.log(randomNumberSet1, randomNumberSet2, randomNumberSet3, randomNumberSet4, randomNumberSet5);

console.log(randomNumberSet1.value, randomNumberSet2.value, randomNumberSet3.value, randomNumberSet4.value, randomNumberSet5.value);

// const goButton = document.getElementById("go-btn");
// const parentDiv = document.getElementById("resultDiv");
// const childDiv = document.createElement("p");

// //create a way to find the maximum and minimum numbers in any number set.

//  let newArray = [];

//  function findMinMax(randomNumberSet) {
//     //randomNumberSet = document.querySelectorAll("#randomNumbers");
//     //newArray = Array.from(randomNumberSet);
//     newArray = [...randomNumberSet];
//       const findMax = Math.max(...newArray);
//       const findMin = Math.min(...newArray);
//         //console.log(findMax);
//         //console.log(findMin);

//     if (Number.isNaN(findMax)) {
//         childDiv.innerHTML = "";
//         childDiv.innerHTML = `Oops, try it using only numbers instead!`;
//         parentDiv.append(childDiv);
//     } else {
//         childDiv.innerHTML = "";
//         childDiv.innerHTML = `The Largest Number: ${findMax}, The Smallest Number: ${findMin}`;
//         parentDiv.append(childDiv);
//     }
//  }

// //console.log(findMinMax(randomNumberSet.value));

//  goButton.addEventListener('click', function(e) {
//      e.preventDefault();
//      //console.log("it worked!!!");
//      return findMinMax(randomNumberSet.value);
//  } )


console.log(parseInt(randomNumberSet.value));
console.log(parseInt(randomNumberSet1.value), parseInt(randomNumberSet2.value), parseInt(randomNumberSet3.value), parseInt(randomNumberSet4.value), parseInt(randomNumberSet5.value));

