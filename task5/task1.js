var Calculator = (function() {
    
    var currentValue = 0;

    return {
        reset: function reset() {
            currentValue = 0;
            return currentValue;
        },

        getResult: function getResult() {
            return currentValue;
        },

        add: function add(num) {
            if (arguments.length == 0) {
                num = 0;
            };
            currentValue = currentValue + num;
            return add;
        },

        substract: function substract(num) {
            if (arguments.length == 0) {
                num = 0;
            }
            currentValue = currentValue - num;
            return substract;
        },

        divide: function divide(num) {
            if (arguments.length == 0) {
                num = 0;
            }
            currentValue = currentValue / num;
            return divide;
        },

        multiply: function multiply(num) {
            if (arguments.length == 0) {
                num = 0;
            }
            currentValue = currentValue * num;
            return multiply;
        }
    }
})()

