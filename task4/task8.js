function lCC (str) {
    var arr = str.split(' ');

    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1, arr[0].length);

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length)
    } 
    
    return arr.join('')
}