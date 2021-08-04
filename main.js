function preload(){

}

function setup(){
Canvas=createCanvas(640,400);
Canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw(){
image(video,0,0,640,400);
tint(tint_color);
}

function take_snapshot(){
save("vidhushi.png");
}

function filter_tint(){
tint_color=document.getElementById("color_name").value;
}