const array1 = [1,2,3];
const array2 = [8,9,10];

//----------------------------
const concat = (a,b) => [...a,...b];
console.log('concat arrays', concat(array1,array2));

//----------------------------
// const concatOptional = (...rest) => rest.flat();
const concatOptional = (...rest) => rest.reduce((prev,newValue) => prev.concat(newValue));
console.log('arry multiple', concatOptional(array1,array2,[4,5,6]))