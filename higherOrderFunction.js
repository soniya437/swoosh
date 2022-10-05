// write your own find and findIndex function
// (Hint: using for loop and if else)


// ======================================================== //



const array2 = [[14, 21, 23, 64], [33, 46, 51, 65]]

//  * requirement one
//  * increment each number by one and output the resultant array using a higher order method and for loop
//  * HINT: use nesting
//  * solution =  [[15,22,24,65], [34,47,52,66]]
function outerFun(array2) {
  function innerFunc(innerElem) {
    return innerElem + 1;
  }
  const innerArray = array2.map(innerFunc);
  return innerArray;
}
const result = array2.map(outerFun);

console.log(result)


//  * requirement two
//  * from the above array, create an array of array of even numbers using a higher order method and for loop
//  * solution = [[14,64], [46]]
//  */





// ======================================================== //

const array = [23, 45, 467, 789, 34, 989, 56]

// problem => return an array such that numbers at odd idex are multiplied by 2
// and numbers at even index are multiplied by 10

const answer = array.map((element, index) => index % 2 === 0 ? element * 10 : element * 2);
console.log(answer)

// ======================================================== //
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */
const carBrands = ["honda", "toyota", "maruti", "tata"]
const carModel = ["city", "innova", "alto", "nano"]

const carObject = {}
carBrands.forEach((brand, index) => {
  carObject[brand] = carModel[index];
});
console.log(carObject);


// ======================================================== //


// Flattening
//Use the reduce method 
//to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

const arrays = [[1, 2, 3], [4, 5], [6]];

 const b =arrays.reduce((acc, curr) => {
  acc = [...acc, ...curr]
  return acc
}, [])
console.log(b)

// ======================================================== //



 const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
 // return an array with all words converted into uppercase using higher order function
  //const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
 
 
 
 
 const capitals = countries.map(item => item.toUpperCase())
 console.log(capitals)
// ======================================================== //





