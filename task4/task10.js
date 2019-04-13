function reversedString (str) {
    var arr = str.split('');
    arr.reverse();
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
        arr[i] = arr[i].reverse();
        arr[i] = arr[i].join(' ')
    } 
    return arr.join('')
}

var array = 'Coolest monkey in the jungle'
reversedString(array)