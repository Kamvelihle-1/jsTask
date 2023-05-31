let fnum=17;
let snum=15;
// way 1

[fnum, snum] = [snum, fnum];

console.log(fnum); // Output: 15
console.log(snum); // Output: 17

// Way 2
let temp = fnum;
fnum = snum;
snum = temp;
console.log(fnum); // Output: 15
console.log(snum); // Output: 17

// way 3
fnum = fnum + snum;
snum = fnum - snum;
fnum = fnum - snum;
console.log(fnum); // Output: 15
console.log(snum); // Output: 17