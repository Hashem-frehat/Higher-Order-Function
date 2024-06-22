let arr = [1,2,3,4,5,6,7,8,9];

// function ret(out){
// for(let i =0;i<out.length; i++){
//     console.log(2**out[i]);
// }
// }

// ret(arr);
// function ret(out){
// let x = out.map(e => Math.pow(2,e));
// return x;
// }
// console.log(ret(arr));


// let z = []
// arr.forEach(e =>
//   z.push( 2 **e)
// )
// console.log(z);

// ex2-----------------------------------------
// let x = [1,2,3,"rawan","mohammed",6];

// function hashem (ret){
//     return ret.map(el => {
//         if (typeof el !== 'number'){
//             return "n/a";
//         }
//         else if( el % 2 === 0){
//             return "even";
//         }
//         else{
//             return "odd";
//         }
//     }
//     )

// }

// console.log(hashem(x));


// ex3--------------------

// let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// names.forEach(ele =>{
//     console.log(ele);
// })

// ex4-----------------------------

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let a = [];

num.forEach(el =>{
if (el % 3 ===0 && el % 5 ===0){
a.push(`${el}fizzbuzz`);
}
else if(el % 5 ===0){
    a.push(`${el}buzz`);
}
else if (el % 3 ===0){
    a.push(`${el} fizz`);
}


})

alert(a);