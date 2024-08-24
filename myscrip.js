
// const myArray = [20,500,478,650,200,3210,78,15,980,579,200];

// let maxnumber = myArray[0];

// for ( let number of myArray){

//     if( maxnumber< number){     
//         maxnumber=number;
//     }

// }


// function maxnumberdetector( newMyArray){

//     // if( Array.isArray(newMyArray)==false){
//     //   return "Please Enter A Array of Numbers" ;
//     // }
// if( typeof newMyArray !=="number"  && Array.isArray(newMyArray)==false ){
//  return "Please Enter Number Value In A Array";
// }
//     let maxnumber=newMyArray[0];
//     for ( let number of newMyArray){
//         if(maxnumber>number){
//             maxnumber=number;
//         }
//     }
// return maxnumber;
// }
//  let newMaxNumber= maxnumberdetector(myArray);
//  console.log(newMaxNumber);


// 100 hola  100 
// 150 hola  - 90 
// 200 hola -  80 



// function discount(num1, num2, num3) {
//     let prizenone = 100;
//     let Prizetwo = 90;
//     let prizethree = 80;

//     let NewPrize1;
//     let NewPrize2;
//     let NewPrize3;

//     if (num1 <= 100) {
//         NewPrize1 = num1 * prizenone;
//     }
//     if ( num2 <= 200) {
//         NewPrize2 = num2 * Prizetwo;
//     }
//     if ( num3 ) {
//         NewPrize3 = num3 * prizethree;
//     }

//     return 'fristPrize'+' '+NewPrize1 +' Secound Prize '+ ' ' +  NewPrize2 + ' ThirdPrize' + ' ' + NewPrize3 ; 
// }
// let TotalPrize = discount(100, 190, 250);
// console.log(TotalPrize);


// let phones= [
//      {  Name: "Samsung" , Prize:5000 , Brand:" Midiam" },
//      {  Name: "Iteal" , Prize:500001 , Brand:" Midiam" },
//      {  Name: "Readme" , Prize:500020 , Brand:" Midiam" },
//      {  Name: "IPHone" , Prize:5000000 , Brand:" Midiam" },
//      {  Name: "vivo" , Prize:120000 , Brand:" Midiam" }
//     ];
//     let sum = 0 ;
//     for( let phone of phones){
//         sum +=phone.Prize;
//     }
//     console.log(sum);
// 100 ar vitor 100 hoba
// 101 to vitor 200 - 90 hoba 
// 200 ar upora hola- 70 hoba 

// function LayerDiscount( numb1 ){
//     let fristPrize = 100;
//     let SecoundPrize = 200;
//     let ThirdPrize = 300;

//     let DiscountAmount;

//    if( numb1<=100 ){
//     DiscountAmount = numb1 * 100;
//    }

//    if(numb1 <= 200 ){
//     let  diffarentPCS= numb1-100;
//     let diffarentAmount = diffarentPCS*70;
//     let oldtpcs = numb1-diffarentPCS;
//     let oldtAmount = oldtpcs * 100;
//        DiscountAmount=diffarentAmount+oldtAmount;
//     return DiscountAmount;
//    }

//    if(numb1 <= 300 ){
//    let  diffarentPCS= numb1-100;
//    let  diffarentAmount = diffarentPCS*70;
//    let  oldtpcs = numb1-diffarentPCS;
//    let  oldtAmount = oldtpcs * 100;
//     DiscountAmount=diffarentAmount+oldtAmount;
//     return DiscountAmount;
//    }

// }

//   let discout=LayerDiscount(190);
//   console.log(discout);


// function Add(a, b) {
//     Result = a + b;
//     return Result;
// }
// function subT(a, b) {
//     Result = a - b;
//     return Result;
// }

// function multiple(a, b) {
//     Result = a * b;
//     return Result;
// }

// function MyCaculator(a, b, nameOfFunction) {

//  if( typeof a !== 'number' ){
//        return "Please Enter Numaric Number and Funtion Name is string";
//     }
//     else if( typeof b !== 'number'){
//         return "Please Enter Numaric Number and Funtion Name is string";
//     }
//     else if( typeof nameOfFunction !== 'string'){
//         return "Funtion Name is string";
//     }
//     if (nameOfFunction == "Add") {
//         let result = Add(a, b);
//         return result;
//     }
//     if (nameOfFunction == "subT") {
//         let result = subT(a, b);
//         return result;
//     }
//     if (nameOfFunction == "multiple") {
//         let result = multiple(a, b);
//         return result;
//     }
// }
// let myAllResult = MyCaculator(500, 400, "multiple");
// console.log(myAllResult);


// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const isLipi = isLeapYear(2052);
// console.log(isLipi);



// function isLearYear2(year) {
//     if (year % 100 !== 0 && year % 4 === 0) {
//         return true;
//     }
//     else if (year % 400 === 0) {
//         return true
//     }
//     else {
//         return false;
//     }
// }



const date = new Date('2062-10-19')
console.log(date.getDate());
// console.log(date.getDay());
// const specificDate = new Date(2091, 0, 26)
// console.log(specificDate)
// specificDate.setMonth(10);
// console.log(specificDate.toLocaleString('en-GB'));



const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 