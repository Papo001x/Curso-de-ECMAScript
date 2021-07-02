function newFunction(namez, age, country){
    var namez= name || 'oscar';
    var age = age || 32;
    var coutry = country || 'MX';
    console.log(namez,age,country)
}
//EM6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "hellow";
let world = "World";
//antes
let epicphrase = hello + ' ' + world;
console.log(epicphrase);
//ec6
let epiphrase2 = `${hello} ${world}`
console.log(epiphrase2)
//antes
let lorem = 'esto es una frase x que pidieron en la clase \n' + 'otra frase epica que necesitamos'
//ec6
let lorem2 = ` otra frace epica que necesitamos 
ahora es otra frase epica`
console.log(lorem)
console.log(lorem2)


let person = {
    'name': 'oscar',
    'age': '32',
    'country':'MX'
}

//antes
console.log(person.name, person.age);

//ec6
let { name, age, country } = person;

console.log(name, age, country);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria','Yesica','Camila']

//ec6
let education = ['David', ...team1, ...team2]
console.log(education)

//let solo esta disponible en el bloque de codigo donde fue definido

{
    var globalvar = 'Global var';
}

{   
    let globallet = 'Global let';
    console.log(globallet)
}

console.log(globalvar)
console.log(globallet)

//las constantes son fijas y no se puede cambiar 

const a = 'b';

a = 'a';


let names = 'brandon';
let age = 22;

//antes
obj = { names: names, age: age };
//ec6
obj = { names, age };
console.log(obj2);

const mames = [
    {name:'Oscar',age:32}, {name:'david',age:42}
]

//antes
let listOfNames = mames.map(function (item) {
    console.log(item.name);
})
//ec6
let listOfNames2 = mames.map(item => console.log(item.name));
const listOfNames3 = (mame, age, country) => {
    
}
const listOfNames4 = mame => {
    
}


const square = num => num * num;

//promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    

//clases

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//modulos
import { hello } from './module';

hello();


//generator

function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHellow = helloWorld();
console.log(generatorHellow.next().value)
console.log(generatorHellow.next().value)
console.log(generatorHellow.next().value)
