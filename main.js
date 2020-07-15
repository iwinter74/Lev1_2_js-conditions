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

// function weather(quality) {
//     if (quality <= 10 && quality >= 8) {
//         console.log('super')
//     } else if (quality < 8 && quality >= 6) {
//         console.log('gut')
//     } else if (quality < 6 && quality >= 3) {
//         console.log('okay')
//     } else if (quality < 3 && quality >= 0) {
//         console.log('Schlecht')
//     } else {
//         console.log('only quality between 0 and 10')
//     }
// }
// test
// weather(9)
// weather(7)
// weather(5)
// weather(2)
// weather(-1)
// weather(11)
// function checkWeather() {
//     console.log("It works")
//     console.log(document.getElementById("qualityInput").value)
//     weather(document.getElementById("qualityInput").value)
// }
//oder
// function checkWeather() {
//     console.log("It works")
//     console.log(document.getElementById("qualityInput").value)
//     let quality = document.getElementById("qualityInput").value
//     if (quality <= 10 && quality >= 8) {
//         console.log('super')
//     } else if (quality < 8 && quality >= 6) {
//         console.log('gut')
//     } else if (quality < 6 && quality >= 3) {
//         console.log('okay')
//     } else if (quality < 3 && quality >= 0) {
//         console.log('Schlecht')
//     } else {
//         console.log('only quality between 0 and 10')
//     }
// }