let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],
];

const adder = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

tab = adder(tab.map(adder));

console.log(tab);
