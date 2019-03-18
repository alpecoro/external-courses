function func (name, age) {
        return {
            name: name, age: age,
        }
}
var p1 = func('Mary', 20);
var p2 = func('John', 30);
var p3 = func('Jenny', 23);
var p4 = func('Trevor', 48);
var p5 = func('Constantine', 27);
var p6 = func('Sandra', 53);
var p7 = func('Alex', 18);

var arr = [
    p1, p2, p3,
    p4, p5, p6,
    p7
]

for (var index = 0; index < arr.length; index++) {
        if (arr[index].age == 23) {
        arr[index].age = 25;
        arr[index].name = 'Sergey';
        arr[index].salary = 30000;
        var item = arr[index];
    }
}

for (var index = 0; index < arr.length; index++) {
    if (arr[index].name == 'Mary') {
        delete arr[index].age;
        arr[index].husband = item;
    }
}
