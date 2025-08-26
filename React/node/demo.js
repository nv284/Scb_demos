const user = {name :'Alice' , age:30};

const jsonStr = JSON.stringify(user);//{"name":"Alice","age":30} ---json string 

const jsonPars = JSON.parse(jsonStr); // {name :'Alice' , age:30}; --- javascript object 

console.log(jsonPars.name);
console.log(jsonStr);