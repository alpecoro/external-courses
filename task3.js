//Сделано, на проверку

var testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function func(arr) {
    var res1 = 0;
    var res2 = 0;
    var res3 = 0;

    for (var index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            res1++;
        } else if (arr[index] % 2 == 1) {
            res2++;
        } else if (arr[index] == 0) {
            res3++;
        }
        
    }
    return [res1, res2, res3];

}

console.log (func(testArr))