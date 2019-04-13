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

    var result = [];
    for (var i = begin; i < end; i++) {
        result.push(arr[i]);
    }
  
