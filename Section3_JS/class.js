// Expresion of class
// const Rectangulo = class R {}

// Defining class
class Rectangulo {
    //Without hoisting
}

/**
 * Hoisting 
 * It's when we take variables defined using var
 * and functions (not arrow functions), and are move 
 * to the start of the code
 */

//console.log(Cuadrado)

function Cuadrado(){}

//console.log(Cuadrado, Rectangulo)

const r = new Rectangulo()

class Class1 {
    prop = 'my Property'
    #hunger = false         // Private variable, need to be declared
    static staticVar = 42

    constructor(state = ";-;", hunger = false){
        this.state = state
        this.#hunger = hunger
    }

    speak(){
        console.log(`I'm a class ${this.state} ${this.#hunger ? ' really hungry' : ' Satisfied'}`)
    }

    static eat(){
        console.log(this.staticVar, "I'm eating ")
    }
}

Class1.eat()

const happy = new Class1(':)')
//console.log(happy.__proto__.speak)
// happy.speak()
// console.log(happy)
const sad = new Class1(':(')
sad.speak()
const upset = new Class1()
upset.speak()
