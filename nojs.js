const fetchdata = new Promise((resolve,reject)=>{
    let data =[{ id: 1,name:"rahul", age:22},
               {id:2,name:"ajay",age:23},
               {id:3,name:"jaya",age:24},
               {id:3,name:"rohan",age:25}];
    setTimeout(() =>{
        resolve(data);
    },3000);
}); `       `
fetchdata
.then((data)=>console.log(data))
.catch((err)=>console.log("data not "+err));
