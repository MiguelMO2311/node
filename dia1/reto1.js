const index = require('date-fns')

// reto 1.+++++

console.log('Mensaje 1');

setTimeout(function () {
    console.log('Mensaje 2');
    setTimeout(function () {
        console.log('Mensaje 3');
    })
}, 3000)