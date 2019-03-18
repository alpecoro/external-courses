function func (val) {
    var res = typeof(val)
    if (res == 'string') {
        return res;
    } else if (res == 'number') {
        return res;
    } 
}

console.log (func(10));
console.log (func('10'));
console.log (func(null));
console.log (func(undefined));
console.log (func(true))
