var dog,dogImg;
var dogHappy;
var database;
var foodS;
var foodStock;


function preload()
{
  dogImg=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
  
}

function setup() {
  
  database = firebase.database()
  createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg)
  dog.scale=0.15;
  
   foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20)


}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW))
  {
writeStock(foodS)
dog.addImage(dogHappy);
  }


  drawSprites();
  //add styles here

  fill(255);
  stroke("black");
  text("Food remaining : "+foodS,150,170);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20)
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  // if(x<=0){
  //   x=0;
  //   }else{
  //     x=x-1;
  //   }

  database.ref('/').update({
    Food:x
  })
}


