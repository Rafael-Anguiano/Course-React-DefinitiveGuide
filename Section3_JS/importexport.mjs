const array = ['Object 1', 'Object 2', 'Object 3']
const array2 = ['Object 4', 'Object 5', 'Object 6']
const array3 = []
// module.exports = {
//     array,
//     array2
// }

const fn1 = () => {
    console.log("I'm a foreign arrow function")
}

function fn2() {
    console.log("I'm a foreign function")
}

export { array2, array3, fn1, fn2}
export default array