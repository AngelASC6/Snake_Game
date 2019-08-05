//Vid I'm using
//https://www.youtube.com/watch?v=vqE8DMfOajk
//decalre variables
let posX = 500
let posY = 250
let ememyPosX
let enemyPosY
let myTop,myBottom,myLeft,myRight
let enemyTop,enemyBottom,enemyLeft,enemyRight
let segmentArray = []
let headArray = []
let maxLength = 10
let points = 0

function setup(){
    createCanvas(1000,500)
    background(0)
    rectMode(CENTER)
    //randomly spawns an enemy
    enemyPosX = random(25, 975)
    enemyPosY = random(25,475)
    class Head {
        constructor(x,y,width,height){
            this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.history = []
        this.history.push(this.x)
    }
}
head = new Head(posX,posY,50,50)
headArray.push(head)
}

function draw(){
    noStroke()
    background(0)

    text("Score "+ points,870,60)
    for(let i = 0;i<headArray.length; i++){
        // background(0)
        fill(255)
        rect(headArray[i].x,headArray[i].y,headArray[i].width,headArray[i].height)
    }
    class Head {
        constructor(x,y,width,height){
            this.x = x
            this.y = y
            this.width = width
            this.height = height
            this.history = []
            this.history.push(this.x)
        }
    }
    head = new Head(posX,posY,50,50)
    // headArray.pop()
    headArray.push(head)
    // console.log(headArray)

    //ALLOWS PLAYER TO MOVE
        if (keyCode === LEFT_ARROW) {
            posX -= 3;
        } else if (keyCode === RIGHT_ARROW) {
            posX += 3
        }
         else if (keyCode === UP_ARROW) {
            posY -= 3
        }
        else if (keyCode === DOWN_ARROW) {
            posY += 3
        }

    //restricts players movements
    if(posY <= 25){
        posY = 25
    }
    if(posY >= 475){
        posY = 475
    }
    if(posX <= 25){
        posX = 25
    }
    if(posX >= 975){
        posX = 975
    }

    //creates enemy
    fill(0,0,255)
    rect(enemyPosX,enemyPosY,50,50)
    

    //collisions
     //Know my edges
     myLeft = posX - 25;
     myRight = posX + 25;
     myTop = posY-25;
     myBottom = posY + 25;

     //define enemy edges
     enemyLeft = enemyPosX - 25
     enemyRight = enemyPosX +25
     enemyTop = enemyPosY -25
     enemyBottom = enemyPosY +25

     //detects collison (or rather non collision)
       if(myLeft > enemyRight|| myRight < enemyLeft || myTop > enemyBottom|| myBottom<enemyTop) {
       //do nothing
       }
       else {
           //Outputs collision
            enemyPosX = random(25, 975);
            enemyPosY = random(25,475);
            maxLength += 25
            points += 100
       }


       //reduces lag
       //nvm it actually makes the snake
       if (headArray.length > maxLength){
           for(let i=0;i<2;i++){
            headArray.shift()
           }
       }
    
}