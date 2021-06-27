

//create a way to find the maximum and minimum numbers in any number set.

const numArray = [2, 5, 17, 0, 9, -3];



function findMinMax(numArray) {
    const findMax = Math.max(...numArray);
    const findMin = Math.min(...numArray);
   return `The Largest Number: ${findMax}, The Smallest Number: ${findMin}`;
}

console.log(findMinMax(numArray));