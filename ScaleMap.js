const image = document.getElementById("countriesMap")
const areas = document.querySelectorAll('map[name="countries"] area')

const originalCoords = []
areas.forEach(area => {  //saves original coords for scaling
    const coords = area.coords.split(",").map(Number)
    originalCoords.push(coords)
})

const originalWidth = 5279

function scaleMap() {
    const currentWidth = image.clientWidth
    const scale = currentWidth / originalWidth

    areas.forEach((area, index) => {//uses scale and coords to create new coords that are scaled based on the images displayed size
        const scaledCoords = originalCoords[index].map(coord => Math.round(coord * scale))

        area.coords = scaledCoords.join(",")
    })
}

//Event listeners for image loading and resizing
image.addEventListener("load", scaleMap)
window.addEventListener("resize", scaleMap)
scaleMap()