

function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if ( parseInt( x ) != x ) {

alert("x не целое число");

} else {

    console.log( pow(x, n) );
}




