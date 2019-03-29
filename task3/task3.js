function func (str, obj) {

    if (str in obj == true) {
        return true;
    } else {
        return false;
    }
}

var testObj = {
    name: 'Vasya',
    surname: 'Pupkin',
    age: 21
};

func('name', testObj)
