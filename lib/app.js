"use strict";

(function (x) {
  // Destructuring
  var a = 10;
  var b = 5;
  var c = 30;
  // Arrows

  var arrowFunction = function arrowFunction(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
  };
  // Template Strings
  var templateString = "a = " + a + ", b = " + b + ", c = " + c;
  // Output
  console.log(templateString);
  console.log(arrowFunction(a, b, c));
})();
//# sourceMappingURL=app.js.map