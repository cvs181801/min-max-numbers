

//create a way to find the maximum and minimum numbers in any number set.

const numArray = [2, 5, 17, 0, 9, -3, 'P'];



function findMinMax(numArray) {
    
    const findMax = Math.max(...numArray);
    const findMin = Math.min(...numArray);
    if (NaN) {
        return `Oops, try it using only numbers instead!`;
    }
    return `The Largest Number: ${findMax}, The Smallest Number: ${findMin}`;
}

console.log(findMinMax(numArray));