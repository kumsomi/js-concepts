// "this" in javascript
// --------creating an object and using this------
// let user={
//     name:"john",
//     age:30,
//     // f:sayHi(){...}
// };
// function sayHi(){
//     console.log(this.name);
// }
// user.f=sayHi; //--> passing the entire function declaration
// user.f(); //--> calling the function-> "john"



// function makeUser(){
//     //by default this=undefined
//     return {name:"oli", ref:this};//returning an object
// }
// let u=makeUser();
//object is passed to the u variable and not the function

// u-> {name:oli, ref: all the properties of "this" keyword}
// u.name-> oli
// u.ref-> all the functionalities of "this" keyword 
// u.ref.name-> undefined --> because rules that set this do not look at object definition. Only the moment of call matters.
// This is called as a function and not as an object with dot operator. 
// Value of this is one for the whole function. Code blocks and object literals do not affect it.

// function makeUser(){
//     return this;
// }

// console.log(u.ref.name);




function makeUser(){
    //by default this=undefined
    return {
        name:"oli", 
        ref(){
            return this;
            // return "name";
        }
    };
}
let u=makeUser();
console.log(u.ref());