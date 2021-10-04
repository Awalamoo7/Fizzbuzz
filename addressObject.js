//  An object that takes street,city and zipcode
// function showAddress that takes an address argument and gives value


const address = {
    street : 'ogundeji',
    city : 'ibadan',
    zipCode : 23480
}

function showAddress (address) {
    for (let key in address) {
        console.log (key , address [key])
    }
}

showAddress(address)