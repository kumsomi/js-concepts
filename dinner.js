// Planning a menu for an italian dinner. Create a vegetarian items menu for all the vegetarian guest. Given an array of italian dishes create an unordered list of all the  vegetarian dinner options.
// Each objects contains dishname and boolean value if it is vegetarian or not
// Dynamically generate the list item in the dom from the array of vegetarian items

const dishes=[
    {
        name:"Eggplant Parmesan",
        isVegetarian:true
    },
    {
        name:"Spaghetti and meatballs",
        isVegetarian:false
    }
];
const veg=dishes.filter((item)=>
    {
        if(item.isVegetarian===true){
            return item;
        }
    }
)
console.log(veg);