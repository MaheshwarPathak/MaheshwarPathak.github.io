// document.writeln("Hello")//browser ke liye
// console.log("hello")// terminal ke liye

// var a=10;
// function show(){
//     console.log(10)
// }
// show()

// function varTest(){
//     if(true){
//         let a=10
//     }
//     console.log(a)
// }
// varTest()

// let a=10;
// a=20
// console.log(a)

// const student={name1:"Maheshwar"}
// console.log(student.name1)
// const student={name2:"manish"}
// console.log(student.name2)


// const student={
//     name1:"Maheshwar",
//     greet:function(){
//         console.log("Hello, my name is "+this.name1)
//     }
// }
// student.greet()

// let age="Manish"
// age="Rudra"
// console.log(age)

// const PI=3.14

// for(let i=0;i<4;i++){
//     console.log(i)
// }


// function outer(){
//     let a=10
//     function inner(){
//         console.log(a)
//     }
//     inner()
// }
// outer()

// function outer(){
//     let a=10
// }
// function inner(){
//     console.log(a)
// }
// inner()
// outer()

// let a=5
// function outer(){
//     let b=10
//     function inner(){
//         let c=15
//         console.log(a,b,c)
//     }
//     inner();
// }
// outer()

// let a=3
// let flag=0
// for( let i=2;i<a-1;i++){
//     if(a%i==0){
//         flag=1
//     }

// }
// if(flag==1){
//     console.log("Prime Number")
// }else{
//     console.log("Not a prime")
// }

// const stu_marks=[10,25,5,30,40]
// let min=stu_marks[0]
// for(let i=0;i<stu_marks.length;i++){
//     if(stu_marks[i]<min){
//         min=stu_marks[i];
//     }
// }console.log(min)

// let marks=[];
// let n=Number(prompt("Enter student marks"));

// for (let i = 0; i < n; i++) {
//     marks[i] = Number(prompt(`Enter marks of student ${i + 1}`));
// }
// let min=marks[0]
// for(let i=0;i<marks.length;i++){
//     if(marks[i]<min){
//         min=marks[i];
//     }
// }
// alert(min)


//Templete Literals
// let fname="Akash"
// let lname="Goel"
// console.log(`hello my name is ${fname} ${lname}`)

// let msg=`Hello Dear Students
// welcome to the class of js
// Focus on your topics`
// console.log(msg)

// const add=function(a,b){
//     return a+b;
// } 
// console.log(add(2,3))

// let add=(a,b)=>a+b
// console.log(add(2,3))

// let a =10
// let b=20
// console.log(`The sum of ${a} and ${b} is ${a+b}`)

// const obj={
//     name:"Akash",
//     age:35,
//     Welcome:function(){
//         console.log("My name is",this.name,obj.age)
//         console.log(this)
//     }
// };
// obj.Welcome()
// obj.name="Vikas"
// obj.Welcome()
 

// function abc(){
//     name1="Akash"
//     console.log(this.name1)
// }
// abc()

// "use strict"
// function abc(){
//     a=10//let a=10 not run
//     console.log(this.a)
// }
// abc()

//this keyword are use only for object not function
//  let add=(a,b)=>a+b
//  console.log(add(2,3))

// let add=(a,b)=>({name:"Akash"})
// console.log(add(2,3))

// const obj={
//     name:"Rahul",
//     normalFn:function(){
//         console.log("Normal:",this.name)
//     },arrowFn:()=>{
//         console.log("Arrow:",this.name)
//     }
// };
// obj.normalFn()
// obj.arrowFn()

// const obj={
//     name:"rahul",
//     showname:function(){
//         const arrowFn=()=>{
//             console.log("Arrow:",this.name)
//         }
//         arrowFn();
//     }
// };
// obj.showname();

console.log("Calculator");

let a = Number(prompt("Enter the num1: "));
let b = Number(prompt("Enter the num2: "));
let op = prompt("Enter the operation (+, -, *, /): ");

let calculator = function (a, b, op) {
    switch (op) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;

        default:
            return "Invalid operation";
    }
};

let result = calculator(a, b, op);
console.log("Result:", result);
