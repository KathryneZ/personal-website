//console.log(Bun.argv)
document.addEventListener("DOMContentLoaded", function() {
    //the game
    let width = 1000
    let height = 500
    let canvas = SVG().addTo("#drawing").size(width, height)
    let centerX = width / 2
    let centerY = height / 2

    let ball = canvas.circle(20).center(centerX, centerY).fill("blue")
    ball.xpos = centerX
    ball.ypos = centerY

    let xrate = Math.random() * 3 - 1.5
    let yrate = Math.random() * 3 - 1.5

    let updateInterval = 20
    let time = 0
    let score = 0

    let leftSound = new Audio("sounds/left.wav");
    let rightSound = new Audio("sounds/right.wav");
    let topSound = new Audio("sounds/top.wav");
    let bottomSound = new Audio("sounds/bottom.wav");

    //ball animate
    let intervals = []

    function bounce() {
        time += updateInterval
        ball.xpos += xrate
        ball.ypos += yrate

        if (ball.xpos <= 10) {
            xrate = -xrate
            leftSound.play();

        } else if (ball.xpos >= width - 10) {
            xrate = -xrate;
            rightSound.play();
        }
        
        if (ball.ypos <= 10) {
            yrate = -yrate;
            topSound.play();

        } else if (ball.ypos >= height - 10) {
            yrate = -yrate;
            bottomSound.play();
        }    

        ball.center(ball.xpos, ball.ypos)
    }

    //click score tracker
    function countScore() {
        score++
        const scoreDisplay = document.getElementById("scoreDisplay")
        scoreDisplay.innerHTML = "Score: " + score
    }


    //start w button pressed
    let timer = 5
    let countdowns = []

    let button = document.getElementById("button1")

    button.addEventListener("click", startGame)

    //start game button
    function startGame() {
        for (let bounceLoop of intervals) {
            clearInterval(bounceLoop)
        }
        intervals = []

        for (let countLoop of countdowns) {
            clearInterval(countLoop)
        }
        countdowns = []

        score = 0
        timer = 5
        time = 0
        ball.xpos = centerX
        ball.ypos = centerY
        ball.center(centerX, centerY)
        xrate = Math.random() * 3 - 1.5
        yrate = Math.random() * 3 - 1.5

        let bounceInterval = setInterval(bounce, updateInterval)
        intervals.push(bounceInterval)

        ball.on("click", countScore)

        const timerShown = document.getElementById("timer")

        function updateTimer() {
            //timer--
            if (timer > 0) {
                timerShown.innerHTML = "Time left: " + timer + "s"
            } else if (timer === 0) {
                timerShown.innerHTML = "Time left: 0s"
                setTimeout(function () {
                    alert("Time's up!\nClicks this round: " + score)
                    stopGame()
                }, 500)// if the delay is not added the text will not show when alert pops up.
            }
            timer--
        }
        
        updateTimer()
        let countLoop = setInterval(updateTimer, 1000)
        countdowns.push(countLoop)

    }

    function stopGame() {
        for (let bounceLoop of intervals) {
            clearInterval(bounceLoop)
        }
        intervals = []
    
        for (let countdownLoop of countdowns) {
            clearInterval(countdownLoop)
        }
        countdowns = []
        
        ball.xpos = centerX
        ball.ypos = centerY
        ball.center(centerX, centerY)
    
        const timerShown = document.getElementById("timer")
        timerShown.innerHTML = "Press [Restart Game] to play"
        
        
        ball.off("click", countScore)
        alert("Total score: " + score + ". Try to beat this score next round!")
        score = 0
        document.getElementById("scoreDisplay").innerHTML = "Score: 0"

    }


})



