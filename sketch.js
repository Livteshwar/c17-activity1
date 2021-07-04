var box1,box2,box3
function setup() 
{
  createCanvas(400, 400);

  box1=new Box(200,200,50,50,4,0);
  box2=new Box(200,200,50,50,0,4);
  box3=new Box(200,200,50,50,4,4);
}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box3.show();
  box1.move();
  box2.moveUp();
  box3.move();
  box3.moveUp();
}

