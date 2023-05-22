const myArray = [1,2,3];

//----------------------------------------

const head = ([first]) =>  first;
console.log('first element', head(myArray));

//----------------------------------------

const tail = (...rest) =>  rest[rest.length-1];
console.log('last element', tail(1,2,3));

//----------------------------------------
const init = (array) => {
    const arrayCopy = new Array(...array);
    return arrayCopy.splice(0,arrayCopy.length-1);
};
console.log('all except the last one', init(myArray));

//----------------------------------------

const last = (array) => array.slice(-1);
console.log('last element', last(myArray))

