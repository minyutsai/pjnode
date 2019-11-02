class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`Меня зовут ${this.name} и мне ${this.age}`)
    }
}


// const person = {
//     name:'Minu',
//     age:32
// }


module.exports = Person;