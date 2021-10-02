// create a function
// that accepts an array, counts the number of truthy value and returns it.



function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) {
            count++         
        } 
    }
    return count;
}

const array = [null, 5, 3, 'gold', undefined]
console.log(countTruthy(array))