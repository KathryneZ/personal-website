
//drawww
const heartPath = "M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4z"
let svg = SVG()
svg.addTo("body")
svg.size(800,600)

let myHeart = svg.path(heartPath).attr({
    fill:"red",
    stroke:"red",
})

//TRANSFORM
//myHeart.transform({
    //scale: 2,
    //translate: {x: 30, y: 20},
    //rotate: 50
//})

//2stage ANIMATION
function stage1(){
    myHeart.animate(60,0, "now").transform({
        scale: 0.5,
    }).after(stage2)
}

function stage2(){
    myHeart.animate(60,0, "now").transform({
        scale: 2
    }).after(stage3)
}

function stage3(){
    myHeart.animate(240,200, "now").transform({
        rotate: 70
    }).after(stage4)
}

function stage4(){
    myHeart.animate(120,60, "now").transform({
        scale: 0.8
    }).after(stage1)
}

stage1()
//SLIDER

let slider = document.querySelector("input")
slider.addEventListener("input", function (){
    myHeart.timeline().speed(slider.value)
})


