
for (let i = 101; i >= 1; i -= 2) {
    console.log(i);
}


let j = 101;
while (j >= 1) {
    console.log(j);
    j -= 2;
}


let tab = [...Array(102).keys()].filter((elem) => {
    return elem % 2 !== 0;
}).reverse();

for (let k of tab) {
    console.log(k);
}

