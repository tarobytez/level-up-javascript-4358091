// Movie Class Creation
class Movie {
  constructor(movie, genre, director, releaseYear, rating) {
    this.movie = movie;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  get overview() {
    return this.getOverview();
  }

  getOverview() {
    return `${this.movie}, a ${this.genre} film, directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const KnivesOut = new Movie(
  "Knives Out",
  "who-dunnit",
  "Rian Johnson",
  2019,
  "10/10"
);

const GlassOnion = new Movie(
  "Glass Onion: A Knives Out Mystery",
  "who-dunnit",
  "Rian Johnson",
  2021,
  "7/10"
);

const WakeUpDeadMan = new Movie(
  "Wake Up Dead Man: A Knives Out Mystery",
  "who-dunnit",
  "Rian Johnson",
  2025,
  "10/10"
);

// Movie Console
console.log(KnivesOut);
console.log(GlassOnion);
console.log(WakeUpDeadMan);

// Overview Console
console.log(KnivesOut.overview);
console.log(GlassOnion.overview);
console.log(WakeUpDeadMan.overview);
