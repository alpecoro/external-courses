function func (str, obj) {
    if (!(str in obj)) {
        obj[str] = 'new';
    }
    return obj;
}
