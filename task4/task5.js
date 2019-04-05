function string (str1, str2) {

    var newStr1 = str1.toLowerCase();
    var newStr2 = str2.toLowerCase();

    if (newStr2.indexOf(newStr1) != -1) {
        return true
    } else {
        return false
    }
}
