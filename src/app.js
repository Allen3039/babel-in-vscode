(function(x) {
  // Destructuring
  let [a, b, c] = [10, 5, 30];
  // Arrows
  let arrowFunction = (arg1, arg2, arg3) => arg1 + arg2 + arg3;
  // Template Strings
  const templateString = `a = ${a}, b = ${b}, c = ${c}`;
  // Output
  console.log(templateString);
  console.log(arrowFunction(a, b, c));
})();