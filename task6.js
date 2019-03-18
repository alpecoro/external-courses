function func (numb) {

    if (numb > 1000) {
        return 'Данные неверны';
    } 

    for (var i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i == 0) {
            return numb + ' - составное число';
        }
    } 
    return numb + ' - простое число'; 
            
} 

console.log (func(205))