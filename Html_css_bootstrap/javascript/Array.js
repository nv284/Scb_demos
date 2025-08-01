let name = ["Teena" ,"rekha" ,"Maya" ,"Vibha"];
name.forEach(function (item , index , array){
   document.write(item , index);
});

let mobile = new Object();
             mobile.name1 = "Realme",
             mobile.price=400000,
             mobile.specification = new Object();


let Car = {name:"Honda" , color:"black"};

//accessing propertey 
document.write(Car.name);
document.writeln(Car['color']);

Car.brand = "Hundai";
document.write(Car.brand);

let banks = ["sTandarD" , "CharTered" , "bank"] ;
let uppercase = banks.map(function(item){
  return item.toUpperCase();
});

console.log(uppercase);
