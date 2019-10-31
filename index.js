const Simplex = require('simplexcalculator');

var minmax = "max";  //only min or max
var objective = "50x1+120x2+40x3+80x4";
var restrictions = ["1x+1y-1z>=100", "-8x-4y+z<=50", "-4y+2z>=27", "35x-22z<=52"];

Simplex.Calculate(minmax, objective, restrictions, function (res) {
    console.log(res);
});