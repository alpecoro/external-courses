function string (str1, str2) {

    var newStr1 = str1.toLowerCase();
    var newStr2 = str2.toLowerCase();

    if (newStr1.includes(newStr2) != false) {
        return true
    } else {
        return false
    }
}
