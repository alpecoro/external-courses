
function func (val) {
    if (typeof(val) == 'string') {
        return 'string';
    } else if (typeof(val) == 'number') {
        return 'number';
    } 
}

console.log (func(10));
console.log (func('10'));
console.log (func(null));
console.log (func(undefined));
console.log (func(true))
