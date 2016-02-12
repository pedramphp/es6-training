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
