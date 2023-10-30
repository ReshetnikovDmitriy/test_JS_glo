let num = 266219;
let transformation = 1;

num.toString().split('').forEach(elem => transformation *= elem);
console.log(transformation);

const raising = transformation ** 3;
console.log(raising);

console.log(raising.toString().substr(0, 2));