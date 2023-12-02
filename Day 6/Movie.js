// a) Movie class with constructor
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
// b) Constructor sets the rating to "PG" by default

// c) Method to filter movies with rating "PG"

function getPG(moviesArray){
    const pgMoviesArray=[];
    for(let i=0;i<moviesArray.length;i++){
        if(moviesArray[i].rating=="PG"){
            pgMoviesArray.push(moviesArray[i]);
        }
    }
    return pgMoviesArray;
}

// d) Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of Movie instances
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG"),
];

// Filtering movies with rating "PG"
const pgMoviesArray = getPG(moviesArray);

console.log(casinoRoyale);
console.log(pgMoviesArray);
