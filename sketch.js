var database;
var position;
var game;

function setup(){
  
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);

  game = new Game()
  game.getState()
  game.start()


  
}

function draw(){
  background("white");
  
    

  
}

