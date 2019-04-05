function func (obj) {

    var copy = {};
    
    for (var key in obj) {
        if (typeof obj[key] == 'object') {
            copy[key] = func(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    } 
    return copy;
}

var testObj = {
    name: 'Vasya',
    surname: 'Pupkin',
    age: 21,
    user: {
        login: 'vasya1995',
        password: 'qwerty',
        profile: {
            yearOfBirth: 1995,
            cityOfOrigin: 'Minsk',
            currentCity: 'New York',
        }
    }

};

var copy = func(testObj);

console.log(copy)
console.log(testObj)

testObj.user == copy.user
