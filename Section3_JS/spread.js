
const fn = (a,b,c) => {
    console.log(a, b, c)
}

const arr = [1,2,3,4]

fn(...arr)

const arr1 = [5,6]

// const arr2 = arr.concat(arr1)

//const arr2 = [...arr, ...arr1]
const arr3 = arr
const arr2 = [...arr, 2, 3]
arr[0] = 'Happy face'

// console.log(arr, arr2, arr3)

const obj1 = {a:1, b:2}
const obj2 = {b:5, c:'Happy face'}

const obj3 = { ...obj1}

obj1.a = 10

// console.log(obj3, obj1)

const obj4 = {...obj1, ...obj2}

// console.log(obj4)

const obj5 = {
    ...obj1,
    loading: true,
    data:{
        prop: 'lala',
        animal: 'Dog'
    }
}

console.log(obj5)