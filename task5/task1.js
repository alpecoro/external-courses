var Calculator = {
    
    currentValue: 0,

    reset: function() {
        this.currentValue = 0;
        return this.currentValue;
    },

    getResult: function() {
        return this.currentValue;
    },

    add: function(num) {
        if (arguments.length == 0) {
            return this.currentValue;
        } 
        var a = this.currentValue + num;
        this.currentValue = a;
        return a;
        
    },

    substract: function(num) {
        if (arguments.length == 0) {
            return this.currentValue;
        } else {
        var s = this.currentValue - num;
        this.currentValue = s;
        return s;
        }
    },

    divide: function(num) {
        if (arguments.length == 0) {
            return this.currentValue;
        } else {
        var d = this.currentValue / num;
        this.currentValue = d;
        return d;
        }    
    },

    multiply: function(num) {
        if (arguments.length == 0) {
            return this.currentValue;
        } else {
        var m = this.currentValue * num;
        this.currentValue = m;
        return m;
        }
    }
}


