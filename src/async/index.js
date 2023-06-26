const fnAsync = () => {
    return new  Promise((resolve, reject) => {
        // if ternario
        (true)
            ? setTimeout(() => resolve('Async!!!'),2000)
            : reject(new Error('Error!'));
    });
}

// async y await no bloquean la ejecución
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!!!')
}

console.log('Before');
anotherFn();
console.log('After');
// Output:
// Before
// After
// Async!!!
// Hello!!!