// Template Strings


var name = "Kyle";
var title = "Teacher";

// looks ugly to interpolate
var msg = "Hello, " + name + ",\
	Welcome to the class, you are \
	the " + title + ". ";



//  New type of string literal - Interpolated String Literals.\
// use backtick operator
// it's not repeated, you can't rerender it with new data.
// EOL characters are end of the string here- automatically inserterd.
//
var msg = `Hello, ${name},
	Welcome to the class, you are
	the ${title}. `;

// identifier before the backtick is called "tag" - Tag Template String.
// special kind of function call.

var nmae = "Kyle";
var title = "Teacher";

// strings: array of strings
function foo(strings, val1, val2){
	return "this is foo ";
}

var msg = foo`Hello, ${name},
	Welcome to the class, you are
	the ${title}. `;

//
var name = "Kyle";
var title = "Teacher";


// -------------------
// can make our version of strings
// always strings array has one extra member. // it will be an empty string at the end.
// value: Kyle and Teacher
// TAG function
function foo(strings, ...values){
 	console.log("strings", strings, values)
	let str = "";
	for(let i = 0; i < strings.length; i++){
		if(i > 0){
			str += values[i - 1]
		}
		str += strings[i];
	}
	return str;
}


var msg = foo`Hel\nlo, ${name},
	Welcome to the class, you are
	the ${title}.yes`;

console.log(msg);

// Why needing a Tag function.
// Internazilation or Localization or escape content before append to HTML string
// escape data.

// strings.raw - has a raw preprocessed form.

function foo(strings, ...values){
 	console.log(strings.raw);
}


var msg = foo`Hel\nlo, ${name},
	Welcome to the class, you are
	the ${title}.yes`;

console.log(msg);

//------------

var name = "kyle";
var title = "teacher";

function upper(strings, ...values){
	let str = "";
	strings.forEach((element, i) => {
		if(i > 0){
			str += values[i - 1].toUpperCase()
		}
		str += strings[i];
	});
	return str;
}


var msg = upper`Hel\nlo, ${name},
	Welcome to the class, you are
	the ${title}.yes`;

console.log(msg);


//-----------
function upper(strings, ...values) {

  var str = '';
  strings.forEach((element, i) => {
    if( i > 0){
      str += values[i - 1].toUpperCase()
    }
    str += strings[i];
  });
  return str;
}

//-----------
function lower(strings, ...values) {

  var str = '';
  strings.forEach((element, i) => {
    if( i > 0){
      str += values[i - 1].tLowerCase()
    }
    str += strings[i];
  });
  return str;
}


var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

// tagged template string
console.log(
upper`Hello ${name} (@${twitter}),
welcome to the ${lower`${classname}`}!`
);


//-------------------
// Mixing it.
  var str = '';
  strings.forEach((element, i) => {
    if( i > 0){
      str += values[i - 1].toUpperCase()
    }
    str += strings[i];
  });
  return str;
}

//-----------
function lower(strings, ...values) {

  var str = '';
  strings.forEach((element, i) => {
    if( i > 0){
      str += values[i - 1].toLowerCase()
    }
    str += strings[i];
  });
  return str;
}


var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

// tagged template string
console.log(
`${upper `Hello ${name}`}  (@${twitter}),
welcome to the ${lower`${classname}`}!`
);
