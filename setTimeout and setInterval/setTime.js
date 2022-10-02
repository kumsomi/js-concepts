// Set timeout is used to schedule a piece of code to execute it certain time later.
// Set timout:- run a function once
// Set interval:- run a function after every interval of time

// syntax
// let timer=setTimeout(func, delaytime, args1, arg2);

const sayHi=(...arg)=>{
    console.log("hi"+ arg)
}

let name="somi";
let timer =setTimeout(sayHi, 5000, name);
// arrow function
// let time2=setTimeout(()=>console.log("Hi there"),5000);

const sayHI=(name)=>{
    return name;
}

// Pass a function
//let time=setTimeout(sayHI(), 1000, "somi");
// this is wrong as setTimeout expects a reference to a function. 



// Canceling the timeout
// clearTimeout(timer);


// set Interval
// let timerset=setInterval(sayHi, 2000, "somi");

// To break it- stopping after 10 secs
// setTimeout(()=>{
//     clearInterval(timerset); 
//     console.log("stop")}, 10000
// )


// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.
let i=1;
const func=(i)=>i+1;
setTimeout(function run(){
    func(i++);
    setTimeout(run, 100);
}, 100);
