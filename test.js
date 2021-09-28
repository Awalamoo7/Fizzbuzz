// fizzbuzz game


function fizzbuzz (input) {
    if (typeof input !== 'number') 
    return NaN
    else if ( (input%3 == 0) && (input%5 == 0) )
    return "Fizzbuzz"
    else if  (input%3 == 0)
    return "Fizz"
    else if (input%5 == 0)
    return "Buzz"
    else return input
}

const goal = fizzbuzz('e')
console.log (goal);