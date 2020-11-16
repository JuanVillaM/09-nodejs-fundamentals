// let getNombre = async() => 'Juan';

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Juan');
        }, 3000);
    });
};

let greet = async() => {
    let name = await getNombre();
    return `Hello ${name}`;
};

greet().then(message => {
    console.log(message);
});