// SVG namespace: http://www.w3.org/2000/svg

// Path commands reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
// M/m 	Move to (move invisible cursor, start at top left 0,0)
// L/l	Line to
// H/h	Horizontal line to
// V/v	Vertical line to
// C/c	Cubic Bezier Curve
// S/s	Smooth Curve To
// Q/q	Quadratic Bezier Curve to
// T/t	Smooth Quadratic Bezier Curve
// A/a	Arc to
// Z	Close path
console.log("test")

//const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
//const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
document.body.appendChild(svg)
svg.appendChild(path)

//more efficient way
const svgNS = "http://www.w3.org/2000/svg"

function createSVGElement(type) {
    const element = document.createElementNS(svgNS, type)
    return element
}
const svg = createSVGElementNS("svg")
const path = createSVGElementNS("path")

path.setAttribute('d', 'M 250 250 L 500 250 V 100 m -100 0 1 0 100')//just insert value. default is with fill
//capital letter - absolute. small letter/lower case - relative
path.style.stroke = "black"
path.style.fill = "transparent"

document.body.appendChild(svg)
svg.appendChild(path)