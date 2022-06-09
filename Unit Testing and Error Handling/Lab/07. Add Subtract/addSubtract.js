function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let calc = createCalculator();
calc.value += 4; 
console.log(calc.value);

module.exports = { createCalculator }