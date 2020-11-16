console.log('Inicio del Programa');
setTimeout(function() {
    console.log('Primer Timepout');
}, 3000);
setTimeout(function() {
    console.log('Segundo Timeout');
}, 0);
setTimeout(function() {
    console.log('Tercer Timeout');
}, 0);
console.log('Fin del Programa');