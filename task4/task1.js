function srchProto(key, obj) {
    var objProto = Object.getPrototypeOf(obj);

        if ((obj[key] == undefined) && 
           (objProto[key] == undefined) && 
           (obj.hasOwnProperty(key) == true)) {
            return 'Not a Proto'

        } else if ((obj[key] == undefined) && 
            (objProto[key] == undefined)) {
            return 'Not a key'

        } else if (obj[key] == objProto[key]) {
            return 'Proto'

        } else {
            return 'Not a Proto'
        }
}
