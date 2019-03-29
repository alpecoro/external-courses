function func (obj) {
    var clone = Object.assign ({}, obj);
    return clone;
}

var testObj = {
    name: 'Vasya',
    surname: 'Pupkin',
    age: 21
};

var copy = func(testObj);
copy == testObj
