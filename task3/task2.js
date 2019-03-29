function func (obj) {
    for (key in obj) {
        console.log (key + ': ' + obj[key]);
    }
}

var testObj = {
    name: 'Vasya',
    surname: 'Pupkin',
    age: 34
}

func(testObj)