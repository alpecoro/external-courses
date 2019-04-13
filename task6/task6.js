function reduce (arr, callback, initialValue) {

    if (initialValue != undefined) {
        previousValue = initialValue;
    } 

    if (initialValue == undefined) {
        previousValue = arr[0];
    }

    var currentItem = arr[i];

    for (var i = 0; i < arr.length; i++) {
        var res = 0;
        res += callback(previousValue, currentItem, i, arr);
    }

    return res

}

var check = function(previousValue, currentItem) {
    return previousValue + currentItem;
}