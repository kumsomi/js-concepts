class movie{
    constructor(title, director, genre, release_year, rating){
        this.title=title;
        this.director=director;
        this.genre=genre;
        this.release_year=release_year;
        this.rating=rating;
    }
    overview(){
        console.log(`${this.title}, a ${this.genre} film directed by ${this.director}  was released in ${this.release_year}. It received a rating of ${this.rating}`)
    }
}
const m1= new movie("yjhd","sanjay leela bhansali","funny", "2018", "5" );
m1.overview();
