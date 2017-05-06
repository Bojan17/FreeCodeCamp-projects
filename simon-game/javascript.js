var game = {
  count: 0,
  possibilities: ['#green','#blue', '#red', '#yellow'],
  currentGame: [],
  player: [],
  sound:{
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  },
  strict: false,
}
var id,field;
$('#start').click(function(){
  newGame();
});

$('.buttons').click(function(){
  id=this.attr('id');
  addToPlayer(id);
});

function sound(name) {
  switch(name) {
    case'#green':
      game.sound.green.play();
      break;
    case '#blue':
      game.sound.blue.play();
      break;
    case '#red':
      game.sound.red.play();
      break;
    case '#yellow':
      game.sound.yellow.play();
      break;
  };
}


function newGame(){
  clearGame();
}
function nextLevel(){
  addCount();
}

function clearGame(){
  game.currentGame=[];
  game.count=0;
  addCount();
}

function addCount(){
  game.count++;
  $('result').display(game.count);
  generateMove();
}

function generateMove(){
  game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
  showMove();
}

function showMove(){
  var i = 0;
  var moves=setInterval(function(){
    playGame(game.currentGame[i]);
    i++;
    if(i>game.currentGame.length){
      clearInterval(moves);
    }
  },500);
  clearPlayer();
}

function playGame(field){
  $(this).addClass('active');
  sound(this);
  setTimeout(function(){
    $(this).removeClass('active');
  },300);
}

function clearPlayer(){
  game.player=[];
}

function addToPlayer(id){
 field='#'+id;
game.player.push(field);
playerTurn(field);
}

function playerTurn(x){
  if(game.player[game.player.length-1]!==
  game.currentGame[game.player.length-1]){
    alert('Wronn!');
    newGame();
  }
  sound(x);
  var check=game.player.length===game.currentGame.length;
if(check){
  if(game.count > 20){
    alert("You won!");
    newGame();
  }else{
    nextLevel();
  }
 }
}
