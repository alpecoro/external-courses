function func (obj) {
    var clone = {};
    for (key in obj) {
        clone[key] = obj[key]
    }
    return clone;
}

var testObj = {
    name: 'Vasya',
    surname: 'Pupkin',
    age: 21
};

var copy = func(testObj);
copy == testObj
