let capture;
let posenet;
let skeleton;
let singlepose;


async function setup()
{
    createCanvas(1000,1000);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses)
}

function modelLoaded()
{
    console.log("model has laoded");
}

function receivedPoses(poses)
{
    console.log(poses);
    if(poses.length>0)
    {
        singlepose=poses[0].pose;
        skeleton = poses[0].skeleton;
    }
    
}

function draw()
{
    image(capture,0,0,800,600);
    fill(255,0,0);
    if (singlepose){
        for(let i = 0;i<singlepose.keypoints.length;i++)
        {
            ellipse(singlepose.keypoints[i].position.x+80,singlepose.keypoints[i].position.y+40,20)
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0;j<skeleton.length;j++)
        {
            line(skeleton[j][0].position.x+80,skeleton[j][0].position.y+40,skeleton[j][1].position.x+80,skeleton[j][1].position.y+40);

        }

    }
    
    
   
        
}