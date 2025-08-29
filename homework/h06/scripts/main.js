//setting up background
let svgWidth = 600;
let svgHeight = 400;

let svgCanvas = SVG().addTo("body").size(svgWidth,svgHeight);
svgCanvas.rect(svgWidth, svgHeight).fill("black");

const disk = svgCanvas.circle(40).fill("lime").center(svgWidth/2, svgHeight/2);

disk.xpos = svgWidth/ 2; 
disk.ypos = svgHeight/ 2;

// disk.xrate = 10; 
// disk.yrate = 10;
disk.xrate = 5; 
disk.yrate = 5;

//Tracking calls
let count = 0;

function draw() {
    count++;
    console.log("Draw function called " + count + " times.");

    // Update xpos and ypos 
    disk.xpos += disk.xrate;
    disk.ypos += disk.yrate; //store disk position

    console.log("X Position: " + disk.xpos, "Y Position " + disk.ypos);
    //the circle will move out of the svgCanvas and disappear

    //extended animation
    let newDisk = svgCanvas.circle(40).fill("white").center(disk.xpos, disk.ypos);

    newDisk.animate(1000).fill("#0000FF").after(function () {
        newDisk.remove()
    });

    newDisk.xpos = disk.xpos;
    newDisk.ypos = disk.ypos;
    newDisk.xrate = disk.xrate;
    newDisk.yrate = disk.yrate;

    newDisk.xpos += newDisk.xrate;
    newDisk.ypos += newDisk.yrate;


    //Fix 1
    if (disk.xpos - 20 <= 0 || disk.xpos + 20 >= svgWidth) { 
        disk.xrate = -disk.xrate; //hits the sides - reverse
    }
    if (disk.ypos - 20 <= 0 || disk.ypos + 20 >= svgHeight) {
        disk.yrate = -disk.yrate; //hits top and bottom - reverse
    }

    //changed disk moving
    // disk.attr({cx: disk.xpos, cy: disk.ypos});
    newDisk.attr({cx: disk.xpos, cy: disk.ypos});

}

setInterval(draw, 1000) // SsetInterval(draw, 1000/ 60); 



// //extend animation
// let newDisk = svgCanvas.circle(40).fill("yellow").center(disk.xpos, disk.ypos);

// newDisk.xpos = disk.xpos;
// newDisk.ypos = disk.ypos;
// newDisk.xrate = disk.xrate;
// newDisk.yrate = disk.yrate;

// newDisk.attr({cx: newDisk.xpos, cy: newDisk.ypos});

// //fix 2
// newDisk.animate(3000).fill("blue").after(function() {
//     newDisk.remove();
// });