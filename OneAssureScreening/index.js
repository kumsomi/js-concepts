// 1. Find the name which has more than 6 char and return in a array. 
// const fruits = [{name: 'Apple'}, {name: 'JackFruit'}, {name: 'Orange'}, {name: 'Guava'}, {name: 'Avocado'}];
// fruits.filter(fruit=>fruit.name.length>6)

// 2. what is the output of the code. why yes/no 
// const obj1 = {name: 'abc'}; const obj2 = {name: 'abc'}; 
// console.log(obj1 === obj2); 
// console.log(obj1 == obj2);
// Both of them are false. They are not equal to each other.
// Reason:- Objects work with the concept of references and both of them are pointing toward a different reference.

// 3. Given an array of integers, keep a total score based on the following: 
// Add 1 point for every even number in the array 
// Add 3 points for every odd number in the array, 
// except for the number "5" 
// Add 5 points every time the number "5" appears in the array 
// Note that 0 is considered even. 
// Examples Input: [1,2,3,4,5] Output: 13 -->3+1+3+1+5
// Input:[17,19,21] Output: 9 
// Input: [5,5,5] Output: 15

// const input=[1,2,3,4,5];
// input.reduce((score,curItem)=>(curItem%2==0)?score+=1:curItem==5?score+=5:score+=3
// ,0)


// 4. Compare the following objects 

//Are objects are different, write a function diff(obj,obj) which return true or false? 
//OutPUt console.log(diff(obj1, obj2)); //false 
// console.log(diff(obj1, obj3)); //true 
// console.log(diff(obj1, obj4)); //true

const obj1 = { name: 'abc' }; 
const obj2 = { name: 'abc' }; 
const obj3 = { name: 'def' }; 
const obj4 = { name: 'abc' , age : 23 } ;
function diff(obj1,obj2){
    for(key in obj1){
        if(obj2.hasOwnProperty(key)){
            if(obj1[key]!==obj2[key])
            //even if one of the property is different they are different
                return true;
            else
                return false;
        }
        return true; //--> length different difeerent
    }
}
console.log(diff(obj1,obj2));
console.log(diff(obj1,obj3));
console.log(diff(obj1,obj4));
function diff(obj1, obj2){
    for(let key in obj1){
        //checking for the same property in obj2-> if not present-> different
        if(obj2.hasOwnProperty(key)){
            if(obj1[key]!==obj2[key]){
                //if the value of those key property doesn't match-> different
                return true;
            }
            return false;
        }
        else{
            //different
            return true;
        }
    }
}
console.log(diff(obj1,obj2));
console.log(diff(obj1,obj3));
console.log(diff(obj1,obj4));



// React 1
const Parent = (props) => {
    return <div>{props.children}</div>;
  };
  const Child = () => {
    return (<div>child</div>);
  };
  ReactDOM.render(
    <Parent>
      <div>element 1</div>
      <div>element 2</div>
      <Child />
    </Parent>,
    document.getElementById('container')
  );




//   Promises
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
//   Promise {<pending>}
  fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => alert(user.name));
//   Promise {<pending>}