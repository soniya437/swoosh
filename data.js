// 1. Print all even numbers in first 50 natural number

// for(i = 1; i<=50 ; i++){
//     if(i % 2 ==0){
//     console.log(i)
//     }
// }

// 2. print all odd numbers in natural numbers from 20 to 50

// for(i = 20; i<=50; i++){
//     if(i%2 !=0){
//         console.log(i)
//     }

// }

// 3. print all numbers that are divisible by 5 
// let array =   [12, 45, 67, 89, 90, 34, 35, 55]

// for(i=0; i<array.length; i++){
//     if(array[i]% 5 == 0){
//         console.log(array[i])
//     }
// }

//4. Print all numbers of this array
const pp= [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];

for(i=0;i<pp.length;i++){

     for(j=0;j<pp[i];j++){
        
        console.log(pp[i][j])
    }
}

// 5.Print all prime numbers occurring in 1st 50 natural numbers

// for (let n = 2; n <= 50; n++) {

//     let isPrimeNumber = true;

//     for (let d = 2; d < n; d++) {
//         if (n % d === 0) {
//             isPrimeNumber = false;
//             break;
//         }
//     }

//     if (isPrimeNumber) {
//         console.log(n);
//     }

// }


