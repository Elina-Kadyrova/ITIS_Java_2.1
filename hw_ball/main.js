window.addEventListener("DOMContentLoaded", () => {
    moveDown = true
    moveRight = true
    ball = document.getElementsByClassName("ball")[0]

    ball.onclick = function () {
        directionVert = 0
        directionHor = 0
        intervalVert = setInterval(function () {
            directionVert = moveDown? directionVert + 5 : directionVert - 5
            if (moveDown && ball.getBoundingClientRect().top > document.documentElement.clientHeight - 110) {
                moveDown = false
            }
            if (!moveDown && ball.getBoundingClientRect().top <= 0) {
                moveDown = true
            }
            ball.style.top = directionVert + 'px'
        }, 5)

        intervalHor = setInterval(function () {
            directionHor = moveRight? directionHor + 5 : directionHor - 5
            if (moveRight && ball.getBoundingClientRect().right > document.documentElement.clientWidth - 10) {
                moveRight = false
            }
            if (!moveRight && ball.getBoundingClientRect().right <= 100) {
                moveRight = true
            }
            ball.style.left = directionHor + 'px'
        }, 40)
    }
})