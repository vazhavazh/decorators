// var fac = function f(n) {
//     return (n !== 1) ? f(n - 1) * n : n;
// }

// function logResultDecorator(func, funcName) {
//     return function () {
//         var result = func.apply(this, arguments);
//         console.log(`Результат функци : ${funcName} - ${result}  `)
//         return result
//     }
// }

// function callCountDecorator(func, funcName) {
//     var count = 0
//     return function () {
//         count++;
//         console.log(`Функция ${funcName} вызвана ${count} раз`)
//         return func.apply(this, arguments);
//     }
// }

// function timeRecordDecorator(func, funcName) {
//     return function () {
//         var startTime = performance.now();

//         var result = func.apply(this, arguments);

//         var deltaTime = performance.now() - startTime;

//         console.log(`Функция: ${funcName} выполнялась - ${deltaTime} мс`)

//         return result
//     }


// }

// function cacheDecorator(func) {
//     var cache = {};
//     return function (n) {
//         if (typeof cache[n] === 'undefined') {
//             cache[n] = func.apply(this, arguments)
//         }
//         return cache[n]
//     }
// }


// var argumentsCountDecorator1 = (func, requireNumber) => {
//     return function () {
//         var argCount = arguments.length
//         if (requireNumber !== argCount) {
//             console.warn('Количество аргументов не совпадает');
//             return
//         }
//         return func.apply(this, arguments)
//     }
// }

// fac = logResultDecorator(fac, 'factorial');

// fac = cacheDecorator(fac);

// fac = callCountDecorator(fac, 'factorial');

// fac = timeRecordDecorator(fac, 'factorial')

// fac = argumentsCountDecorator1(fac, 1)



// fac(126)
// fac(126)
// fac(127)


const fac = (n) => {
    return (n !== 1)
        ? fac(n - 1) * n
        : n;
}

const fibonacci = (n) => {
    return (n > 2)
        ? fibonacci(n - 1) + fibonacci(n - 2)
        : 1;
}

const logResultDecorator = (func, funcName) => {
    return (...args) => {
        const result = func(...args);
        console.log(`Результат функци : ${funcName} - ${result}  `);
        return result;
    }
}

const callCountDecorator = (func, funcName) => {
    let count = 0;
    return (...args) => {
        count++;
        console.log(`Функция ${funcName} вызвана ${count} раз`);
        return func(...args);
    }
}

const timeRecordDecorator = (func, funcName) => {
    return (...args) => {
        const startTime = Date.now();
        const result = func(...args);
        const deltaTime = Date.now() - startTime;
        console.log(`Функция: ${funcName} выполнялась - ${deltaTime} мс`);
        return result;
    }
}

const cacheDecorator = (func) => {
    const cache = {};
    return (n) => {
        if (typeof cache[n] === 'undefined') {
            cache[n] = func(n);
        }
        return cache[n];
    }
}

const argumentsCountDecorator = (func, requireNumber) => {
    return (...args) => {
        const argCount = args.length
        if (requireNumber !== argCount) {
            console.log('Количество аргументов не совпадает');
            return
        }
        return func(...args)
    }
}



let decoratedFac = fac;
decoratedFac = logResultDecorator(decoratedFac, 'factorial');
decoratedFac = cacheDecorator(decoratedFac);
decoratedFac = callCountDecorator(decoratedFac, 'factorial');
decoratedFac = timeRecordDecorator(decoratedFac, 'factorial');
decoratedFac = argumentsCountDecorator(decoratedFac, 1) // all ok
// decoratedFac = argumentsCountDecorator(decoratedFac, 20) // Количество аргументов не совпадает


let decoratedFibonacci = fibonacci;
decoratedFibonacci = logResultDecorator(decoratedFibonacci, 'fibonacci');
decoratedFibonacci = cacheDecorator(decoratedFibonacci);
decoratedFibonacci = callCountDecorator(decoratedFibonacci, 'fibonacci');
decoratedFibonacci = timeRecordDecorator(decoratedFibonacci, 'fibonacci');
decoratedFibonacci = argumentsCountDecorator(decoratedFibonacci, 1) // all ok
// decoratedFac = argumentsCountDecorator(decoratedFac, 20) // Количество аргументов не совпадает

decoratedFac(5);
decoratedFibonacci(30);
decoratedFibonacci(30);
