var veggies = {
    tomato: 245,
    pumpkin: 457,
    cucumber: 172,
    pepper: 7,
}

var newVeggies = Object.create(veggies);
newVeggies.mushrooms = 215;
newVeggies.onions = undefined;

function srchProto(obj, key) {
        if ((obj[key] == undefined) && 
           (obj.__proto__[key] == undefined) && 
           (newVeggies.hasOwnProperty(key) == true)) {
            return 'Not a Proto'
        } else if ((obj[key] == undefined) && 
            (obj.__proto__[key] == undefined)) {
            return 'Not a key'
        } else if (obj[key] == obj.__proto__[key]) {
            return 'Proto'
        } else {
            return 'Not a Proto'
        }
}

console.log(srchProto(newVeggies, 'onions'))