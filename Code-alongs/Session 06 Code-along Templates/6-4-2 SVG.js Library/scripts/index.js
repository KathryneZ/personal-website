console.log(SVG())
const svg = SVG()
svg.addTo("body")
svg.size(500, 500)

svg.rect(50,100).move(200, 200).attr({
    fill:"red",
    stroke: "black"
})

// w/o the svg min extension, 
//svg.setAttribute("fill","red")
//svg.setAttribute("stroke","black")