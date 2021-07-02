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