const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

function transformInMorse(str) {
	if(str.includes("*")){
		return " ";
	}
	const res = [];
	for (let i = 0; i < str.length / 2; i++) {
		res.push(str.slice(i * 2, (i + 1) * 2));
	}
	return MORSE_TABLE[
		res.reduce((acc, el) => {
			if (el === "10") {
				return (acc += ".");
			} else {
				return (acc += "-");
			}
		}, "")
	];
}

function decode(expr){
	const re = /00/g;
	const res = [];
	for (let i = 0; i < expr.length / 10; i++) {
		res.push(expr.slice(i * 10, (i + 1) * 10).replace(re, ""));
	}
	const text = res.map((el) => transformInMorse(el)).join("");
	return text;
}

module.exports = {
	decode
}
