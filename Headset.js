Status = "";
Headset_image = "";

function preload(){
    Headset_image = loadImage("Headset.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Headset_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Headset_image,0,0,640,350);
    if(Status !=""){
        for(i = 0; i < objects.lenght; i++){
            document.getElementById("Status").innerHTML = "Status : Objects Detected"

            fill("#fc0303");
            percent = floor(objects [i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x - 14, objects[i].y - 175);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 14, objects[i].y - 175, objects[i].width - 2326, objects[i].height - 2640);
        }
    }
}
