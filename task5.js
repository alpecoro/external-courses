var testArr = [5, 1, 8, 3, 236, 26458, 12904819258, 124, 976];

function func (arr) {

    var res = -Infinity;

    for (var ind = 0; ind < arr.length; ind++) {

        if (arr[ind] > res) {
            res = arr[ind];
        }    
    } return res;
}