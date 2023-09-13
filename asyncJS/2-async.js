
// console.log('start');
// function printGreeting(username) {
//     setTimeout(() => { return `Hi, ${username}. How are you?` },5000);
// }
// const message = printGreeting('Somi')
// console.log(message);
// console.log('finish');


// Callback --> passing function inside another function as an argument

console.log('start');
function printGreeting(username, cb) {
    setTimeout(() => { cb( `Hi, ${username}. How are you?` )},5000);
}
const message = printGreeting('Somi', (res_message) => {
    console.log(res_message)
})
console.log(message);
console.log('finish');