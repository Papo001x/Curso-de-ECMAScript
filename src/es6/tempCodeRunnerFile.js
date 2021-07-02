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
