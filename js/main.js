var num = +prompt("Enter Number");
function fibonacci(n) {
  var a=0;
  var b=1;
  var c;
    for ( var i = n; i > 0; i--) {
        c = b;
        b = b + a;
        a = c; 
    }
    return a;
}
var result = fibonacci(num);
document.write(result); 


// var num = +prompt("Enter Number");
// var result = fibonacci(num);
// document.write(result);

// function fibonacci(num) {
//   return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
// }