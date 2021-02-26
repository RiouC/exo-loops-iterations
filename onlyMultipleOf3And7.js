

let tab = [...Array(1000).keys()];
tab.shift();
// not space efficient, but …
for (let i of tab) {
    if (i % 3 === 0 || i % 7 === 0) {
	console.log(i);
    }
}



for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 7 === 0)
	console.log(i);
}
