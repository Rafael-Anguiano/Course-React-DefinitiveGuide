// const imported = require('./importexport.js')
// console.log(imported)

import array, { array2, array3, fn1, fn2 } from './importexport.mjs'
//import array2 from './importexport.mjs'

console.log(array);
console.log(array2);
console.log(array3);

fn1()
fn2()