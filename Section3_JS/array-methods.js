const arr = [-5, -1, -2, -3, -4]

const r = arr.filter( (e, i)=> { // e = element, i = index
    //console.log(e , i)
    return e > 2
})

//console.log(r)

// const mapped = arr.map((e) => `<h1>${e}</h1>`)
// console.log(mapped)

const users = [
    {id:1, name: 'User1'},
    {id:2, name: 'User2'},
    {id:3, name: 'User3'},
    {id:4, name: 'User4'},
    {id:5, name: 'User5'}
]


const mapped = users.map((user) => `<h1>${user.name}</h1>`)
//console.log(mapped)

// const r1 = arr.reduce( (acc, e, index, array)=> acc + e, 0)   

// const getMax = (a,b) => Math.max(a,b)
// const r1 = arr.reduce(getMax, 0)   // 0 is the initial state and can be omited

// const r1 = users.reduce((acc,e) => 
//     `${acc === '' ? '' : `${acc}, `}${e.name}`, '')

const r1 = users.reduce( ( acc, e) => {
    if(e.id < 2){
        return acc
    } 
    return acc.concat(e)
}, [])

console.log(r1)