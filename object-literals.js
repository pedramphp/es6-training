// Object literals

// ES5
var x = {
	hello() {
		console.log("hello");
	}
}

var o = Object.create(x);

o.speak = function(){
	this.hello();
};

//ES6
var x = {
	hello() {
		console.log("hello");
	}
}


// not recommended to use though
var o = {
	__proto__: x, // double under proto - automatically set the internal prototype linkage.
	speak: function(){
		this.hello();
	}
};

var o = {
	"__proto__": x, // double under proto - automatically set the internal prototype linkage.
	speak: function(){
		this.hello();
	}
};

// but it can't be a computed propery ["__proto__"]
// __proto__ invented by one of the browsers and got standardized in ES6
// exists in specification


// Instead

var x = {
	hello() {
		console.log("hello");
	}
}

var o = Object.assign(Object.create(x), {
	speak() {
		this.hello();
	}
})

// one more approach
var o = {
	speak: function(){
		this.hello();
	}
};

Object.setPrototypeOf(o, x);


//------------------------------

// Infinite loop issue
var x = {
	hello() {
		console.log("hello");
	}
}

var o = Object.assign(Object.create(x), {
	hello() { // Infinite loop
		this.hello();
	}
});

o.hellp();


// ES5 fix

var x = {
	hello() {
		console.log("hello");
	}
}

var o = Object.create(x);

o.hello = function(){
	x.hello.call(this);
};

//----------------ES6 fix
// super only works with with "--proto--" or Object.setPrototypeOf - super keyword is static bound not dynamic
// it points to the home object or the literal not the parent
var x = {
	hello() {
		console.log("hello");
	}
};

var o = {
	__proto__: x,
	hello() { // Infinite loop
		super.hello(); // goes up the prototype
	}
});

o.hello();
//------------------------------------
// use super in Classes not in Objects.
// super and setPrototypeOf and __proto__ can't get properly transpiles and it will not be efficient.
