console.log("test")

//Data manipulation 1
function hslString(h,s,l) {
    console.log("hsl("+ h + ", " + s + "%, " + l + "%)");
    return "hsl("+ h + ", " + s + "%, " + l + "%)";
 }

 hslString(30,40,60);
 
//Communicate w DOM 1
let hueSlider = document.getElementById("hue");
let saturationSlider =document.getElementById("saturation");
let lightnessSlider =document.getElementById("lightness");
let section = document.querySelector("section");

function updateBackgroundColor() {
    let h = hueSlider.value;
    let s = saturationSlider.value;
    let l = lightnessSlider.value;

    let hslColor = hslString(h, s, l);
    section.style.backgroundColor = hslColor;
}

hueSlider.addEventListener("input", updateBackgroundColor);
saturationSlider.addEventListener("input", updateBackgroundColor);
lightnessSlider.addEventListener("input", updateBackgroundColor);

//call function
updateBackgroundColor();

//Communicate w DOM 2
let opacitySlider = document.getElementById("opacity");
function updateBackgroundColorNew() {
    let h = hueSlider.value;
    let s = saturationSlider.value;
    let l = lightnessSlider.value;
    let opacity = opacitySlider.value;

    let hslColor = hslString(h, s, l);
    section.style.backgroundColor = hslColor;
    section.style.opacity = opacity;
}

hueSlider.addEventListener("input", updateBackgroundColorNew);
saturationSlider.addEventListener("input", updateBackgroundColorNew);
lightnessSlider.addEventListener("input", updateBackgroundColorNew);
opacitySlider.addEventListener("input", updateBackgroundColorNew);


section.addEventListener("mousedown", () => {
    section.style.opacity = "1";
});

section.addEventListener("mouseup", () => {
    section.style.opacity = opacitySlider.value;
});
updateBackgroundColor();
updateBackgroundColorNew()