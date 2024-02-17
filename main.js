function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    Image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getAnimationsElementById("color_name").value;
}
circle(30, 30, 20);
describe('A white circle with black outline in the middle of a gray canvas.');

ellipse(56, 46, 55, 55);
describe('A white ellipse with black outline in middle of a gray canvas.');

rect(30, 20, 55, 55, 20);
describe(
  'A white rectangle with a black outline and round edges on a gray canvas.'
);