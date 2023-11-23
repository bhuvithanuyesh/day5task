// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, 
//and sets the respective class properties to these values.


class movie{

    constructor(title,studio, rating){

        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
//getter function
getstring(){
    return `${this.title} has ${this.rating} rating`;
}
//setter function
setstring(rating){
    this.rating = rating;
}
}
const  film = new movie("pathan", "yashraj","pg");
console.log(film);

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie{

    constructor(title,studio, rating="pg"){

        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const  film = new movie("pathan", "yashraj");
console.log(film);


//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
// You may assume the input array is full of Movie instances. The returned array need not be full.

class movie{

    constructor(title,studio, rating){

        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
getPG(movie){
return movie.filter((v)=>v.rating == "pg" )

}


}
class film extends movie{
    constructor(title, studio, rating){
        super(rating)
        this.title= title;
        this.studio = studio;
        
    }
}
const filmno1 = new film("leo","sevenscreenstudio","pg");
const filmno2 = new film("pathan", "Yashraj","pg13");
const filmno3 = new film ("javan", "yashraj","R");
let array =[filmno1, filmno2,filmno3];

console.log(array.getPG([filmno1. filmno2,filmno3]));
    



//d Write a piece of code that creates an instance of the class Movie 
//with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");