
//grab the elements 

//const randomNumberSet = document.getElementById("randomNumbers");
const goButton = document.getElementById("go-btn");
const parentDiv = getDocumentById("resultDiv");
//const childDiv = document.createElement("p");


//create a way to find the maximum and minimum numbers in any number set.
randomNumberSet = [4, 8, 9, 2, -10];
const numArray = [];



function findMinMax(randomNumberSet) {
    numArray.push(randomNumberSet);
    const findMax = Math.max(...numArray);
    const findMin = Math.min(...numArray);
    console.log(findMax, findMin);
    if (Number.isNaN(findMax)) {
        return `Oops, try it using only numbers instead!`;
    } else {
        //const childDiv = document.createElement("p");
        return `The Largest Number: ${findMax}, The Smallest Number: ${findMin}`;
    }
}

console.log(findMinMax(randomNumberSet));

