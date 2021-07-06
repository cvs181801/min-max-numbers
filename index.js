
//grab the elements 

let randomNumberSet = document.getElementsByClassName("randomNumbers");


console.log(randomNumberSet);

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

console.log(randomNumberSet.value);
