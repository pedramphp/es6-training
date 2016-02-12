function foo(){
	return [1, 2, 3]
};


// imperative form
var tmp = foo(),
	a = tmp[0],
	b = tmp[0],
	c = tmp[0];

console.log(a, b, c); // 1 2 3

// Syntactic form of distructuring.


function(){
	return [1, 2, 3]
};

// array distructuring pattern
var [a, b, c] = foo();

// default values
var [
	a = 10,
	b = 42,
	c = 17
] = foo();

// you can use var, const, let
var [
	a = function(){ return 2; }, // it will not called until the assignment happens - lazy expression
	b = 42,
	c = 17
] = foo() || []; // just incase if it returns a non array.l



//---------------

function bar(){
	return 10;
}

// lazy expression - bar only gets called after invokation.
function foo(x = bar()){
}


// Rest - Gather Operator


function foo(){
	return [1, 2, 3, 4];
}

var [
	a = bar(),
	b = 42,
	...others // left over items goes here.
] = foo() || [];

console.log(a, b, others); // 1 2 [3,4]



// nest destructuring
function foo(){
	return [1, 2, [3, 4]];
}

var [
	a = 2,
	b = 42,
	[ c, d] = []
] = foo() || [];

console.log(a, b, c, d); // 1 2 [3,4]


// swapping
var [a, b] = [1, 2];
[b, a] = [a, b];

var o = {};
[o.b, o.a] = [a, b];



// destructure in input params
function foo([a, b, c]) {
	console.log(a, b, c);
}

foo([1, 2, 3]);


function bar(){
	return 17
}

// parameter defaults
// destructure in input params
function foo([
		a = 10,
		b = 42,
		c = bar()
] = []) {
	console.log(a, b, c);
}

foo([1, 2, 3]);

//------------------------------------
//-			Destructure Objects
//-----------------------------------

function foo(){
	return {
		a: 1,
		b: 2,
		c: 3
	};
}

var tmp = foo(),
	a = tmp.a,
	b = tmp.b,
	c = tmp.c;

console.log(a, b, c);

//---------------

function foo(){
	return {
		a: 1,
		b: 2,
		c: 3
	};
}

// property name goes to the left.
var {
	a = 10,
	b: x = 42, // valid assignment target
	c = 17
} = foo();

console.log(a, x, c); // 1 2 3




// property name goes to the left.
// : a : b : c  getts removed.
var {
	a: a = 10,
	b: b = 42, // valid assignment target
	c: c = 17
} = foo() || {};

console.log(a, x, c); // 1 2 3



function foo(){
	return {
		a: 1,
		b: 2,
		c: {
			d: 3,
			e: 4
		}
	};
}



// property name goes to the left.
// Always add [] or {} to put the default gaurd - 100% for safe keeping.
var {
	a = 10,
	b: x = 42, // valid assignment target
	c: {
		d = 17,
		e
	} = {}
} = foo();

console.log(a, x, c); // 1 2 3



// ordering is not important
// destructed c and non destructed c is also available
var {
	c,
	c: {
		d = 17,
		e
	} = {},
	a = 10,
	b: x = 42// valid assignment target
} = foo();

console.log(a, x, c, d ,e); // 1 2 3



function foo(){
	return {
		a: 1,
		b: 2,
		c: {
			d: 3,
			e: [5, 6, 7]
		}
	};
}

// ordering is not important
// destructed c and non destructed c is also available
var {
	c,
	c: {
		d = 17,
		e: [e, f, g] = []
	} = {},
	a = 10,
	b: x = 42// valid assignment target
} = foo();

console.log(a, x, c, d ,e, f, g); // 1 2 3


// Object destructure without declarator we need a wrapper paranthesis
function foo(){
	return {
		a: 1,
		b: 2,
		c: {
			d: 3,
			e: [5, 6, 7]
		}
	};
}

var a, b, c;

({
	a,
	b = 1,
	c
} =  foo());


function foo(x, y, z) {
	console.log(x, y, z);
}

var o = {
	x: 1,
	y: 2,
	z: 3
};

foo(o.x, o.y, o.z);


//-----------
function foo({
	x = 10,
	y,
	z
} = {}) {
	console.log(x, y, z);
}

var o = {
	x: 1,
	y: 2,
	z: 3
};

foo(o)
// emulate named arguments
foo({
	x: 1,
	y: 2,
	z: 3
})


// named arguments - you can have y out
foo({
	x: 1,
	z: 3
})

// keep z in a different order
foo({
	z: 3,
	x: 1
}); // 1 undefined 3

// ------------------

var defaults = {
	name: "hello",
	args: [1, 2, 3],
	special: {
		returns: {
			game: 1,
			friends: []
		}
	}
};

var config = {
	special: {
		returns : {
			game: 2
		}
	}
};

// merge between together.
// Destructuring and Restructuring
{
	let {
		name = defaults.name,
		args = defaults.args,
		special: {
			returns: {
				game = defaults.special.returns.game,
				friends = defaults.special.returns.friends
			} = {}
		} = {}
	} = config;
}
