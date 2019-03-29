var veggies = {
    tomato: true,
    pumpkin: true,
    cucumber: false,
    pepper: true
}

var newVeggies = Object.create(veggies);
newVeggies.mushrooms = true;
//var res = newVeggies.hasOwnProperty('cucumber');

newVeggies.hasOwnProperty('mush');

function srch (key, obj) {
    var res = obj.hasOwnProperty(key);
    for (key in obj) {
        if (res == false) {
            return 'Protorype';
        } else {
            return 'Not a proto';
        }
    }
}

console.log(srch('mush', newVeggies))