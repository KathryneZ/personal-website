const socket = new WebSocket("ws://localhost:11257")

const chatLog = document.getElementById("chatLog")
const chatBox = document.getElementById("chatBox")
const usernameInput = document.getElementById("username")

socket.addEventListener("open", function() {
    console.log("WebSocket connected")
})


chatBox.addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
        const username = usernameInput.value
        if (username === "") {
            alert("Username empty. Please enter your username.")
            return
        }
        //const message = username + ": " + chatBox.value
        const text = chatBox.value
        const messageObject = {
            type: "text",
            data: {
                username: username,
                text: text
            }
        }

        chatBox.value = ""
        socket.send(JSON.stringify(messageObject))
    }
})

socket.addEventListener("message", function(event){
    const message = JSON.parse(event.data)
    if (message.type === "text") {
        chatLog.innerHTML += "<p>" + message.data.username + ": " + message.data.text + "</p>"
    }

    if (message.type === "drawing") {
        chatLog.innerHTML += "<p>" + message.data.username + " sent a drawing </p>"
    }

})


//create new svg path when mouse is down. when mouse move, svg path should be updated.

const draw = SVG().addTo('#drawing').size("500px","300px")

let paths = []
let drawing = false
let points = []


const drawingMouse = document.getElementById("drawing")

function getMousePosition(event, element) {
    const rect = element.getBoundingClientRect()
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

drawingMouse.addEventListener("mousedown", function(event) {
    drawing = true
    points = []

    const point = getMousePosition(event, drawingMouse)
    points.push(point)

    const newPath = draw.path("M" + point.x + "," + point.y)
    newPath.fill("none")
    newPath.stroke({ width: 2, color: "black" })

    paths.push(newPath)
})

drawingMouse.addEventListener("mousemove", function(event) {
    if (! drawing || paths.length === 0) return //not drawing

    const point = getMousePosition(event, drawingMouse)
    points.push(point)

    //"M"` = Move to start of path
    //"L"` = Line to draw straight line from previous point
    let pathData = ""
    for (let index = 0;
        index < points.length; index++) {
        if (index === 0) {
            pathData += "M" + points[index].x + "," + points[index].y
        } else {
            pathData += " L" + points[index].x + "," + points[index].y
        }
    }
    paths[paths.length - 1].plot(pathData)
})


document.addEventListener("mouseup", function(event) {
    if (!drawing || points.length === 0) return

    drawing = false
    const point = getMousePosition(event, drawingMouse)
    points.push(point)

    let pathData = ""
    for (let index = 0; index < points.length; index++) {
        if (index === 0) {
            pathData += "M" + points[index].x + "," + points[index].y
        } else {
            pathData += " L" + points[index].x + "," + points[index].y
        }
    }

    paths[paths.length - 1].plot(pathData)

    const username = usernameInput.value
    if (username !== "") {
        const messageObject = {
            type: "drawing",
            data: {
                username: username,
                pathString: pathData
            }
        }

        socket.send(JSON.stringify(messageObject))
    }

    points = []
})

const clearBtn = document.getElementById("clearBtn")

clearBtn.addEventListener("click", function () {
    draw.clear()
    paths = []
    points = []
})