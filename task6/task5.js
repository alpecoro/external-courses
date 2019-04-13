function map (arr, callback) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        newArray.push(callback(item, i, arr)); 
    } 
    return newArray;
}
