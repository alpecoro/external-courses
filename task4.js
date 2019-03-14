function func (numb) {
    var numbRes = numb * numb - 2;
    if (numbRes % 2 == 0) {
        return 'Составное'; 
    } else {
        return 'Простое';
    }
}
console.log (func(15))