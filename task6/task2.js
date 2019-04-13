function some (arr, callback) {
    
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (callback(item, i, arr)) {
            return true;
        } 
    }

    return false;
}
