var canvas = document.getElementById('canvas');
var PlayerWidth = 50;
var PlayerHeight = 50;

function drawPlayer(){
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect((canvas.width/2)-(PlayerWidth/2), (canvas.height)-(PlayerHeight/2), PlayerWidth, PlayerHeight);
  }
}

drawPlayer();

function drawEnemies(nEnemies, gapSize){
  var enemyWidth =  (canvas.width - ((nEnemies+1)*gapSize) ) / nEnemies;
  var enemyHeight = 50;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "blue";
    var enemyX = gapSize;
    var enemyY = gapSize;

    for (enemies=0; enemies<nEnemies; enemies++){
      ctx.fillRect(enemyX, enemyY, enemyWidth, enemyWidth);
      enemyX = enemyX + enemyWidth + gapSize;
    }
  }
}

drawEnemies(10, 20);
