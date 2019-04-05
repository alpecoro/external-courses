function string (str) {
    var res = str.split (' ');
    var newArr = [];

    for (var i = 0; i < res.length; i++) {
        newArr[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1, res[i].length);
        
    } 
    return newArr.join(' ')
}
