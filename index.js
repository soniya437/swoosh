

// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']

// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// //  const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
// // remove first element from places array and print the remaining array
// const [a,...d] = places
// console.log(d)

//2.
// insert that element at the start of the morePlaces array and print the new array

// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// morePlaces.unshift('delhi')
// const [a,...rest] = morePlaces
// console.log(morePlaces)



// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]


// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']

// const [a,...rest] = morePlaces
// const [first,sec,third,...rest2] = places
// const newArray =  [first,sec,third]
// const finalArray = [...rest,...newArray]
// console.log(finalArray)


// const myData = {
//     name: "Rahul",
//     age: 20,
//     gender: "male",
//     address: {
//       pinCode: 123455,
//       city:"delhi"
//     },
//     likes:["music", "movies"]
//   }
  
// 4.
// destructure and store pincode into a variable named myPincode

// const myData = {
//     name: "Rahul",
//     age: 20,
//     gender: "male",
//     address: {
//       pinCode: 123455,
//       city:"delhi"
//     },
//     likes:["music", "movies"]
//   }

//   const {pinCode:myPincode=123455} = myData
  
//   console.log(myPincode);
    
5.
//destructure and store second like into a vaiable named myLike
// const myData = {
//     name: "Rahul",
//     age: 20,
//     gender: "male",
//     address: {
//       pinCode: 123455,
//       city:"delhi"
//     },
//     likes:["music", "movies"]
//   }
//   let{likes}=myData
//   let[p,q]=likes
//   let myLike=q
//   console.log(myLike);







