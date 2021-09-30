/**
 * Functions 
 */

function Fn(){
    //when you use New, it creates a void object {}
    //Creates a property inside the object
    this.prop = 'Property'
    //The return is not needed when you are creating an object
    //return 'This is returned by the function'
}

Fn.prototype.lala = function FunctionPrototype(){}



const r = new Fn()
//console.log(r.__proto__);

/**
 * Fat arrow function
 */

// Can't be called using 'new', it works only with "function"
// This because a "normal function" could be use as a class

//console.log(this)
const fatFn = () => {
    this.prop = 'Property' // 'this' DOESN'T EXIST IN AN ARROW FUNCTION
    //return 'This is returned by a arrow function'
    return this
}

const r1 = fatFn()
//console.log(this)

const FnR = () => 2 //Could have implicit returns