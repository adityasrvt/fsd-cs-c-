/*console.log("start");
setTimeout(() => {
    console.log("1st");
setTimeout(() => {
    console.log("2nd");
setTimeout(() => {
    console.log("3rd")
},3000);
},2000);
},1000);*/

const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("data send success");
    } else {
        reject("data not send");
    }

});