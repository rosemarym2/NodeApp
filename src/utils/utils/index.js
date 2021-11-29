const movieArr = [];

class Movie {
  constructor(title,actor) {
      this.title = title;
      this.actor = actor;   
  }  

add() {
    movieArr.push(this);
}
}