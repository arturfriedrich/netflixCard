// on mouse hover on the image play the trailer of the film

const downBtn = document.getElementById("downMenu")
const hiddenInf = document.getElementById("plusInfo")
const plusBtn = document.getElementById("plusBtn")
const likeBtn = document.getElementById("likeBtn")
const dislikeBtn = document.getElementById("dislikeBtn")

downBtn.addEventListener("click", function() {
    hiddenInf.classList.toggle("hidden")
    downBtn.classList.toggle("flipped")
})


plusBtn.addEventListener("click", function() {
    plusBtn.classList.toggle("clicked")
})

likeBtn.addEventListener("click", function() {
    likeBtn.classList.toggle("clicked")
    if (dislikeBtn.classList.contains("clicked")) {
        dislikeBtn.classList.remove("clicked")
    }
})

dislikeBtn.addEventListener("click", function() {
    dislikeBtn.classList.toggle("clicked")
    if (likeBtn.classList.contains("clicked")) {
        likeBtn.classList.remove("clicked")
    }
})
