
// GLobally unique and unguessable
// meta programming uses.
var o = (function(){

	var s = Symbol("hello");


	var o = {
		[s]: 42
	};

	return o;

})();
console.log(o[Symbol("hello")]); // undefined


// it will not include the Symbol
console.log(Object.keys(o));

// Empty array
console.log(Object.getOwnPropertyNames(o));

// Array with that Symbol
console.log(Object.getOwnPropertySymbols(o));

// WKS - Well Known Symbols
// predefined SYmbols that javascript ships with that we can extend it.
// Properties on Symbol.

console.log( Symbol.iterator );
console.log( Symbol.toStringTag );
console.log( Symbol.isSpreadConcat );

// Special value of a special location of an object.


var o = {
	// computed property
	[Symbol.iterator]:
}


// Iterable - controlling object - standardize interfaces.
// spread operator ... it will get the iterator of the value and will iterate over it.

// iterator built in  by default
var a = [1, 2, 3];

var it = a[Symbol.iterator]();


console.log(it.next()); // {"value":1,"done":false}
console.log(it.next()); // {"value":2,"done":false}
console.log(it.next()); // {"value":3,"done":false}
console.log(it.next()); // {"done":true}


// -----------------
// iterables. -- values that exposes iterables.
// arrays - strings - maps - sets
// objects are not by default iterables

var a = [1, 2, 3];

// imperative
for(var i=0; i < a.length; i++){
	console.log( a[i] );
}

for(var i in a){
	console.log( a[i] );
}

// ES6 for of loop
for(var v of a){
	console.log( v );
}

//...............

var a = "hello";

var b = [...a];

//....................


var Events = {
	// returns iterator object - requires a next method.
	[Symbol.iterator]: function() {

		var val = 0;

		var it = {
			next: function() {

				var ret = {
					value: val,
					done: (val > 10)
				};
				val += 2;
				return ret;
			}
		};

		return it;

	}
};

// iterate over it and get all even numbers;

for( var v of Events) {
	console.log(v)
}
// 2 4 6 8 10
