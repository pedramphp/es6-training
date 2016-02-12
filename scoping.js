"use strict";

for(var i=0; i<10; i++){
	let y = i / 3; // block scope.
}


function diff(x, y) {
	return y - x;
}


diff(4, 7);



function foo(x) {
	if (x > 10){
		var y = x
	} else {
		var y = 5
	}
}

function foo(x) {
	var y;
	if (x > 10){
		y = x
	} else {
		y = 5
	}
}


function foo(x) {
	var y = x * 2; // top level `let` is the same is the top level `var`
}

function foo(x) {
	try{
		let y = x * bar(2); // top level `let` is the same is the top level `var`
	} catch(err) {
		// let is only inside of block and its broken.
	}
}

function foo(x) {
	let y; // let doesn't get hoisted. - you can't redeclar variable using let.
	try{
		y = x * bar(2); // top level `let` is the same is the top level `var`
	} catch(err) {
		// let is only inside of block and its broken.
	}
}

function diff(x, y) {
	if (x > y) {
		{ // use extra block for let statements.
			let tmp = x;
			x = y;
			y = tmp;
		}
	}
	return y - x
}

//--------------------------

if ( x > 10) {
	const y = x * 2; // y is immutable value.
	// ..


	y = 1; // throwing a an error - it can't get reassigned.
}



if ( x > 10) {
	const y = [x * 2]; //values are mutable - non reassignable value
	// ..


	y[0] = 1; // will not throw an error.
}

// value immutability is important


if ( x > 10) {
	const y = Object.freeze([x * 2]); // it's not a deep freeze, only top levels are freeze.
	// ..


	y[0] = 1; // will through an error.
}



for(var i=1; i<=5; i++){
	setTimeout(function(){
		console.log("i:", i);
	}, i * 1000);
}

for(var i=1; i<=5; i++){  // let creates a new scope.
	let j = i;
	setTimeout(function(){
		console.log("j:", j);
	}, j * 1000);
}

for(let i=1; i<=5; i++){ // creates a block
	setTimeout(function(){
		console.log("i:", i);
	}, i * 1000);
}
