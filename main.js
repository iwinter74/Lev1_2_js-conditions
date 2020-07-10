let quality

function weather() {
    console.log("working")
    quality = document.getElementById("quality").value
    if ((quality >= 8) && (quality <= 10)) {
        console.log("super")
    } else if ((quality >= 6) && (quality < 8)) {
        console.log("gut")
    } else if ((quality >= 3) && (quality < 6)) {
        console.log("okay")
    } else if ((quality >= 0) && (quality < 3)) {
        console.log("schlecht")
    } else {
        console.log("wrong input: give a number between 0 and 10")
    }    
    console.log(quality)
}