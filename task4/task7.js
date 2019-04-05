function string (str, num) {
    if (str.length > num) {
        var cut = str.slice(0, str.length - 3)
        return cut + '...'
    } else {
        return str
    }
}
