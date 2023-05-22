const person = {
    name: 'adriel',
    age:36
}

const clone =  (source) => ({...source});
 
const newPerson = clone(person);
console.log(newPerson)
