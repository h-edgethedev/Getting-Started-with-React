// if (true) {
//     var first = "Javascript"
//     let second = "Typescript"
//     const third = "Node.js"
// }

console.log(first)
// console.log(second)
callMyName()
function callMyName(){
    var name = "Heritage"
    console.log(name)
}

//Var composed of other things
let age = 18
console.log(age)
// console.log(first)
// // console.log(second)
// callMyName()
// function callMyName(){
//     var name = "Heritage"
//     console.log(name)
// }

// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();

// counter()
// counter()
// counter()

const user = {
    name: "Heritage",
    skills: ["JavaScript", "React"]
};

const anotherUser = user;

anotherUser.name = "Alex";
anotherUser.skills.push("Node.js");

console.log(user.name);
console.log(user.skills);
