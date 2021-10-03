// factory function
// uses camel notation

function createCircle (radius) {
    return {
        radius,
        draw () {
            console.log ('draw')
        }
    }
}

const circle1 = createCircle (1)

console.log(circle1)


