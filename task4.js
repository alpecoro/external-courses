var testArr = [1, 2, 3, 4, 5, 6, 7, 8];

function func (arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var i2 = i + 1; i2 < arr. length; i2++) {
            if (arr[i] == arr[i2]) {
                return true;
            }
        }
    } return false;
}

console.log (func(testArr))