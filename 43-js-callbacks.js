// console.log("output 1");

// setTimeout(() => {
//     console.log("output 2");
// }, 1000);

// console.log("output 3");

// console.log("output 5");
// console.log("output 1");

// const getFun = () => {

//     setTimeout(() => {
//         return { message: "fun meesage" };
//     }, 2000);
// }

// const fun = getFun();

// console.log(fun.message); //  depends on output  2

// problems in asynchronous programming 
// console.log("output 1");
// const getFun = () => {
//     setTimeout(() => {
//         return { message: "fun meesage" }; // react to spring boot 
//     }, 2000);
// }
// // TypeError: Cannot read property 'message' of undefined
// const fun = getFun();
// console.log(fun.message); //  depends on output  2

// solution 1. - use callback 

// console.log("output 1");
// const getFun = (abc) => {
//     setTimeout(() => {
//         abc({ message: "fun meesage" }); // callback 
//     }, 2000);
// }

// const funCall = (arg) => {
//     console.log(arg.message);
// }

// // success 
// getFun(funCall);
console.log("output 1"); // 1 

const getFun = () => {  // 3
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = false; // true / false  
            if (err)
                reject();
            else
                resolve({ message: "fun meesage" });
        }, 2000);
    });
}

getFun().then((obj) => {
    console.log(obj.message);
}).catch(() => {
    console.log("Error...");
});
// console.log("output 1");
// const empDetails =() =>{
//     return new Promise((resolve,reject ) =>{
//         setTimeout(() => {
//             const err = true;
//             if(err)
//               reject();
//               else
//                 resolve({ message:"employee details"});
//         }, 2000);
//     });
// }

// empDetails().then((obj) =>{
//     console.log(obj.message);
// }).catch(() => {
//     console.long("Error...");
// });




