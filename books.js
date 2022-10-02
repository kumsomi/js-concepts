class books{
    constructor(title, author, ISBN, numCopies){
        this.title=title;
        this.author=author;
        this.isbn=ISBN;
        this.numCopies=numCopies;
    }
    
    getAvailability(){
        if(this.numCopies<=0){
            return "Out Of Stock";
        }
        else if(this.numCopies<10){
            return "Low Stock";
        }
        else{
            return "In Stock";
        }
    }
    //getter
    get availability(){
        this.availability(); 
        //instead of book.getAvailability we can write this.getAvailability inside getter
    }
    //sell method
    sell(numSold=1){
        this.numCopies=this.numCopies-numSold;
        return this.numCopies;
    }
    restock(num_of_Copies=5){
        this.numCopies=num_of_Copies+this.numCopies;
    }
}

const book1= new books("harry potter","JK Rowling",1239967,10);
console.log(book1);
console.log(book1.availability());
book1.restock(59);
book1.sell(100)
console.log(book1.availability());