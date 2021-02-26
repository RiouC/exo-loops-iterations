let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
];

const adder = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

let res = 0;
for (let i of tab) {
    res += adder(i.map(adder));
}

console.log(res);


// How many different ways should i use for this exercice ?
// Yes
flatAdder = adder([].concat(...tab.flat()));
flatReduce = [].concat(...tab.flat()).reduce((acc, curr) => acc + curr, 0);

console.log(flatAdder);
console.log(flatReduce);
