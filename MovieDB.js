var movie = function(title, rating, hasWatched) {
    
        this.title = title;
        this.rating = rating;
        this.hasWatched = hasWatched;
    
}
var movieDB = [
    {
        title: "Star Trek",
        rating: 5.0,
        hasWatched: true
    },
    {
        title: "Mad Max Fury Road",
        rating: 4.0,
        hasWatched: true
    },
    {
        title: "Shikki Mikki",
        rating: 5.0,
        hasWatched: false
    }
];
function movieDBShow(array) {
    for (const obj of array) 
    {
        if(obj.hasWatched) {
            console.log(`You have watched "${obj.title}" - ${obj.rating} stars`);
        } else {
            console.log(`You have not seen "${obj.title}" - ${obj.rating} stars`);
        }
    }
  }

  movieDBShow(movieDB);