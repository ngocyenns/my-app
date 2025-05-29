


//primitive: number, boolean, string...
// reference: object, array, function

// let number1 = 10;
// let number2 = number1;
// number1 = 100;
// console.log(number2);


// let obj1 = {
//     fullname: "Nguyen Van A",
//     age : 20
// };
// let obj2 = obj1;
// console.log(obj1 === obj2);

// obj1.fullname = "B";
// console.log(obj1 === obj2);



// let list1 = ['A', 'B', 'C'];
// let list2 = list1;
// list1[0] = '123';
// console.log(list2[0]);
// let list3 = list2;

// list1 = ['E', 1, 3];

// console.log(list3);


// let list = [
//     1,
//     2,
//     {name: 'A', age: 20},
//     {name: 'B', age: 19}
// ];

// var a = {
//     name : 'ABC'
// };

// function change(value){ 
//     value.name = 'DEF';    
// }

// change(a);
// console.log(a.name);



// let , const -- var : scope, hosting 
// const - let, var : assignment (gán lại biến)

//code block : {}, if-else, loop
//hosting - var duoc ho tro
//var a; a = 1;  

// const a = {
//     name : 'Js'
// };
// a = 'React';
// console.log(a);

// const sum = () => {

// };
// const sum = () => 10; // return 10;

// rest parameter

// const sum = (a,b,...params) => {
//     console.log(params);
// };

// sum(10, 20, 30);

//  spread operator

// const obj = {
//     fullname : 'Nguyen A'
// };
// const obj3 = {
//     address: 'Vinh Long'
// };
// const obj2 = {
//     ...obj,
//     fullname : 'Nguyen B',
//     age : 30,
//     ...obj3  
// }
// console.log(obj2);

// const list = [1,3,4];
// const list2 = [1,...list,'a', 'b'];
// console.log(list2);

//destructuring 
const arr = ['A',[4, 'C'] , 3];
const [a,[b]] = arr;

const obj = {
    name : 'ABC',
    age : 19
};

const {name : fullname, age} = obj;   // fullname = obj.name