document.addEventListener("DOMContentLoaded", function() {
    let width = 800
    let height = 600
    let canvas = SVG().addTo("#drawing").size(width, height)

    //creating many disks
    let disks = []
    let centerX = width / 2
    let centerY = height / 2

    for (let diskIndex =0; diskIndex <50; diskIndex++){
        //random movement of disk 
        let xrate = Math.random() * 5 - 2.5
        let yrate = Math.random() * 5 - 2.5

        let hue = Math.floor(Math.random()*360)
        let colour = new SVG.Color({ h:hue, s:100, l:50 })
        let rgbString = colour.toRgb().toString()

        let disk = canvas.circle(20).center(centerX, centerY).fill(rgbString)
        disk.data("originalColour", rgbString)
        disk.data("xrate", xrate)
        disk.data("yrate", yrate)

        disks.push(disk)
    }

    //rectangle
    let mouseState = {
        pushed: false,
        x: 0,
        y: 0
    } //track id mouse is down and position of cursor

    let interactionRectangle = canvas.rect(width, height)

    //interactionRectangle.fill('none') //nothing is detected 
    interactionRectangle.opacity(0)

    interactionRectangle.on("mousedown", function(event) {
        console.log("mousedown detected")
        mouseState.pushed = true
        mouseState.x = event.offsetX
        mouseState.y = event.offsetY
    })
    
    interactionRectangle.on("mouseup", function(event) {
        mouseState.pushed = false
        mouseState.x = event.offsetX
        mouseState.y = event.offsetY
        console.log("mouseup detected")
    })
    
    interactionRectangle.on("mousemove", function(event) {
        mouseState.x = event.offsetX
        mouseState.y = event.offsetY
        console.log("mousemove detected")
    })

    function calcDistance(x1, y1, x2, y2) {
        let dx = x2 - x1
        let dy = y2 - y1
        let distance = Math.sqrt(dx * dx + dy * dy)
        return distance
    }

    function draw() {
        for (let diskIndex = 0; diskIndex < disks.length; diskIndex++) {
            let disk = disks[diskIndex]
            let cx = disk.cx()
            let cy = disk.cy()
    
            let xrate = disk.data("xrate") //retreive previous value stored
            let yrate = disk.data("yrate")
    
            cx = cx + xrate
            cy = cy + yrate

        //radius = 10
            if (cx <= 10 || cx >= width - 10) {
            xrate = -xrate
            }
            if (cy <= 10 || cy >= height - 10) {
            yrate = -yrate
            }
    
            disk.center(cx, cy)
            disk.data("xrate", xrate)
            disk.data("yrate", yrate)
    
            disk.fill(disk.data("originalColour"))

            let dist = calcDistance(cx, cy, mouseState.x, mouseState.y)

            if (mouseState.pushed && dist <100) {
            disk.fill("white")
            } else {
                disk.fill(disk.data("originalColour"))
            }
            
        // let testDisk = disks[0]
        // let dx = testDisk.cx()
        // let dy = testDisk.cy()
        // let dist = calcDistance(dx, dy, mouseState.x, mouseState.y)
        // console.log("Distance from mouse to disk 0:", dist)
        }
    }
    setInterval(draw, 20)

})
