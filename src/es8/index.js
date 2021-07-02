//object.entries crear un array de un objeto

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

//Object.values valores de un objeto a un arreglo
const datax = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(datax);
console.log(values)
console.log(values.length)

//pading agrega cosas con el tamaño del string 

const string = 'hello';
//agrega al inicio 
console.log(string.padStart(7, 'hi'))
//agrega al final
console.log(string.padEnd(12, '-------'))

console.log('food'.padEnd(12, '-------'))


// async y await


const helloworld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}


const helloAsync = async () => {
    const hello = await helloworld();
    console.log(hello);
}

helloAsync();

//con el catch que caputa los errores

const anotherFunction = async () => {
    try {
        const hello = await helloworld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
}
anotherFunction();