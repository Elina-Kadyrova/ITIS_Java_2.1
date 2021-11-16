window.addEventListener('DOMContentLoaded', () => {
    buttons = document.querySelectorAll(".btn");
    colors = ['#c2bf61', '#61c264', '#6193c2'];
    i = -1

    document.querySelector(".change-button").addEventListener('click', function () {
        i = (i + 1) % 3
        document.body.style.backgroundColor = colors[i]
    })
})