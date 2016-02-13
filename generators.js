// genrator will pause in yeild.
function *main() {
	yield 1;
	yield 3;
	yield 5;
	yield 7;
	yield 9;
}


var it = main();
it.next(); // {value: 1, done: false;}
it.next(); // {value: 2, done: false;}
//..
it.next(); // {value: 9, done: false;}
it.next(); // {value: undefined, done: true;}



for( var v of main()) {
	console.log(v)
}

//--------------

// Customize objects to iterate over the data structure.
var Events = {
	// returns iterator object - requires a next method.
	*[Symbol.iterator]() {

		for (var i=0; i <= 10; i+=2){
			yield i;
		}

	}
};

// iterate over it and get all even numbers;

for( var v of Events) {
	console.log(v)
}

/*
0
2
4
6
8
10*/
