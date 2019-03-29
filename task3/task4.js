function func (str, obj) {

    if (str in obj == true) {
        return true;
    } else {
        obj[str] = 'new';
        return obj;
    }
}

var testObj = {
    name: 'Vasya',
    surname: 'Pupkin',
    age: 21
};

func('salary', testObj)
func('name', testObj)
