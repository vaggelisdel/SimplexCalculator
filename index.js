const Simplex = require('simplexcalculator');

var minmax = "max";
var objective = "50x1+120x2+40x3+80x4";
var restrictions = ["-x1-2x1-3x2>=100", "x2+x3<=50"];

Simplex.Calculate(minmax, objective, restrictions, function (res) {
    console.log(res);
});