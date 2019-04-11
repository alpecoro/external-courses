var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function arrCopy (arr, begin, end) {
    
    if (end == undefined) {
        end = arr.length;
    } 
    
    if (begin == undefined) {
        begin = 0;
    } 
    
    if (begin < 0) {
        begin = arr.length + begin;
    }

    if (end < 0) {
        end = arr.length + end;
    }

    var result = new Array(end - begin);
    for (var i = begin; i < end; i++) {
        result[i - begin] = arr[i]
    }
    return result
}

