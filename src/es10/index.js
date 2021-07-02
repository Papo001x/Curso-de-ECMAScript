//array.flat creo que sirve para destapar los otros array para volverlos 1 
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2))

//operar cualquier valor dentro de un array, 
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

let hello = '                    hello world';

console.log(hello);
//eliminar los espacions con trimstart que quita los espacios al inicio del texto
console.log(hello.trimStart())
//elimina los espacios de cualquier string al final
let hello = 'hello world          ';
console.log(hello);
console.log(hello.trimEnd())


//antes
try {
    
} catch (error) {
    error
}

//es10 no tenemos que pasar el parametro error sino que se pone automaticamente

try {
    
} catch {
    error
}

//nos crea un objeto apartir de un array
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//acceder a la descripcion de un objeto 
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);