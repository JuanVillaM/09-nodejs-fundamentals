// setTimeout(() => console.log('Hello World'), 3000);

getUserById = (id, callback) => {
    user = {
        name: 'Juan',
        id
    };

    if (id === 20) {
        callback(`There are not user with id ${ id } in the data base`);
    } else {
        callback(null, user);
    }

};
getUserById(1, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('User', user);
});