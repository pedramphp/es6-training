// Speard and Gathering Operator.

var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [0].concat(a, b, [7]);

console.log("Concat: " + c)

var aa = [1, 2, 3];
var bb = [4, 5, 6];
var cc = [0, ...a, ...b, 7];

console.log("Spread Operator: " + cc)


function foo(x, y, z){
	return x + y +z;
}

// imperative
console.log( foo.apply(null, a) );

// spreading - declarative
console.log( foo(...a) );

function bar(x, y, z) {
	var args = [].slice.call(arguments, 1);
}

// gathering
function bar(x, ...args) {

}
