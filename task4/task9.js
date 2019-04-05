function rightOrder (str1, str2, position) {
    var arr1 = str1.split(' ');
    arr1.splice(position, 0, str2);
    return arr1.join(' ')
}
