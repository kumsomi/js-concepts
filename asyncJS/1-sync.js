Scenario: Synchronous code

console.log('start');
function printGreeting(username) {
    return `Hi, ${username}. How are you?`;
}
const message = printGreeting('Somi')
console.log(message);
console.log('finish');

