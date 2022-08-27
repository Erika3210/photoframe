function preload() {

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";

}
function draw() {
    image(video, 0, 0, 640, 480);
    stroke(225, 0, 0 );
    fill(225, 0, 0);
    circle(50, 50, 80);
    circle(550, 50, 80);
    circle(550, 430, 80);
    circle(50, 430, 80);
    stroke(0, 128, 0);
    fill(0, 128, 0);
    rect(40, 90, 20, 300);
    rect(540, 90, 20, 300 );
    rect(90, 420, 420, 20);
    rect(90, 40, 420, 20);


}
function take_snapshot() {
    save('student_name.png');

}
