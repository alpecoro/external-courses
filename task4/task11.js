function findingNemo (str) {
    var result = {};

    for (var i = 0; i < str.length; i++) {
               
        if (result[str[i]] == undefined) {
            result[str[i]] = 1; 
        } else {
            result[str[i]]++;
        }
        
    }

    return result;
}
