
const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //


    let value2=cardData.value;
       let suit2=cardData.suit;
       findCard(10,"club")
       getSuits(cardData)
  
    //    getSuitValues(cardData)
   
   function findCard(value2, suit2) {
     if(value2==7&&suit2=="heart"){
       console.log(true)
     }else if((value2==2)||(value2 ==5)&&suit2=="diamond"){
        console.log(true)
      }
     else if((value2==10)||(value2==2)||(value2 ==8)&&suit2=="club"){
       console.log(true)
     }else{
        console.log(false)
     }
   }

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


// 2. write a function which returns the list of available suits in the above data
 //ans => ["heart", "club", "diamond"]
 function getSuits(cardData) { 
    // write your code here
    let card =[]
    for(var i=0;i<cardData.length;i++){
        card=cardData[i].suit
        console.log(card)
    }
}

// ================================================ 3 =============================================== //
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/
function getSuitCount(cardData) {
    // write your code here
    let c,d,a= cardData;
    for(var i=0;i<cardData.length;i++){
        if(cardData[i].suit=="heart"){
            c++;
            console.log(c)
        }else if(cardData[i].suit=="club"){
            d++
            console.log(d)
        }else if(cardData[i].suit=="diamond"){
            a++;
            console.log(a)
        }
    }
}
getSuitCount(cardData)
// ================================================= 4 ============================================== //


/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/
// function getSuitValues(cardData) {
//     let a="";
//     let b ="";
//     let c="";
//   for(var i=0;i<cardData.length;i++){
//     let value=cardData[i].value;
//     let suit=cardData[i].suit;
//     if(suit=="heart"){
//         console.log("heart:",[a+=value])
//     }else if(suit=="diamond"){
//         console.log("diamond",[b+=value+" "])
//     }else if(suit=="club"){
//         console.log("club",[c+=value+" "])
//     }
//   }
    
// }
function getSuitValues() {
    const resultObject = {}
for(i=0; i<cardData.length;i++){

    const cardDetails = cardData[i]

    if(cardDetails.suit === "heart"){

        if (resultObject.heart){
            resultObject.heart.push(cardDetails.value)
        }else{
            resultObject.heart =[]
            resultObject.heart.push(cardDetails.value)
        }
    }else  if(cardDetails.suit ==="club"){
        
        if(resultObject.club){
            resultObject.club.push(cardDetails.value)
        }else{
            resultObject.club =[]
            resultObject.club.push(cardDetails.value)
        } 
    }else{
        if(resultObject.diamond){
            resultObject.diamond.push(cardDetails.value)
        }else{
            resultObject.diamond=[]
            resultObject.diamond.push(cardDetails.value)
        }
    }
}
}





getSuitValues(cardData)
