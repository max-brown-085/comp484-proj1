const select = document.getElementById("blurSelect")
const images = document.querySelectorAll(".blurImage")

select.addEventListener("change", () => {//adds blurred class to images if blurred is selected. Removes it otherwise.
    if (select.value === "blurred") {
        images.forEach(image => {
            image.classList.add("blurred")
        })
    } else {
        images.forEach(image => {
            image.classList.remove("blurred")
        })
    }
})
