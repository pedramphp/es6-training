function foo(x=10, y=42){
	console.log(x, y);
}
...[] // is the same as undefined.


foo(null); // null 42
foo(undefined); //10 42
foo(...[]); // 10 42
foo(...[1]); // 1 42
foo(...[,3]); // 10 3
console.log(...[,3]);


function foo(x=10, y=42, ...args){
	console.log(x, y);
}

foo(...[,6, 7, 8]) // 10 6 [7 8]
