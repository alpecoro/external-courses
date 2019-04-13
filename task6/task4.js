function filter (arr, callback) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (callback(item, i, arr)) {
            newArray.push(item);
        }
    }
    return newArray;
}
