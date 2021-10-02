// This function should take a number as argument
// List all numbers from 1 to that limit and state if it is odd or even


function showNumbers (Limit) {
for (i = 1; i < Limit ; i++) {
    const message = (i%2 === 0) ? 'EVEN' : 'ODD'
     console.log (i, message)
}
}
showNumbers(20)