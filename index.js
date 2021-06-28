
//grab the elements 

//let randomNumberSet = document.querySelectorAll("randomNumbers");
//console.log(randomNumberSet);

const goButton = document.getElementById("go-btn");
const parentDiv = document.getElementById("resultDiv");
const childDiv = document.createElement("p");

//create a way to find the maximum and minimum numbers in any number set.

 let randomNumberSet = [2, 4, 7, 9, 5];

 function findMinMax(array) {
    //randomNumberSet = document.querySelectorAll("randomNumbers");
    //const newArray = Array.from(randomNumberSet);
    //numArray = [...newArray];
      const findMax = Math.max(...array);
      const findMin = Math.min(...array);
        console.log(findMax);
        console.log(findMin);
    //console.log(numArray);

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

