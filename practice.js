// let myFunction =(x,y)=>{
//     return x*y;
// };
// console.log(myFunction(2,3))

// const person={
//     firstName:"Maheshwar",
//     lastName:"Pathak",
//     age:21,
//     eyecolor:"blue"
// };
// let{firstName,age}=person;
// console.log(age+","+firstName)

// const fruits=["Apple","Banana","Orange","Mango"]
// let [fruits1,fruits2]=fruits
// console.log(fruits1+","+fruits2)

// const numbers=[21,22,24,26];
// let minValue=Math.min(...numbers);
// let maxValue=Math.max(...numbers);
// console.log(minValue+","+maxValue);

// const q1=["jan","feb","march","april"];
// const q2=["may","june","july"];
// const q3=["august","september","october"];

// const year=[...q1,...q2,...q3];
// console.log(year);

// const user={
//     fname:"Saharsh",
//     lname:"Singh",
//     address:{
//         city:"Ghaziabad",
//         country:"India"
//     }
// };
// let a = user.fname
// console.log(a)
// let b=user.address.city
// console.log(b)
// let{fname:fn,lname:ln,address:{city,country}}=user
// console.log(fn,ln)
// console.log(city)

// let number=[1,2,3,4,5]
// let [a,b,c,,d]=number
// console.log(d)

// const color=["Red","Yellow","Green"]
// let [a,,c]=color
// console.log(c)

//Important
// const student={
//     name: "Saharsh",
//     age:20,
//     city:"Ghaziabad"
// };
// function showStudent({name,age,city}){
//     console.log("Name:",name)
//     console.log("Age:",age)
//     console.log("City:",city)
// }
// showStudent(student)

// const student={
//     id:2254,
//     name:"Saharsh",
//     course:"Web technologi",
//     address:{
//         city:"Lucknow",
//         country:"India"
//     },
//         marks:[10,25,35,48],
//         admiSt:"yes"
//     };
// function displayData({id,name,course,address:{city,country},marks}){
//     console.log("Id:",id)
//     console.log("name:",name)
//     console.log("course:",course)
//     console.log("city:",city)
//     console.log("country:",country)
//     console.log("Marks:",marks)
//     let [a,b,c,d]=marks
//     let avg=(a+b+c+d)/marks.length
//     console.log("Avg Marks:",avg)
//     if(avg>=80 && admiSt==="yes"){
//         console.log("eligibal for merit scholorship")
//     }else
//         console.log("Regular admission")
// }
// displayData(student)

//wap in js to compare between three numbers using anonymous function
// let myFunction =(x,y,z)=>{
//       if(x>y && x>z){
//         console.log(x)
//       }else if(y>x && y>>z){
//         console.log(y)
//       }else{
//         console.log(z)
//       }
//  }; 
// myFunction(5,20,15)
//wap to find sum of sqr of all given even number
// let a=(arr)=>{
//     let sum=0
//     let even=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             sum+=arr[i]*arr[i]
//             even.push(arr[i])
//         }
//     }
//     console.log(sum)
//     console.log(even)
// };
// let arr=[20,15,40,10,7]
// a(arr)

// const numbers=[21,22,24,26];
// let minValue=Math.min(...numbers);
// let maxValue=Math.max(...numbers);
// console.log(minValue+","+maxValue);

// oldarr=[2,3,4,6,7]
// newarr=["Ram","Shayam",...oldarr,8,9]
// console.log(newarr)

// function add(a,b,c){
//     return a+b+c
// }
// numbers=[2,4,6,8]
// console.log(add(...numbers))

// const csStudent=["Akash","vikas","Ramesh"]
// const itStudent=["Akhilesh","Maheshwar","Rudra"]
// const allStudent=[...csStudent,...itStudent]
// console.log(allStudent)

// const sum=(...num)=>{
//     add=0
//     console.log(num)
//     num.forEach((n)=>{
//         add+=n
//     })
//     console.log(add)
// }
// sum(1,2,3,4,5,6,7,8,9,10,11)

// function showDetails(name,...skills){
//     console.log(name)
//     console.log(skills)
// }
// showDetails("Maheshwar","java","CPP","JavaScript")

// const originalObj={
//     id:1243,
//     name:"Maheshwar",
//     course:"Js"
// };
// const updateObject={
//     ...originalObj,
//     course:"Java",
// };
// console.log(updateObject)
// console.log(originalObj)

// function greet(Name="Pathak"){
//     console.log("Hello" +Name)
// }
// greet("Maheshwar")
// greet()

// let marks=[80];
// let [math=0,science=0]=marks;
// console.log(math);
// console.log(math);
// console.log(science)

// let data=[0,null]
// let [a=10,b=20]=data
// console.log(a)
// console.log(b)

let product={
    name:"laptop"
};
let {name,price=0}=product
console.log(name)
console.log(price)

