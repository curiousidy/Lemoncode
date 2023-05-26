//Clone
const person = {
    name: 'adriel',
    age:36
}

const clone =  (source) => ({...source});
 
const newPerson = clone(person);
console.log(newPerson)

//Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({...target,...source})

console.log(merge(a,b));

