function setup(){
    canvas = createCanvas(700, 550);
    canvas.position(490, 190);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 50, 50 , 600, 450);
    fill(0, 255, 0)
    rect(0, 0, 50, 600)
    rect(650, 0, 50, 600)
    rect(0, 500, 700, 50)
    rect(0, 0, 700, 50)
    fill(255, 0, 0)
    circle(30, 30, 100, 100, 100)
    circle(670, 30, 100, 100, 100)
    circle(670, 520, 100, 100, 100)
    circle(30, 520, 100, 100, 100)
}

function take_snapshot(){
    save("Pic-With-Friends.png");
}