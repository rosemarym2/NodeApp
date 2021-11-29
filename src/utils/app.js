const {Movie, movieArr} = require("./utils");

const app = (args) => {
  switch (args[2]){
      case "add":
          const movie = new Movie (args[3], args[4], args[5]);
          movie.add();
          console.log(movieArr);
          break;    
      case "add multi":
          const movie1 = new Movie (args[3], (args[4]));
          const movie2 = new Movie (args[5], (args[6]));
          const movie3 = new Movie (args[7], (args[8]));
          const movie4 = new Movie (args[9], (args[10]));
          const movie5 = new Movie (args[11], (args[12]));
          const movie6 = new Movie (args[13], (args[14]));
          movie1.add();
          movie2.add();
          movie3.add();
          movie4.add();
          movie5.add();
          movie6.add();
          console.log(movieArr);
          break;
     default:
          console.log("Incorrect Command");
          break;
  }  
};

