// Object literal extensions
// arrow functions are designed to replace - one parameters and one statement to get returns.
// happy path for arrow function
// significant reduction.

// ES 5
[1, 2, 3].map(function(x){
	return x * 2;
})

//ES6
[1, 2, 3].map(x => x * 2);


[1, 2, 3].reduce(function(x, y){
	return x + y;
}, 0); // 7

[1, 2, 3].reduce((x, y) => x + y, 0); // 7


// no argumeent ()
[1, 2, 3].reduce(() => x + y, 0);


//default values, array destructing, object destructing needs to be in the params.
[1, 2, 3].reduce((...args) => x + y, 0);

[1, 2, 3].reduce((x, y) => x + y, 0);
//---------------------------------

// {} is a function body.
// return object literal needs paranthesis.
foo(x => ({ x }) ){

}

// more than one statement needs a return.-- {} needs a return
foo(x => {
	console.log(x);
	return x * 2;
});

// use arrow function is not about saving characters.

var o = {
	id: "kyle",
	foo() {
		setTimeout(function() {
			console.log(this.id)
		}, 1000);
	}
}

// solve

// context
var o = {
	id: "kyle",
	foo() {
		var contex = this;
		setTimeout(function() {
			console.log(context.id)
		}, 1000);
	}
}

// bind
var o = {
	id: "kyle",
	foo() {
		var contex = this;
		setTimeout(function() {
			console.log(this.id)
		}.bind(this), 1000);
	}
}

// arrow functions -- arrow function doesn't have this keyword
// you can't bind to the arrow function as well because it doesn't have a this.
// Arrow function you can't use an arguments keyword
// this, arguments, super, new.target doesn't exist in arrow function, it will go up lexiclly in scope
// arrow function is getting a closure over the variables.
var o = {
	id: "kyle",
	foo() {
		var contex = this;
		setTimeout(() => {
			console.log(this.id)
		}, 1000);
	}
}

o.foo(1, 2, 3) // kyle [1,2,3]


//-------------------
// this will go outside scope which is global scope
// never do it.
var o = {
	id: "kyle",
	foo: () => {
		var contex = this;
		setTimeout(() => {
			console.log(this.id)
		}, 1000);
	}
}

o.foo(1, 2, 3) // kyle [1,2,3]

//------------------
//The arrow syntax is a shortform for anonymous function, so you can't have a named arrow functions
