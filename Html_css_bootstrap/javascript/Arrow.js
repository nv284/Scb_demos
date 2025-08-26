const person = {name:"Raj" ,age:30};
const{name,age} = person ;
console.log(name);
console.log(age);


const{name: fullname , age: years}= person;
console.log(fullname);
console.log(years);

const {city="pune"}= person;
console.log(city);

const numbers = [10,20,30];
const[a,b,c]= numbers;
console.log(a);
console.log(b);
console.log(c);

function printUser({name , age}){
    console.log(`$(name) is $(age) years old`);
}
const user = {name:'a' , age:20};
printUser(user);