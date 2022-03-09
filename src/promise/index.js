const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Hey, we did it!');
        } else {
            reject('We dont did it  :c!');
        }
    });
};

somethingWillHappen()
    .then( response => console.log(response))
    .catch(err => console.error(err));

const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (false){
            setTimeout(() => {
                resolve('True'); 
            }, 2000);
        }else {
            const error = new Error('Upps'); 
            reject(error); 
        }
    })
}

someThingWillHappen2()
    .then(response => console.log('True'))
    .catch(err => console.log(err));
    

// De esta manera podemos correr promesas al mismo tiempo, de manera seguida
Promise.all([somethingWillHappen(), someThingWillHappen2()])

    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err);
    })