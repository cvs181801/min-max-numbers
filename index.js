

//create a way to find the maximum and minimum numbers in any number set.

const numArray = [2, 5, 17, 0, 9, -3, 'P'];



function findMinMax(numArray) {
    const findMax = Math.max(...numArray);
    const findMin = Math.min(...numArray);
    console.log(findMax, findMin);
    if (Number.isNaN(findMax)) {
        return `Oops, try it using only numbers instead!`;
    } else {
        return `The Largest Number: ${findMax}, The Smallest Number: ${findMin}`;
    }
}

console.log(findMinMax(numArray));