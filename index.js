
//grab the elements 

const randomNumberSet = document.querySelectorAll("randomNumbers");

console.log(randomNumberSet);
 const goButton = document.getElementById("go-btn");
// const parentDiv = document.getElementById("resultDiv");
// const childDiv = document.createElement("p");

// create a way to find the maximum and minimum numbers in any number set.
// //randomNumberSet = [4, 8, 9, 2, -10];
 let numArray = [];

 function findMinMax(randomNumberSet) {
     const newArray = Array.from(randomNumberSet)
     numArray = [...newArray];
//     const findMax = Math.max(...numArray);
//     const findMin = Math.min(...numArray);
     console.log(numArray);
//     if (Number.isNaN(findMax)) {
//         childDiv.innerHTML = "";
//         childDiv.innerHTML = `Oops, try it using only numbers instead!`;
//         parentDiv.append(childDiv);
//     } else {
//         childDiv.innerHTML = "";
//         childDiv.innerHTML = `The Largest Number: ${findMax}, The Smallest Number: ${findMin}`;
//         parentDiv.append(childDiv);
//     }
 }

// //console.log(findMinMax(randomNumberSet.value));

 goButton.addEventListener('click', function(e) {
     e.preventDefault();
     return findMinMax(randomNumberSet.value);
 } )

