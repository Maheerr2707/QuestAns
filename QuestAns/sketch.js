var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game,form2;
var amswer1,answer2,answer3,answer4;


function preload(){}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  console.log(database)
  form = new Form();
  player = new Player();
  form2 = new Form2();
  player.update();
}


function draw(){
  form.display();

}

