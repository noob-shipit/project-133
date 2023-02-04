Status = "";
fan_image = "";

function preload(){
    Notebook_image = loadImage("Notebook.jpg");
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
    object_Detector.detect(Notebook_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Notebook_image,0,0,640,350);
    if(Status !=""){
        for(i = 0; i < objects.lenght; i++){
            document.getElementById("Status").innerHTML = "Status : Objects Detected"

            fill("#fc0303");
            percent = floor(objects [i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x - 180, objects[i].y - 200);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 180, objects[i].y - 200, objects[i].width - 2693, objects[i].height - 3640);
        }
    }
}
