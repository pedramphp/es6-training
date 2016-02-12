function upper(strings,...values) {
	var s = "";
	for (var i=0; i<strings.length; i++) {
		if (i > 0) {
			s += values[i-1].toUpperCase();
		}
		s += strings[i];
	}
	return s;
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
`Hello ${upper`${name} (@${twitter})`},
welcome to the ${upper`${classname}`}!`
);
